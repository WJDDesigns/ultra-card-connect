"""The Ultra Card Pro Cloud integration."""
from __future__ import annotations

import asyncio
import json
import logging
import secrets
from pathlib import Path

from aiohttp import web
from homeassistant.components.http import HomeAssistantView
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import Platform
from homeassistant.core import HomeAssistant
from homeassistant.helpers.aiohttp_client import async_get_clientsession
from homeassistant.helpers.storage import Store

from .const import (
    API_BASE_URL,
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


def _user_attrs_for_frontend(attrs: dict | None) -> dict:
    """Return sensor attributes safe for frontend (no token)."""
    if not attrs:
        return {}
    return {k: v for k, v in attrs.items() if k != "token"}


def _request_hass_user(request: web.Request):
    """Return the current HA user object when available."""
    return request.get("hass_user")


def _request_hass_user_id(request: web.Request) -> str | None:
    """Return the current HA user id when available."""
    user = _request_hass_user(request)
    user_id = getattr(user, "id", None)
    return str(user_id) if user_id else None


def _request_can_manage_shared_auth(request: web.Request) -> bool:
    """Only admins/owners can mutate shared integration auth state."""
    user = _request_hass_user(request)
    if not user:
        return False
    return bool(getattr(user, "is_admin", False) or getattr(user, "is_owner", False))


# ---------------------------------------------------------------------------
# HTTP API views — single source of auth for the Ultra Card frontend.
# The frontend NEVER stores credentials in localStorage; instead it calls
# these endpoints (authenticated via the user's existing HA session) and the
# integration stores username/password securely in HA's config entry storage.
# ---------------------------------------------------------------------------

AUTH_SENSOR_ID = "sensor.ultra_card_pro_cloud_authentication_status"
# Wait for coordinator to finish auth and sensor to update (avoids "succeeds on 3rd attempt" race)
AUTH_SENSOR_WAIT_TIMEOUT = 15  # seconds
AUTH_SENSOR_POLL_INTERVAL = 0.5  # seconds


async def _wait_for_auth_sensor(hass: HomeAssistant) -> dict | None:
    """Poll until auth sensor is 'connected' or timeout. Returns attributes dict or None."""
    loop = asyncio.get_running_loop()
    deadline = loop.time() + AUTH_SENSOR_WAIT_TIMEOUT
    while loop.time() < deadline:
        state = hass.states.get(AUTH_SENSOR_ID)
        if state and state.state == "connected":
            return dict(state.attributes)
        await asyncio.sleep(AUTH_SENSOR_POLL_INTERVAL)
    return None


class UltraCardLoginView(HomeAssistantView):
    """POST /api/ultra_card_pro_cloud/login — store credentials and authenticate."""

    url = "/api/ultra_card_pro_cloud/login"
    name = "api:ultra_card_pro_cloud:login"
    requires_auth = True

    async def post(self, request: web.Request) -> web.Response:
        hass: HomeAssistant = request.app["hass"]
        if not _request_can_manage_shared_auth(request):
            return self.json(
                {"error": "Only Home Assistant admins can manage Ultra Card shared sign-in."},
                status_code=403,
            )
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

        # Wait for coordinator to finish and sensor to show connected (fixes race where
        # first attempt returned 401 because we checked the sensor too soon)
        attrs = await _wait_for_auth_sensor(hass)
        if attrs is not None:
            return self.json({"success": True, "user": _user_attrs_for_frontend(attrs)})

        return self.json({"error": "Authentication failed — check your credentials"}, status_code=401)


class UltraCardLogoutView(HomeAssistantView):
    """POST /api/ultra_card_pro_cloud/logout — clear stored credentials."""

    url = "/api/ultra_card_pro_cloud/logout"
    name = "api:ultra_card_pro_cloud:logout"
    requires_auth = True

    async def post(self, request: web.Request) -> web.Response:
        hass: HomeAssistant = request.app["hass"]
        if not _request_can_manage_shared_auth(request):
            return self.json(
                {"error": "Only Home Assistant admins can manage Ultra Card shared sign-in."},
                status_code=403,
            )
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
    """POST /api/ultra_card_pro_cloud/register — create account and send password setup email."""

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
        display_name = (body.get("display_name") or username or email.split("@")[0]).strip()

        if not username or not email:
            return self.json({"error": "username and email are required"}, status_code=400)

        # Register on ultracard.io via our custom WordPress endpoint
        session = async_get_clientsession(hass)
        payload = {
            "username": username or email.split("@")[0],
            "email": email,
            "display_name": display_name,
            # Backward compatibility for older ultracard.io builds that still
            # require a password field during registration.
            "password": secrets.token_urlsafe(24),
        }
        try:
            async with session.post(
                f"{API_BASE_URL}/ultra-card/v1/register",
                json=payload,
                timeout=aiohttp_timeout(15),
            ) as resp:
                data = await resp.json()
                if resp.ok:
                    message = data.get("message") or (
                        "Account created. Check your email inbox, junk, or spam for the ultracard.io message to finish setting your password, then come back here to sign in."
                    )
                    return self.json({"success": True, "message": message})

                msg = data.get("message") or data.get("error") or "Registration failed"

                # Some older ultracard.io builds parse form-encoded request bodies
                # but ignore JSON payloads, which makes password appear missing.
                should_retry_as_form = (
                    resp.status == 400
                    and isinstance(msg, str)
                    and "password" in msg.lower()
                    and "required" in msg.lower()
                )
                if should_retry_as_form:
                    async with session.post(
                        f"{API_BASE_URL}/ultra-card/v1/register",
                        data=payload,
                        timeout=aiohttp_timeout(15),
                    ) as retry_resp:
                        retry_data = await retry_resp.json()
                        if retry_resp.ok:
                            message = retry_data.get("message") or (
                                "Account created. Check your email inbox, junk, or spam for the ultracard.io message to finish setting your password, then come back here to sign in."
                            )
                            return self.json({"success": True, "message": message})

                        msg = (
                            retry_data.get("message")
                            or retry_data.get("error")
                            or msg
                            or "Registration failed"
                        )

                return self.json({"error": msg}, status_code=resp.status)
        except Exception as err:
            _LOGGER.error("Registration request failed: %s", err)
            return self.json({"error": "Could not reach ultracard.io — check your network"}, status_code=503)


# Favorite colors storage key and version (persisted in HA .storage)
FAVORITE_COLORS_STORAGE_KEY = "ultra_card_pro_cloud.favorite_colors"
FAVORITE_COLORS_STORAGE_VERSION = 1


def _extract_user_colors(data: dict | None, user_id: str | None) -> list[dict]:
    """Return per-user colors with fallback to legacy global storage."""
    if not isinstance(data, dict):
        return []

    if user_id:
        users = data.get("users")
        if isinstance(users, dict):
            user_bucket = users.get(user_id)
            if isinstance(user_bucket, dict):
                colors = user_bucket.get("colors")
                if isinstance(colors, list):
                    return colors

    colors = data.get("colors")
    return colors if isinstance(colors, list) else []


def _store_user_colors(data: dict | None, user_id: str | None, colors: list[dict]) -> dict:
    """Persist per-user colors while preserving legacy/global keys."""
    next_data = dict(data) if isinstance(data, dict) else {}

    if not user_id:
        next_data["colors"] = colors
        return next_data

    users = next_data.get("users")
    if not isinstance(users, dict):
        users = {}

    user_bucket = users.get(user_id)
    if not isinstance(user_bucket, dict):
        user_bucket = {}

    user_bucket["colors"] = colors
    users[user_id] = user_bucket
    next_data["users"] = users
    return next_data


class UltraCardFavoriteColorsView(HomeAssistantView):
    """GET/POST /api/ultra_card_pro_cloud/favorite_colors — load/save favorite colors in HA store."""

    url = "/api/ultra_card_pro_cloud/favorite_colors"
    name = "api:ultra_card_pro_cloud:favorite_colors"
    requires_auth = True

    async def get(self, request: web.Request) -> web.Response:
        """Return stored favorite colors from HA store."""
        hass: HomeAssistant = request.app["hass"]
        user_id = _request_hass_user_id(request)
        store = Store(hass, FAVORITE_COLORS_STORAGE_VERSION, FAVORITE_COLORS_STORAGE_KEY)
        data = await store.async_load()
        return self.json({"colors": _extract_user_colors(data, user_id)})

    async def post(self, request: web.Request) -> web.Response:
        """Save favorite colors to HA store."""
        hass: HomeAssistant = request.app["hass"]
        user_id = _request_hass_user_id(request)
        try:
            body = await request.json()
        except Exception:
            return self.json({"error": "Invalid JSON"}, status_code=400)
        colors = body.get("colors") if isinstance(body, dict) else body
        if not isinstance(colors, list):
            return self.json({"error": "colors must be an array"}, status_code=400)
        # Basic validation: each item must have id, name, color, order
        validated = []
        for i, item in enumerate(colors):
            if not isinstance(item, dict):
                continue
            if not all(k in item for k in ("id", "name", "color", "order")):
                continue
            validated.append({
                "id": str(item["id"]),
                "name": str(item["name"]),
                "color": str(item["color"]),
                "order": int(item["order"]) if isinstance(item.get("order"), (int, float)) else i,
            })
        store = Store(hass, FAVORITE_COLORS_STORAGE_VERSION, FAVORITE_COLORS_STORAGE_KEY)
        existing = await store.async_load()
        await store.async_save(_store_user_colors(existing, user_id, validated))
        return self.json({"success": True, "colors": validated})


class UltraCardProxyView(HomeAssistantView):
    """POST /api/ultra_card_pro_cloud/proxy — forward API calls to ultracard.io with integration token.

    The frontend never receives the JWT; it sends method/url/body and the integration
    adds the token and returns the response. Only allows URLs under API_BASE_URL.
    """

    url = "/api/ultra_card_pro_cloud/proxy"
    name = "api:ultra_card_pro_cloud:proxy"
    requires_auth = True

    async def post(self, request: web.Request) -> web.Response:
        hass: HomeAssistant = request.app["hass"]
        try:
            body = await request.json()
        except Exception:
            return self.json({"error": "Invalid JSON", "_status": 400, "_body": None}, status_code=400)

        method = (body.get("method") or "GET").upper()
        url = (body.get("url") or "").strip()
        payload = body.get("body")

        if not url or not url.startswith(API_BASE_URL):
            return self.json({"error": "Invalid URL", "_status": 400, "_body": None}, status_code=400)

        entries = hass.config_entries.async_entries(DOMAIN)
        if not entries:
            return self.json({"error": "Integration not configured", "_status": 503, "_body": None}, status_code=503)

        entry = entries[0]
        domain_data = hass.data.get(DOMAIN, {})
        entry_data = domain_data.get(entry.entry_id, {})
        coordinator = entry_data.get(DATA_COORDINATOR)
        if not coordinator or not getattr(coordinator, "_jwt_token", None):
            return self.json({"error": "Not authenticated", "_status": 401, "_body": None}, status_code=401)

        token = coordinator._jwt_token
        session = async_get_clientsession(hass)
        headers = {"Authorization": f"Bearer {token}", "Content-Type": "application/json"}

        try:
            if method == "GET":
                async with session.get(url, headers=headers, timeout=aiohttp_timeout(30)) as resp:
                    return await _proxy_response(resp, self.json)
            if method == "POST":
                async with session.post(url, headers=headers, json=payload, timeout=aiohttp_timeout(30)) as resp:
                    return await _proxy_response(resp, self.json)
            if method == "PUT":
                async with session.put(url, headers=headers, json=payload, timeout=aiohttp_timeout(30)) as resp:
                    return await _proxy_response(resp, self.json)
            if method == "DELETE":
                async with session.delete(url, headers=headers, timeout=aiohttp_timeout(30)) as resp:
                    return await _proxy_response(resp, self.json)
        except Exception as err:
            _LOGGER.exception("Proxy request failed: %s", err)
            return self.json({"_status": 502, "_body": {"message": str(err)}}, status_code=502)

        return self.json({"error": "Method not allowed", "_status": 405, "_body": None}, status_code=405)


async def _proxy_response(resp, json_response_fn):
    """Read aiohttp response and return JSON with _status and _body for frontend."""
    try:
        raw = await resp.read()
    except Exception:
        raw = b""
    try:
        _body = json.loads(raw) if raw else None
    except Exception:
        _body = raw.decode("utf-8", errors="replace") if isinstance(raw, bytes) else None
    return json_response_fn({"_status": resp.status, "_body": _body})


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
    hass.http.register_view(UltraCardFavoriteColorsView())
    hass.http.register_view(UltraCardProxyView())

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

