"""The Ultra Card Pro Cloud integration."""
from __future__ import annotations

import asyncio
import json
import logging
from datetime import timedelta
from pathlib import Path

from aiohttp import web
from homeassistant.components.http import HomeAssistantView
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import Platform
from homeassistant.core import HomeAssistant
from homeassistant.helpers.aiohttp_client import async_get_clientsession

from .const import (
    CONF_PASSWORD,
    CONF_USERNAME,
    DOMAIN,
    DATA_COORDINATOR,
    DATA_AUTH,
    PANEL_URL_PATH,
    PANEL_JS_URL,
    PANEL_STATIC_URL_PATH,
    PANEL_CUSTOM_ELEMENT,
)
from .coordinator import UltraCardProCloudCoordinator


# ---------------------------------------------------------------------------
# HTTP API views — single source of auth for the Ultra Card frontend.
# The frontend NEVER stores credentials in localStorage; instead it calls
# these endpoints (authenticated via the user's existing HA session) and the
# integration stores username/password securely in HA's config entry storage.
# ---------------------------------------------------------------------------

class UltraCardLoginView(HomeAssistantView):
    """POST /api/ultra_card_pro_cloud/login — store credentials and authenticate."""

    url = "/api/ultra_card_pro_cloud/login"
    name = "api:ultra_card_pro_cloud:login"
    requires_auth = True

    async def post(self, request: web.Request) -> web.Response:
        hass: HomeAssistant = request.app["hass"]
        try:
            body = await request.json()
        except Exception:
            return self.json({"error": "Invalid JSON"}, status_code=400)

        username = (body.get("username") or body.get("email") or "").strip()
        password = (body.get("password") or "").strip()

        if not username or not password:
            return self.json({"error": "username and password are required"}, status_code=400)

        entries = hass.config_entries.async_entries(DOMAIN)

        if entries:
            # Update the existing config entry with the new credentials
            entry = entries[0]
            hass.config_entries.async_update_entry(
                entry,
                data={**entry.data, CONF_USERNAME: username, CONF_PASSWORD: password},
            )
            # Force the coordinator to re-authenticate with fresh credentials
            domain_data = hass.data.get(DOMAIN, {})
            entry_data = domain_data.get(entry.entry_id, {})
            coordinator = entry_data.get(DATA_COORDINATOR)
            if coordinator:
                coordinator._jwt_token = None
                coordinator._refresh_token = None
                coordinator._token_expires_at = 0
                await coordinator.async_refresh()
        else:
            # No config entry yet — create one via the config flow
            result = await hass.config_entries.flow.async_init(
                DOMAIN,
                context={"source": "user_api"},
                data={CONF_USERNAME: username, CONF_PASSWORD: password},
            )
            if result.get("type") not in ("create_entry", "abort"):
                return self.json({"error": "Failed to create integration entry"}, status_code=500)
            # Wait briefly for the entry to be set up and sensor to populate
            await asyncio.sleep(2)

        # Return the current sensor state so the frontend can update immediately
        sensor_id = "sensor.ultra_card_pro_cloud_authentication_status"
        sensor_state = hass.states.get(sensor_id)
        if sensor_state and sensor_state.state == "connected":
            attrs = dict(sensor_state.attributes)
            return self.json({"success": True, "user": attrs})

        return self.json({"error": "Authentication failed — check your credentials"}, status_code=401)


class UltraCardLogoutView(HomeAssistantView):
    """POST /api/ultra_card_pro_cloud/logout — clear stored credentials."""

    url = "/api/ultra_card_pro_cloud/logout"
    name = "api:ultra_card_pro_cloud:logout"
    requires_auth = True

    async def post(self, request: web.Request) -> web.Response:
        hass: HomeAssistant = request.app["hass"]
        entries = hass.config_entries.async_entries(DOMAIN)
        if entries:
            entry = entries[0]
            # Remove credentials from config entry data but keep the entry itself
            clean_data = {
                k: v for k, v in entry.data.items()
                if k not in (CONF_USERNAME, CONF_PASSWORD)
            }
            hass.config_entries.async_update_entry(entry, data=clean_data)
            domain_data = hass.data.get(DOMAIN, {})
            entry_data = domain_data.get(entry.entry_id, {})
            coordinator = entry_data.get(DATA_COORDINATOR)
            if coordinator:
                coordinator._jwt_token = None
                coordinator._refresh_token = None
                coordinator._token_expires_at = 0
                await coordinator.async_refresh()
        return self.json({"success": True})


class UltraCardRegisterView(HomeAssistantView):
    """POST /api/ultra_card_pro_cloud/register — create account then store credentials."""

    url = "/api/ultra_card_pro_cloud/register"
    name = "api:ultra_card_pro_cloud:register"
    requires_auth = True

    async def post(self, request: web.Request) -> web.Response:
        hass: HomeAssistant = request.app["hass"]
        try:
            body = await request.json()
        except Exception:
            return self.json({"error": "Invalid JSON"}, status_code=400)

        username = (body.get("username") or "").strip()
        email = (body.get("email") or "").strip()
        password = (body.get("password") or "").strip()

        if not email or not password:
            return self.json({"error": "email and password are required"}, status_code=400)

        # Register on ultracard.io via our custom WordPress endpoint
        from homeassistant.helpers.aiohttp_client import async_get_clientsession
        from .const import API_BASE_URL
        session = async_get_clientsession(hass)
        try:
            async with session.post(
                f"{API_BASE_URL}/ultra-card/v1/register",
                json={"username": username or email.split("@")[0], "email": email, "password": password},
                timeout=aiohttp_timeout(15),
            ) as resp:
                data = await resp.json()
                if not resp.ok:
                    msg = data.get("message") or data.get("error") or "Registration failed"
                    return self.json({"error": msg}, status_code=resp.status)
        except Exception as err:
            _LOGGER.error("Registration request failed: %s", err)
            return self.json({"error": "Could not reach ultracard.io — check your network"}, status_code=503)

        # Registration succeeded — now store credentials via the login flow
        login_view = UltraCardLoginView()
        # Re-use login logic: inject a synthetic request body
        login_username = email
        login_password = password
        entries = hass.config_entries.async_entries(DOMAIN)
        if entries:
            entry = entries[0]
            hass.config_entries.async_update_entry(
                entry,
                data={**entry.data, CONF_USERNAME: login_username, CONF_PASSWORD: login_password},
            )
            domain_data = hass.data.get(DOMAIN, {})
            coordinator = domain_data.get(entry.entry_id, {}).get(DATA_COORDINATOR)
            if coordinator:
                coordinator._jwt_token = None
                coordinator._refresh_token = None
                coordinator._token_expires_at = 0
                await coordinator.async_refresh()
        else:
            await hass.config_entries.flow.async_init(
                DOMAIN,
                context={"source": "user_api"},
                data={CONF_USERNAME: login_username, CONF_PASSWORD: login_password},
            )
            await asyncio.sleep(2)

        sensor_id = "sensor.ultra_card_pro_cloud_authentication_status"
        sensor_state = hass.states.get(sensor_id)
        if sensor_state and sensor_state.state == "connected":
            return self.json({"success": True, "user": dict(sensor_state.attributes)})

        return self.json({"success": True, "message": "Account created — authentication pending"})


def aiohttp_timeout(seconds: int):
    """Return an aiohttp ClientTimeout."""
    import aiohttp
    return aiohttp.ClientTimeout(total=seconds)

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
    """Set up the Ultra Card Pro Cloud component."""
    from homeassistant.components import frontend

    # Register HTTP API views — available immediately, no config entry required.
    # These let the Ultra Card frontend store/clear credentials through HA's auth
    # layer instead of browser localStorage.
    hass.http.register_view(UltraCardLoginView())
    hass.http.register_view(UltraCardLogoutView())
    hass.http.register_view(UltraCardRegisterView())

    _LOGGER.info("Ultra Card Pro Cloud v%s component setup called", __version__)

    # Serve ultra-card-panel.js from this integration's own www/ folder so the
    # panel works regardless of whether the Ultra Card HACS frontend card is
    # also installed. This eliminates the "Unable to load custom panel" error
    # that occurs when the /hacsfiles/Ultra-Card/ path doesn't exist.
    www_path = Path(__file__).parent / "www"
    if www_path.exists() and not hass.data.get(f"{DOMAIN}_static_registered"):
        try:
            # Use the modern async API (HA 2024.x+). Falls back to the legacy
            # synchronous method for older installations.
            from homeassistant.components.http import StaticPathConfig
            await hass.http.async_register_static_paths([
                StaticPathConfig(PANEL_STATIC_URL_PATH, str(www_path), cache_headers=True),
            ])
            hass.data[f"{DOMAIN}_static_registered"] = True
            _LOGGER.info("Registered static path %s → %s", PANEL_STATIC_URL_PATH, www_path)
        except (ImportError, AttributeError):
            # Fallback for HA versions that don't have async_register_static_paths
            try:
                hass.http.register_static_path(PANEL_STATIC_URL_PATH, str(www_path), cache_headers=True)
                hass.data[f"{DOMAIN}_static_registered"] = True
                _LOGGER.info("Registered static path (legacy) %s → %s", PANEL_STATIC_URL_PATH, www_path)
            except Exception as static_err:
                _LOGGER.warning("Could not register static path for panel JS: %s", static_err)
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

