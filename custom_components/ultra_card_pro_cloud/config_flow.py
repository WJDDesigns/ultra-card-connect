"""Config flow for Ultra Card Pro Cloud integration."""
from __future__ import annotations

import logging
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

STEP_USER_DATA_SCHEMA = vol.Schema(
    {
        vol.Required(CONF_USERNAME): str,
        vol.Required(CONF_PASSWORD): str,
    }
)


async def validate_auth(
    hass: HomeAssistant, username: str, password: str
) -> dict[str, Any]:
    """Validate the user credentials."""
    session = async_get_clientsession(hass)
    url = f"{API_BASE_URL}{JWT_ENDPOINT}/token"

    try:
        async with session.post(
            url,
            json={"username": username, "password": password},
            timeout=aiohttp.ClientTimeout(total=10),
        ) as response:
            if response.status == 401 or response.status == 403:
                raise InvalidAuth

            if response.status != 200:
                _LOGGER.error("Authentication failed with status: %s", response.status)
                raise CannotConnect

            data = await response.json()
            
            # Validate response structure
            if not data.get("token"):
                raise InvalidAuth

            return {
                "user_id": data.get("user_id"),
                "username": data.get("user_nicename", username),
                "email": data.get("user_email"),
                "display_name": data.get("user_display_name", username),
            }

    except aiohttp.ClientError as err:
        _LOGGER.error("Connection error: %s", err)
        raise CannotConnect from err
    except InvalidAuth:
        raise
    except Exception as err:
        _LOGGER.exception("Unexpected error during authentication: %s", err)
        raise CannotConnect from err


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

                return self.async_create_entry(
                    title=f"Ultra Card Pro ({info['username']})",
                    data=user_input,
                )

            except InvalidAuth:
                errors["base"] = ERROR_INVALID_AUTH
            except CannotConnect:
                errors["base"] = ERROR_CANNOT_CONNECT
            except Exception:  # pylint: disable=broad-except
                _LOGGER.exception("Unexpected exception")
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
                    return self.async_abort(reason="reauth_successful")

            except InvalidAuth:
                errors["base"] = ERROR_INVALID_AUTH
            except CannotConnect:
                errors["base"] = ERROR_CANNOT_CONNECT
            except Exception:  # pylint: disable=broad-except
                _LOGGER.exception("Unexpected exception")
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

