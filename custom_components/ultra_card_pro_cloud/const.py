"""Constants for the Ultra Card Pro Cloud integration."""

DOMAIN = "ultra_card_pro_cloud"

# API Configuration
API_BASE_URL = "https://ultracard.io/wp-json"
JWT_ENDPOINT = "/jwt-auth/v1"
SUBSCRIPTION_ENDPOINT = "/ultra-card/v1/subscription"

# Update intervals
TOKEN_REFRESH_INTERVAL = 3300  # 55 minutes (refresh before 1 hour expiry)
SUBSCRIPTION_UPDATE_INTERVAL = 3600  # 1 hour

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
ERROR_UNKNOWN = "unknown"

# Panel (Ultra Card Hub sidebar)
# JS path must match where HACS serves the Ultra Card frontend repo (often "Ultra-Card" from GitHub repo name)
PANEL_URL_PATH = "ultra-card-hub"
PANEL_JS_URL = "/hacsfiles/Ultra-Card/ultra-card-panel.js"
PANEL_CUSTOM_ELEMENT = "ultra-card-panel"

