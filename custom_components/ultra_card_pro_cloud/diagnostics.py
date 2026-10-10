"""Diagnostics support for Ultra Card Connect."""
from __future__ import annotations

from typing import Any

from homeassistant.components.diagnostics import async_redact_data
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant

from .const import (
    DATA_COORDINATOR,
    DOMAIN,
    INTEGRATION_CAPABILITIES,
    INTEGRATION_VERSION,
)

TO_REDACT = {
    "password",
    "token",
    "refresh_token",
    "jwt",
    "access_token",
    "authorization",
    # Account identity: diagnostics get pasted into public GitHub issues.
    "title",
    "unique_id",
    "username",
    "email",
    "user_id",
}


async def async_get_config_entry_diagnostics(
    hass: HomeAssistant, entry: ConfigEntry
) -> dict[str, Any]:
    """Return diagnostics for a config entry (HA Settings → Download diagnostics)."""
    entry_data = hass.data.get(DOMAIN, {}).get(entry.entry_id, {})
    coordinator = entry_data.get(DATA_COORDINATOR)

    snapshot: dict[str, Any] = {
        "integration_version": INTEGRATION_VERSION,
        "capabilities": dict(INTEGRATION_CAPABILITIES),
        "entry": {
            "title": entry.title,
            "domain": entry.domain,
            "unique_id": entry.unique_id,
            "has_username": bool(entry.data.get("username")),
        },
    }

    if coordinator is not None:
        snapshot["coordinator"] = coordinator.get_redacted_diagnostics()
        # Live connectivity is opt-in via POST /diagnostics to avoid slow downloads.
        snapshot["connectivity"] = None
    else:
        snapshot["coordinator"] = None
        snapshot["connectivity"] = None

    return async_redact_data(snapshot, TO_REDACT)
