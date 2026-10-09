"""Constants for the Ultra Card Connect integration."""

DOMAIN = "ultra_card_pro_cloud"

# API Configuration
API_BASE_URL = "https://ultracard.io/wp-json"
JWT_ENDPOINT = "/jwt-auth/v1"
SUBSCRIPTION_ENDPOINT = "/ultra-card/v1/subscription"

# Update intervals
TOKEN_REFRESH_INTERVAL = 3300  # 55 minutes (refresh before 1 hour expiry)

# Proxy hardening — only these API paths may be forwarded with the shared JWT
PROXY_ALLOWED_METHODS = frozenset({"GET", "POST", "PUT", "DELETE"})
# Note: /jwt-auth/v1 is deliberately absent. Sign-in, refresh and revoke are
# handled by the coordinator; letting the browser proxy them would hand the
# shared JWT back to the client or let one admin revoke it for everyone.
PROXY_ALLOWED_PATH_PREFIXES = (
    "/ultra-card/v1",
    "/wp/v2/users/me",
)

# Grace period - maintain Pro access during server outages
GRACE_PERIOD_HOURS = 24  # Hours to maintain Pro access when server is unreachable

# Config entry keys
CONF_USERNAME = "username"
CONF_PASSWORD = "password"

# Data keys
DATA_COORDINATOR = "coordinator"
DATA_AUTH = "auth_data"

# Error messages
ERROR_INVALID_AUTH = "invalid_auth"
ERROR_CANNOT_CONNECT = "cannot_connect"
ERROR_RATE_LIMITED = "rate_limited"
ERROR_UNKNOWN = "unknown"

# Panel (Ultra Card Hub sidebar)
# Served directly from this integration's www/ folder — no dependency on the
# Ultra Card HACS frontend card being installed separately.
PANEL_URL_PATH = "ultra-card-hub"
PANEL_STATIC_URL_PATH = "/ultra_card_pro_cloud_panel"
PANEL_JS_URL = "/ultra_card_pro_cloud_panel/ultra-card-panel.js"
PANEL_CUSTOM_ELEMENT = "ultra-card-panel"

# Integration capability flags exposed on the auth sensor for Ultra Card handshake.
# Add a key (always True while shipped) whenever a new REST surface is introduced.
CAPABILITY_FAVORITE_COLORS = "favorite_colors"
CAPABILITY_PROXY = "proxy"
CAPABILITY_MEDIA_UPLOAD = "media_upload"
CAPABILITY_SMART = "smart"
CAPABILITY_THEME_SETTINGS = "theme_settings"

INTEGRATION_CAPABILITIES: dict[str, bool] = {
    CAPABILITY_FAVORITE_COLORS: True,
    CAPABILITY_PROXY: True,
    CAPABILITY_MEDIA_UPLOAD: True,
    CAPABILITY_SMART: True,
    CAPABILITY_THEME_SETTINGS: True,
    "diagnostics": True,
}


def _read_integration_version() -> str:
    """Read the integration version from manifest.json (present in every install).

    Falls back to the repo-root version.py for development checkouts and to
    "0.0.0" if neither can be read, so importing this module never fails.
    """
    import json
    import os

    here = os.path.dirname(__file__)
    try:
        with open(os.path.join(here, "manifest.json"), encoding="utf-8") as handle:
            version = json.load(handle).get("version")
        if isinstance(version, str) and version.strip():
            return version.strip()
    except Exception:  # pragma: no cover - never break import
        pass

    try:
        version_file = os.path.join(here, "..", "..", "version.py")
        if os.path.exists(version_file):
            with open(version_file, encoding="utf-8") as handle:
                for line in handle:
                    if line.startswith("__version__"):
                        return line.split("=", 1)[1].strip().strip('"').strip("'")
    except Exception:  # pragma: no cover
        pass
    return "0.0.0"


INTEGRATION_VERSION = _read_integration_version()


def is_proxy_url_allowed(url: str) -> bool:
    """Return True when url is an allowed ultracard.io API endpoint.

    The proxy attaches the shared admin JWT to whatever it forwards, so the
    check must survive URL tricks that a plain prefix comparison does not:
    ``..`` segments (normalised away by the HTTP client before sending),
    percent-encoded dots, backslashes, embedded credentials, and ports or
    schemes that differ from the canonical API base.
    """
    if not url or not isinstance(url, str):
        return False

    from posixpath import normpath
    from urllib.parse import unquote, urlsplit

    try:
        parts = urlsplit(url.strip())
        base = urlsplit(API_BASE_URL)
    except ValueError:
        return False

    if parts.scheme != base.scheme or parts.netloc != base.netloc:
        # Rejects other hosts, ports, and userinfo (user@host) tricks.
        return False
    if parts.fragment:
        return False

    raw_path = parts.path or "/"
    if "\\" in raw_path:
        return False

    # Reject any traversal, including percent-encoded variants ("%2e%2e").
    decoded = unquote(raw_path)
    if "\\" in decoded or "\x00" in decoded:
        return False
    if any(seg in ("..", ".") for seg in decoded.split("/")):
        return False
    # Anything normpath would rewrite (duplicate slashes etc.) is not canonical.
    if normpath(decoded) not in (decoded, decoded.rstrip("/")):
        return False

    base_path = base.path.rstrip("/")
    if not decoded.startswith(f"{base_path}/"):
        return False
    path = decoded[len(base_path) :]

    return any(
        path == prefix or path.startswith(f"{prefix}/")
        for prefix in PROXY_ALLOWED_PATH_PREFIXES
    )

