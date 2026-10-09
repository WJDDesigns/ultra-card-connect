"""JWT helpers without Home Assistant dependencies."""

from __future__ import annotations

import base64
import json as json_module
import logging
import time

_LOGGER = logging.getLogger(__name__)


def parse_jwt_expiry(token: str) -> int | None:
    """Parse the expiry timestamp from a JWT token."""
    try:
        parts = token.split(".")
        if len(parts) != 3:
            _LOGGER.debug("Invalid JWT format - expected 3 parts, got %d", len(parts))
            return None

        payload_b64 = parts[1]
        padding = 4 - len(payload_b64) % 4
        if padding != 4:
            payload_b64 += "=" * padding

        payload_bytes = base64.urlsafe_b64decode(payload_b64)
        payload = json_module.loads(payload_bytes.decode("utf-8"))

        exp = payload.get("exp")
        if exp:
            _LOGGER.debug(
                "Parsed JWT expiry: %s (in %d seconds)",
                exp,
                exp - int(time.time()),
            )
            return int(exp)

        _LOGGER.debug("No 'exp' claim found in JWT payload")
        return None

    except Exception as err:
        _LOGGER.debug("Failed to parse JWT expiry: %s", err)
        return None


DEFAULT_TOKEN_EXPIRY_DAYS = 180  # Match JWT Auth Pro default


def _first(data: dict, *keys: str):
    nested = data.get("data") if isinstance(data.get("data"), dict) else {}
    for key in keys:
        value = data.get(key) or nested.get(key)
        if value:
            return value
    return None


def parse_token_response(data: dict, now: float | None = None) -> tuple[str | None, str | None, int]:
    """Return (jwt, refresh_token, expires_at) from a JWT Auth sign-in or refresh body.

    The token sits under different keys depending on the plugin version. Expiry
    comes from the JWT's own exp claim, then expires_in, then the plugin default.
    """
    now = time.time() if now is None else now
    token = _first(data, "token", "jwt_token", "access_token")
    refresh = _first(data, "refresh_token")
    if not token:
        return None, refresh, 0
    expires_at = parse_jwt_expiry(token)
    if not expires_at:
        expires_in = _first(data, "expires_in")
        if expires_in:
            expires_at = int(now) + int(expires_in)
        else:
            expires_at = int(now) + DEFAULT_TOKEN_EXPIRY_DAYS * 24 * 60 * 60
    return token, refresh, expires_at
