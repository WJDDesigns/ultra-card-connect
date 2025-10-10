"""The Ultra Card Pro Cloud integration."""
from __future__ import annotations

import logging
from datetime import timedelta

from homeassistant.config_entries import ConfigEntry
from homeassistant.const import Platform
from homeassistant.core import HomeAssistant
from homeassistant.helpers.aiohttp_client import async_get_clientsession

from .const import (
    DOMAIN,
    DATA_COORDINATOR,
    DATA_AUTH,
)
from .coordinator import UltraCardProCloudCoordinator

_LOGGER = logging.getLogger(__name__)

PLATFORMS: list[Platform] = [Platform.SENSOR]  # Sensor platform for authentication status


async def async_setup(hass: HomeAssistant, config: dict) -> bool:
    """Set up the Ultra Card Pro Cloud component."""
    # For config flow integrations, this is called but domain setup happens in async_setup_entry
    _LOGGER.info("Ultra Card Pro Cloud component setup called")
    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up Ultra Card Pro Cloud from a config entry."""
    _LOGGER.info("Starting Ultra Card Pro Cloud integration setup for entry: %s", entry.entry_id)
    
    # Initialize domain in hass.data - this is critical for frontend access
    hass.data.setdefault(DOMAIN, {})
    _LOGGER.info("Domain %s initialized in hass.data", DOMAIN)

    try:
        session = async_get_clientsession(hass)
        coordinator = UltraCardProCloudCoordinator(hass, session, entry)

        _LOGGER.info("Attempting first data refresh...")
        await coordinator.async_config_entry_first_refresh()

        # Log the coordinator data
        _LOGGER.info("Coordinator data after first refresh: %s", coordinator.data)

        # Store coordinator in hass.data
        hass.data[DOMAIN][entry.entry_id] = {
            DATA_COORDINATOR: coordinator,
        }

        # CRITICAL: Expose authentication data to the card via hass.data
        # This is what the frontend will check
        if coordinator.data and coordinator.data.get("authenticated"):
            hass.data[DOMAIN][DATA_AUTH] = {
                "authenticated": True,
                "user_id": coordinator.data.get("user_id"),
                "username": coordinator.data.get("username"),
                "email": coordinator.data.get("email"),
                "display_name": coordinator.data.get("display_name"),
                "subscription_tier": coordinator.data.get("subscription", {}).get("tier", "free"),
                "subscription_status": coordinator.data.get("subscription", {}).get("status", "expired"),
                "subscription_expires": coordinator.data.get("subscription", {}).get("expires"),
            }
            _LOGGER.info("✅ User authenticated, exposing PRO data")
        else:
            hass.data[DOMAIN][DATA_AUTH] = {
                "authenticated": False,
            }
            _LOGGER.warning("⚠️ Authentication failed, exposing unauthenticated state")

        # Log the exposed auth data for debugging
        _LOGGER.info("Final exposed auth data: %s", hass.data[DOMAIN][DATA_AUTH])

        # Listen for coordinator updates to refresh exposed data
        coordinator.async_add_listener(_create_update_listener(hass, entry))

        await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)

        _LOGGER.info("✅ Ultra Card Pro Cloud integration initialized successfully")

        return True

    except Exception as err:
        _LOGGER.error("❌ Failed to setup Ultra Card Pro Cloud integration: %s", err)
        # Ensure we still expose unauthenticated state even on error
        hass.data[DOMAIN][DATA_AUTH] = {"authenticated": False}
        raise


def _create_update_listener(hass: HomeAssistant, entry: ConfigEntry):
    """Create a listener that updates hass.data when coordinator data changes."""

    def update_exposed_data():
        """Update the exposed data in hass.data."""
        try:
            if DOMAIN not in hass.data or entry.entry_id not in hass.data[DOMAIN]:
                _LOGGER.warning("Domain or entry not found in hass.data during update")
                return
                
            coordinator = hass.data[DOMAIN][entry.entry_id][DATA_COORDINATOR]
            
            if coordinator.data and coordinator.data.get("authenticated"):
                hass.data[DOMAIN][DATA_AUTH] = {
                    "authenticated": True,
                    "user_id": coordinator.data.get("user_id"),
                    "username": coordinator.data.get("username"),
                    "email": coordinator.data.get("email"),
                    "display_name": coordinator.data.get("display_name"),
                    "subscription_tier": coordinator.data.get("subscription", {}).get("tier", "free"),
                    "subscription_status": coordinator.data.get("subscription", {}).get("status", "expired"),
                    "subscription_expires": coordinator.data.get("subscription", {}).get("expires"),
                }
                _LOGGER.info("🔄 Updated auth data (authenticated): %s", hass.data[DOMAIN][DATA_AUTH])
            else:
                hass.data[DOMAIN][DATA_AUTH] = {"authenticated": False}
                _LOGGER.info("🔄 Updated auth data (unauthenticated)")
                
        except Exception as err:
            _LOGGER.error("❌ Error updating exposed auth data: %s", err)

    return update_exposed_data


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Unload a config entry."""
    if unload_ok := await hass.config_entries.async_unload_platforms(entry, PLATFORMS):
        hass.data[DOMAIN].pop(entry.entry_id)
        # Clear exposed auth data
        if DATA_AUTH in hass.data[DOMAIN]:
            hass.data[DOMAIN][DATA_AUTH] = {"authenticated": False}

    return unload_ok


async def async_reload_entry(hass: HomeAssistant, entry: ConfigEntry) -> None:
    """Reload config entry."""
    await async_unload_entry(hass, entry)
    await async_setup_entry(hass, entry)

