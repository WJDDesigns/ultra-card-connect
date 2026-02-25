"""The Ultra Card Pro Cloud integration."""
from __future__ import annotations

import logging
from datetime import timedelta
from pathlib import Path

from homeassistant.config_entries import ConfigEntry
from homeassistant.const import Platform
from homeassistant.core import HomeAssistant
from homeassistant.helpers.aiohttp_client import async_get_clientsession

from .const import (
    DOMAIN,
    DATA_COORDINATOR,
    DATA_AUTH,
    PANEL_URL_PATH,
    PANEL_JS_URL,
    PANEL_STATIC_URL_PATH,
    PANEL_CUSTOM_ELEMENT,
)
from .coordinator import UltraCardProCloudCoordinator

# Read version from root version.py file
import os
__version__ = "1.0.0"
try:
    version_file = os.path.join(os.path.dirname(__file__), "..", "..", "version.py")
    if os.path.exists(version_file):
        with open(version_file) as f:
            for line in f:
                if line.startswith("__version__"):
                    __version__ = line.split("=")[1].strip().strip('"').strip("'")
                    break
except Exception:
    pass  # Fall back to default version

_LOGGER = logging.getLogger(__name__)

PLATFORMS: list[Platform] = [Platform.SENSOR]  # Sensor platform for authentication status


async def async_setup(hass: HomeAssistant, config: dict) -> bool:
    """Set up the Ultra Card Pro Cloud component. Registers the sidebar panel so it appears on install (no config entry required)."""
    from homeassistant.components import frontend

    _LOGGER.info("Ultra Card Pro Cloud v%s component setup called", __version__)

    # Serve ultra-card-panel.js from this integration's own www/ folder so the
    # panel works regardless of whether the Ultra Card HACS frontend card is
    # also installed. This eliminates the "Unable to load custom panel" error
    # that occurs when the /hacsfiles/Ultra-Card/ path doesn't exist.
    www_path = Path(__file__).parent / "www"
    if www_path.exists() and not hass.data.get(f"{DOMAIN}_static_registered"):
        try:
            hass.http.register_static_path(
                PANEL_STATIC_URL_PATH,
                str(www_path),
                cache_headers=True,
            )
            hass.data[f"{DOMAIN}_static_registered"] = True
            _LOGGER.info("Registered static path %s → %s", PANEL_STATIC_URL_PATH, www_path)
        except Exception as static_err:
            _LOGGER.warning("Could not register static path for panel JS: %s", static_err)
    elif not www_path.exists():
        _LOGGER.warning(
            "ultra-card-panel.js not found in %s — sidebar panel may fail to load. "
            "Re-deploy the integration to include the www/ folder.",
            www_path,
        )

    # Register Ultra Card Hub sidebar panel so it appears as soon as the integration is installed via HACS (no config entry needed)
    hass.data.setdefault(DOMAIN, {})
    if not hass.data[DOMAIN].get("_panel_registered"):
        try:
            frontend.async_register_built_in_panel(
                hass,
                component_name="custom",
                sidebar_title="Ultra Card",
                sidebar_icon="mdi:cards",
                sidebar_default_visible=True,
                frontend_url_path=PANEL_URL_PATH,
                config={
                    "_panel_custom": {
                        "name": PANEL_CUSTOM_ELEMENT,
                        "js_url": PANEL_JS_URL,
                        "module_url": PANEL_JS_URL,
                        "embed_iframe": False,
                        "trust_external": False,
                    }
                },
                require_admin=False,
            )
            hass.data[DOMAIN]["_panel_registered"] = True
            _LOGGER.info("Registered Ultra Card Hub panel at /%s (sidebar title: Ultra Card)", PANEL_URL_PATH)
        except Exception as panel_err:
            _LOGGER.exception("Could not register Ultra Card Hub panel: %s", panel_err)

    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up Ultra Card Pro Cloud from a config entry."""
    _LOGGER.info("Starting Ultra Card Pro Cloud v%s integration setup for entry: %s", __version__, entry.entry_id)

    # Initialize domain in hass.data - this is critical for frontend access (panel already registered in async_setup)
    hass.data.setdefault(DOMAIN, {})

    try:
        session = async_get_clientsession(hass)
        coordinator = UltraCardProCloudCoordinator(hass, session, entry)

        _LOGGER.info("Attempting first data refresh...")
        await coordinator.async_config_entry_first_refresh()

        _LOGGER.info("Coordinator data after first refresh: %s", coordinator.data)

        hass.data[DOMAIN][entry.entry_id] = {
            DATA_COORDINATOR: coordinator,
        }

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

        _LOGGER.info("Final exposed auth data: %s", hass.data[DOMAIN][DATA_AUTH])
        coordinator.async_add_listener(_create_update_listener(hass, entry))

        await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)
        _LOGGER.info("✅ Ultra Card Pro Cloud integration initialized successfully")
        return True

    except Exception as err:
        _LOGGER.error("❌ Coordinator/sensor setup failed: %s", err)
        hass.data[DOMAIN][DATA_AUTH] = {"authenticated": False}
        # Do not raise: panel is already registered; user can still use Hub and retry auth later
        if entry.entry_id not in hass.data.get(DOMAIN, {}):
            hass.data.setdefault(DOMAIN, {})[entry.entry_id] = {}
        return True


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
    """Unload a config entry. Panel stays registered (registered in async_setup) until integration is uninstalled."""
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

