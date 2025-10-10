"""Constants for the Ultra Card Pro Cloud integration."""

DOMAIN = "ultra_card_pro_cloud"

# API Configuration
API_BASE_URL = "https://ultracard.io/wp-json"
JWT_ENDPOINT = "/jwt-auth/v1"
SUBSCRIPTION_ENDPOINT = "/ultra-card/v1/subscription"

# Update intervals
TOKEN_REFRESH_INTERVAL = 3300  # 55 minutes (refresh before 1 hour expiry)
SUBSCRIPTION_UPDATE_INTERVAL = 3600  # 1 hour

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

