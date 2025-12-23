"""Config flow for Ultra Card Pro Cloud integration."""
from __future__ import annotations

import logging
import asyncio
from typing import Any

import aiohttp
import voluptuous as vol

from homeassistant import config_entries
from homeassistant.const import CONF_PASSWORD, CONF_USERNAME
from homeassistant.core import HomeAssistant
from homeassistant.data_entry_flow import FlowResult
from homeassistant.helpers.aiohttp_client import async_get_clientsession

from .const import (
    DOMAIN,
    API_BASE_URL,
    JWT_ENDPOINT,
    ERROR_INVALID_AUTH,
    ERROR_CANNOT_CONNECT,
    ERROR_UNKNOWN,
)

_LOGGER = logging.getLogger(__name__)

# Constants for retry logic
MAX_RETRIES = 3
RETRY_DELAY = 2  # seconds
RATE_LIMIT_DELAY = 5  # seconds

# Connection settings (match coordinator.py)
USER_AGENT = "HomeAssistant/UltraCardProCloud/1.0"
REQUEST_TIMEOUT = 30  # Total timeout in seconds
CONNECT_TIMEOUT = 10  # Connection establishment timeout

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
    return {
        "User-Agent": USER_AGENT,
        "Accept": "application/json",
        "Content-Type": "application/json",
    }


async def validate_auth(
    hass: HomeAssistant, username: str, password: str
) -> dict[str, Any]:
    """Validate the user credentials."""
    session = async_get_clientsession(hass)
    url = f"{API_BASE_URL}{JWT_ENDPOINT}/token"
    
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
                _LOGGER.debug("📥 Auth response (first 500 chars): %s", response_text[:500])
                
                # Handle rate limiting (JWT Auth Pro feature)
                if response.status == 429:
                    retry_after = int(response.headers.get("Retry-After", RATE_LIMIT_DELAY))
                    _LOGGER.warning("⏳ Rate limited, waiting %s seconds before retry (attempt %d/%d)", 
                                   retry_after, attempt + 1, MAX_RETRIES)
                    await asyncio.sleep(retry_after)
                    continue
                
                # Handle auth failures
                if response.status == 401 or response.status == 403:
                    _LOGGER.error("❌ Authentication failed: Invalid credentials (status %s)", response.status)
                    raise InvalidAuth
                
                # JWT Auth Pro may return 202 for async operations
                if response.status == 202:
                    _LOGGER.debug("⏳ Got 202 Accepted, retrying (attempt %d/%d)", 
                                 attempt + 1, MAX_RETRIES)
                    await asyncio.sleep(2)
                    continue

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
                    import json
                    data = json.loads(response_text)
                except json.JSONDecodeError as e:
                    _LOGGER.error("❌ Failed to parse auth response: %s", e)
                    raise CannotConnect from e
                
                # JWT Auth Pro response format - check for token in various locations
                token = (
                    data.get("token") or 
                    data.get("data", {}).get("token") or
                    data.get("jwt_token") or
                    data.get("access_token")
                )
                
                if not token:
                    _LOGGER.error("❌ No token in response. Keys: %s", list(data.keys()))
                    raise InvalidAuth

                _LOGGER.debug("✅ Credentials validated for user: %s", username)
                
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
            raise CannotConnect
        except asyncio.CancelledError:
            _LOGGER.error(
                "❌ Request was cancelled (attempt %d/%d) "
                "(Connection interrupted - may be network instability)",
                attempt + 1, MAX_RETRIES
            )
            if attempt < MAX_RETRIES - 1:
                await asyncio.sleep(RETRY_DELAY * (attempt + 1))
                continue
            raise CannotConnect
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
        except InvalidAuth:
            raise
        except CannotConnect:
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
    """Handle a config flow for Ultra Card Pro Cloud."""

    VERSION = 1

    async def async_step_user(
        self, user_input: dict[str, Any] | None = None
    ) -> FlowResult:
        """Handle the initial step."""
        errors: dict[str, str] = {}

        if user_input is not None:
            try:
                info = await validate_auth(
                    self.hass,
                    user_input[CONF_USERNAME],
                    user_input[CONF_PASSWORD],
                )

                # Create unique ID based on username to prevent duplicate entries
                await self.async_set_unique_id(user_input[CONF_USERNAME].lower())
                self._abort_if_unique_id_configured()

                _LOGGER.debug("✅ Creating config entry for user: %s", info['username'])
                return self.async_create_entry(
                    title=f"Ultra Card Pro ({info['username']})",
                    data=user_input,
                )

            except InvalidAuth:
                _LOGGER.warning("⚠️ Invalid credentials provided")
                errors["base"] = ERROR_INVALID_AUTH
            except CannotConnect:
                _LOGGER.warning("⚠️ Cannot connect to ultracard.io")
                errors["base"] = ERROR_CANNOT_CONNECT
            except Exception:  # pylint: disable=broad-except
                _LOGGER.exception("❌ Unexpected exception during config flow")
                errors["base"] = ERROR_UNKNOWN

        return self.async_show_form(
            step_id="user",
            data_schema=STEP_USER_DATA_SCHEMA,
            errors=errors,
            description_placeholders={
                "url": "https://ultracard.io",
            },
        )

    async def async_step_reauth(self, entry_data: dict[str, Any]) -> FlowResult:
        """Handle reauth flow."""
        return await self.async_step_reauth_confirm()

    async def async_step_reauth_confirm(
        self, user_input: dict[str, Any] | None = None
    ) -> FlowResult:
        """Handle reauth confirmation."""
        errors: dict[str, str] = {}

        if user_input is not None:
            try:
                await validate_auth(
                    self.hass,
                    user_input[CONF_USERNAME],
                    user_input[CONF_PASSWORD],
                )

                entry = self.hass.config_entries.async_get_entry(
                    self.context["entry_id"]
                )
                if entry:
                    self.hass.config_entries.async_update_entry(entry, data=user_input)
                    await self.hass.config_entries.async_reload(entry.entry_id)
                    _LOGGER.debug("✅ Re-authentication successful")
                    return self.async_abort(reason="reauth_successful")

            except InvalidAuth:
                _LOGGER.warning("⚠️ Invalid credentials during re-auth")
                errors["base"] = ERROR_INVALID_AUTH
            except CannotConnect:
                _LOGGER.warning("⚠️ Cannot connect to ultracard.io during re-auth")
                errors["base"] = ERROR_CANNOT_CONNECT
            except Exception:  # pylint: disable=broad-except
                _LOGGER.exception("❌ Unexpected exception during re-auth")
                errors["base"] = ERROR_UNKNOWN

        return self.async_show_form(
            step_id="reauth_confirm",
            data_schema=STEP_USER_DATA_SCHEMA,
            errors=errors,
        )


class CannotConnect(Exception):
    """Error to indicate we cannot connect."""


class InvalidAuth(Exception):
    """Error to indicate there is invalid auth."""
