"""Config flow for Ultra Card Pro Cloud integration."""
from __future__ import annotations

import asyncio
import json
import logging
from typing import Any

import aiohttp
import voluptuous as vol

from homeassistant import config_entries
from homeassistant.config_entries import ConfigFlowResult
from homeassistant.const import CONF_PASSWORD, CONF_USERNAME
from homeassistant.core import HomeAssistant
from homeassistant.helpers.aiohttp_client import async_get_clientsession
from homeassistant.helpers.selector import (
    SelectSelector,
    SelectSelectorConfig,
    SelectOptionDict,
    SelectSelectorMode,
)

from .auth_state import get_auth_state
from .bot_challenge import is_bot_challenge
from .jwt_utils import parse_token_response
from .const import (
    DOMAIN,
    API_BASE_URL,
    JWT_ENDPOINT,
    ERROR_INVALID_AUTH,
    ERROR_CANNOT_CONNECT,
    ERROR_RATE_LIMITED,
    ERROR_UNKNOWN,
    ERROR_BOT_CHALLENGE,
)

_LOGGER = logging.getLogger(__name__)

# Constants for retry logic
MAX_RETRIES = 2  # Reduced from 3 to minimize traffic on failures
RETRY_DELAY = 2  # seconds

# Connection settings (match coordinator.py)
USER_AGENT = "HomeAssistant/UltraCardProCloud/1.0"
REQUEST_TIMEOUT = 30  # Total timeout in seconds
CONNECT_TIMEOUT = 10  # Connection establishment timeout

# Menu: Sign In or Set Up Without Account (so sidebar appears for new users)
STEP_MENU_SCHEMA = vol.Schema(
    {
        vol.Required("next_step", default="sign_in"): SelectSelector(
            SelectSelectorConfig(
                options=[
                    SelectOptionDict(value="sign_in", label="Sign in with ultracard.io account"),
                    SelectOptionDict(value="setup_without_account", label="Set up without an account (sign in later in the sidebar)"),
                ],
                mode=SelectSelectorMode.LIST,
                translation_key="next_step",
            )
        ),
    }
)

STEP_USER_DATA_SCHEMA = vol.Schema(
    {
        vol.Required(CONF_USERNAME): str,
        vol.Required(CONF_PASSWORD): str,
    }
)


def _get_timeout() -> aiohttp.ClientTimeout:
    """Get standard timeout configuration."""
    return aiohttp.ClientTimeout(total=REQUEST_TIMEOUT, connect=CONNECT_TIMEOUT)


def _get_headers() -> dict[str, str]:
    """Get standard request headers with User-Agent."""
    # Note: Don't set Content-Type here - aiohttp sets it automatically with json=
    return {
        "User-Agent": USER_AGENT,
        "Accept": "application/json",
    }


async def validate_auth(
    hass: HomeAssistant, username: str, password: str
) -> dict[str, Any]:
    """Validate the user credentials with a single /token call.

    The issued tokens are stashed in the shared AuthState so the entry that
    uses these credentials picks them up instead of signing in a second time.
    """
    session = async_get_clientsession(hass)
    url = f"{API_BASE_URL}{JWT_ENDPOINT}/token"
    auth_state = get_auth_state(hass.data.setdefault(DOMAIN, {}))

    if auth_state.sign_in_wait_seconds() > 0:
        _LOGGER.warning("Sign-in skipped: ultracard.io is still rate-limiting this network")
        raise RateLimited

    _LOGGER.debug("🔐 Validating auth for user: %s", username)

    for attempt in range(MAX_RETRIES):
        try:
            async with session.post(
                url,
                json={"username": username, "password": password},
                headers=_get_headers(),
                timeout=_get_timeout(),
            ) as response:
                response_text = await response.text()
                _LOGGER.debug("📥 Auth response status: %s", response.status)
                # Never log the body here: a 2xx body contains the JWT.
                _LOGGER.debug("📥 Auth response length: %d bytes", len(response_text))

                # Challenge pages never reach WordPress: a 403 here is not a
                # wrong password and retrying cannot succeed.
                if is_bot_challenge(response, response_text):
                    _LOGGER.warning("Sign-in blocked before reaching ultracard.io (HTTP %s)", response.status)
                    raise BotChallenge

                # Signing in again before Retry-After ends cannot succeed; the
                # block is shared with the coordinator.
                if response.status == 429:
                    wait = auth_state.block_sign_in(response.headers.get("Retry-After"))
                    _LOGGER.warning(
                        "⏳ ultracard.io rate-limited sign-in; not retrying for %.0f seconds", wait
                    )
                    raise RateLimited
                
                # Handle auth failures
                if response.status == 401 or response.status == 403:
                    _LOGGER.error("❌ Authentication failed: Invalid credentials (status %s)", response.status)
                    raise InvalidAuth
                
                # Accept any 2xx status as success
                if not (200 <= response.status < 300):
                    _LOGGER.error("❌ Authentication failed with status: %s - %s", 
                                 response.status, response_text[:200])
                    if attempt < MAX_RETRIES - 1:
                        _LOGGER.info("🔄 Retrying in %s seconds (attempt %d/%d)", 
                                    RETRY_DELAY * (attempt + 1), attempt + 1, MAX_RETRIES)
                        await asyncio.sleep(RETRY_DELAY * (attempt + 1))
                        continue
                    raise CannotConnect

                # Parse the response
                try:
                    data = json.loads(response_text)
                except json.JSONDecodeError as e:
                    _LOGGER.error("❌ Failed to parse auth response: %s", e)
                    raise CannotConnect from e
                
                # JWT Auth Pro response format - check for token in various locations
                token, refresh, expires_at = parse_token_response(data)
                if not token:
                    _LOGGER.error("❌ No token in response. Keys: %s", list(data.keys()))
                    raise InvalidAuth

                auth_state.stash_tokens(username, token, refresh, expires_at)
                _LOGGER.debug("Credentials validated")
                
                return {
                    "user_id": data.get("user_id") or data.get("data", {}).get("user_id"),
                    "username": data.get("user_nicename") or data.get("data", {}).get("user_nicename") or username,
                    "email": data.get("user_email") or data.get("data", {}).get("user_email"),
                    "display_name": data.get("user_display_name") or data.get("data", {}).get("user_display_name") or username,
                }

        except aiohttp.ClientConnectorError as err:
            _LOGGER.error(
                "❌ Connection error (attempt %d/%d): %s "
                "(DNS or network issue - verify ultracard.io is reachable)",
                attempt + 1, MAX_RETRIES, err
            )
            if attempt < MAX_RETRIES - 1:
                await asyncio.sleep(RETRY_DELAY * (attempt + 1))
                continue
            raise CannotConnect from err
        except aiohttp.ClientSSLError as err:
            _LOGGER.error(
                "❌ SSL/TLS error (attempt %d/%d): %s "
                "(Certificate issue - may be proxy/firewall related)",
                attempt + 1, MAX_RETRIES, err
            )
            if attempt < MAX_RETRIES - 1:
                await asyncio.sleep(RETRY_DELAY * (attempt + 1))
                continue
            raise CannotConnect from err
        except asyncio.TimeoutError:
            _LOGGER.error(
                "❌ Connection timed out (attempt %d/%d) "
                "(Server did not respond within %d seconds)",
                attempt + 1, MAX_RETRIES, REQUEST_TIMEOUT
            )
            if attempt < MAX_RETRIES - 1:
                await asyncio.sleep(RETRY_DELAY * (attempt + 1))
                continue
            raise CannotConnect from None
        except asyncio.CancelledError:
            # Don't catch CancelledError - let it propagate for proper task cancellation
            _LOGGER.debug("Request cancelled (HA shutting down or task cancelled)")
            raise
        except aiohttp.ServerDisconnectedError as err:
            _LOGGER.error(
                "❌ Server disconnected (attempt %d/%d): %s",
                attempt + 1, MAX_RETRIES, err
            )
            if attempt < MAX_RETRIES - 1:
                await asyncio.sleep(RETRY_DELAY * (attempt + 1))
                continue
            raise CannotConnect from err
        except aiohttp.ClientError as err:
            _LOGGER.error("❌ Connection error (attempt %d/%d): %s", attempt + 1, MAX_RETRIES, err)
            if attempt < MAX_RETRIES - 1:
                await asyncio.sleep(RETRY_DELAY * (attempt + 1))
                continue
            raise CannotConnect from err
        except (InvalidAuth, CannotConnect, RateLimited, BotChallenge):
            raise
        except Exception as err:
            _LOGGER.exception("❌ Unexpected error during authentication (%s): %s", type(err).__name__, err)
            if attempt < MAX_RETRIES - 1:
                await asyncio.sleep(RETRY_DELAY * (attempt + 1))
                continue
            raise CannotConnect from err
    
    # If we get here, all retries failed
    _LOGGER.error("❌ Authentication failed after %d attempts", MAX_RETRIES)
    raise CannotConnect


class UltraCardProCloudConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Handle a config flow for Ultra Card Connect."""

    VERSION = 1

    async def async_step_user(
        self, user_input: dict[str, Any] | None = None
    ) -> ConfigFlowResult:
        """Show menu: Sign In or Set Up Without Account."""
        if user_input is None and self.hass.config_entries.async_entries(DOMAIN):
            return self.async_abort(reason="already_configured")

        if user_input is not None:
            if user_input["next_step"] == "setup_without_account":
                # Create entry with no credentials; user signs in later via Account tab
                _LOGGER.debug("Creating config entry without credentials (sidebar only)")
                return self.async_create_entry(
                    title="Ultra Card (not signed in)",
                    data={},
                )
            # Sign in -> go to credentials step
            return await self.async_step_credentials(None)

        return self.async_show_form(
            step_id="user",
            data_schema=STEP_MENU_SCHEMA,
            description_placeholders={"url": "https://ultracard.io"},
        )

    async def async_step_credentials(
        self, user_input: dict[str, Any] | None = None
    ) -> ConfigFlowResult:
        """Handle username/password step."""
        errors: dict[str, str] = {}

        if user_input is not None:
            try:
                info = await validate_auth(
                    self.hass,
                    user_input[CONF_USERNAME],
                    user_input[CONF_PASSWORD],
                )

                await self.async_set_unique_id(user_input[CONF_USERNAME].lower())
                self._abort_if_unique_id_configured()

                _LOGGER.debug("Creating config entry for user: %s", info["username"])
                return self.async_create_entry(
                    title=_entry_title(info["username"]),
                    data=user_input,
                )

            except InvalidAuth:
                _LOGGER.warning("Invalid credentials provided")
                errors["base"] = ERROR_INVALID_AUTH
            except RateLimited:
                errors["base"] = ERROR_RATE_LIMITED
            except BotChallenge:
                errors["base"] = ERROR_BOT_CHALLENGE
            except CannotConnect:
                _LOGGER.warning("Cannot connect to ultracard.io")
                errors["base"] = ERROR_CANNOT_CONNECT
            except Exception:  # pylint: disable=broad-except
                _LOGGER.exception("Unexpected exception during config flow")
                errors["base"] = ERROR_UNKNOWN

        return self.async_show_form(
            step_id="credentials",
            data_schema=STEP_USER_DATA_SCHEMA,
            errors=errors,
            description_placeholders={"url": "https://ultracard.io"},
        )

    async def async_step_user_api(
        self, user_input: dict[str, Any] | None = None
    ) -> ConfigFlowResult:
        """Programmatic entry creation from the frontend HTTP API view.

        Called with data={CONF_USERNAME: ..., CONF_PASSWORD: ...} already
        validated by the caller. We skip the interactive UI entirely.
        """
        if user_input is None:
            return self.async_abort(reason="unknown")

        if self.hass.config_entries.async_entries(DOMAIN):
            return self.async_abort(reason="already_configured")

        username = user_input.get(CONF_USERNAME, "")
        password = user_input.get(CONF_PASSWORD, "")

        try:
            info = await validate_auth(self.hass, username, password)
        except InvalidAuth:
            _LOGGER.warning("API-initiated sign-in rejected: invalid credentials")
            return self.async_abort(reason="invalid_auth")
        except RateLimited:
            _LOGGER.warning("API-initiated sign-in held back: ultracard.io is rate-limiting")
            return self.async_abort(reason=ERROR_RATE_LIMITED)
        except BotChallenge:
            return self.async_abort(reason=ERROR_BOT_CHALLENGE)
        except CannotConnect:
            _LOGGER.warning("API-initiated sign-in failed: cannot reach ultracard.io")
            return self.async_abort(reason="cannot_connect")

        await self.async_set_unique_id(username.lower())
        self._abort_if_unique_id_configured()

        return self.async_create_entry(
            title=_entry_title(info.get("username", username)),
            data={CONF_USERNAME: username, CONF_PASSWORD: password},
        )

    async def async_step_reauth(self, entry_data: dict[str, Any]) -> ConfigFlowResult:
        """Handle reauth flow."""
        return await self.async_step_reauth_confirm()

    async def async_step_reauth_confirm(
        self, user_input: dict[str, Any] | None = None
    ) -> ConfigFlowResult:
        """Ask for the current ultracard.io login, prefilled with the stored username."""
        entry = self._get_reauth_entry()
        errors = await self._async_try_credentials(user_input) if user_input else {}
        if user_input is not None and not errors:
            # Users may sign in with either username or email, so the account
            # is not pinned to unique_id; merge so unrelated entry data survives.
            return self.async_update_reload_and_abort(
                entry,
                title=_entry_title(user_input[CONF_USERNAME]),
                data={**entry.data, **user_input},
            )

        return self.async_show_form(
            step_id="reauth_confirm",
            data_schema=self.add_suggested_values_to_schema(
                STEP_USER_DATA_SCHEMA,
                {CONF_USERNAME: (user_input or entry.data).get(CONF_USERNAME, "")},
            ),
            errors=errors,
        )

    async def async_step_reconfigure(
        self, user_input: dict[str, Any] | None = None
    ) -> ConfigFlowResult:
        """Change the ultracard.io account without removing the integration."""
        entry = self._get_reconfigure_entry()
        errors = await self._async_try_credentials(user_input) if user_input else {}
        if user_input is not None and not errors:
            return self.async_update_reload_and_abort(
                entry,
                title=_entry_title(user_input[CONF_USERNAME]),
                data={**entry.data, **user_input},
            )

        return self.async_show_form(
            step_id="reconfigure",
            data_schema=self.add_suggested_values_to_schema(
                STEP_USER_DATA_SCHEMA,
                {CONF_USERNAME: (user_input or entry.data).get(CONF_USERNAME, "")},
            ),
            errors=errors,
        )

    async def _async_try_credentials(self, user_input: dict[str, Any]) -> dict[str, str]:
        """Validate credentials and return form errors (empty when they work)."""
        try:
            await validate_auth(
                self.hass, user_input[CONF_USERNAME], user_input[CONF_PASSWORD]
            )
        except InvalidAuth:
            return {"base": ERROR_INVALID_AUTH}
        except RateLimited:
            return {"base": ERROR_RATE_LIMITED}
        except BotChallenge:
            return {"base": ERROR_BOT_CHALLENGE}
        except CannotConnect:
            return {"base": ERROR_CANNOT_CONNECT}
        except Exception:  # pylint: disable=broad-except
            _LOGGER.exception("Unexpected exception while checking credentials")
            return {"base": ERROR_UNKNOWN}
        return {}


def _entry_title(username: str) -> str:
    return f"Ultra Card ({username})"


class CannotConnect(Exception):
    """Error to indicate we cannot connect."""


class InvalidAuth(Exception):
    """Error to indicate there is invalid auth."""


class RateLimited(Exception):
    """Error to indicate ultracard.io is refusing sign-ins from this network for now."""


class BotChallenge(Exception):
    """Error to indicate edge bot protection blocked the request before WordPress."""
