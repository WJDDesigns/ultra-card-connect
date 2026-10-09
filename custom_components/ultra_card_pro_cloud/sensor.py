"""Sensor platform for Ultra Card Pro Cloud."""
from __future__ import annotations

import logging
from typing import Any

from homeassistant.components.sensor import (
    SensorEntity,
    SensorDeviceClass,
)
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import EntityCategory
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.update_coordinator import CoordinatorEntity

from .const import (
    DOMAIN,
    DATA_COORDINATOR,
    INTEGRATION_CAPABILITIES,
    INTEGRATION_VERSION,  # noqa: F401 - re-exported for diagnostics.py
)
from .coordinator import UltraCardProCloudCoordinator

_LOGGER = logging.getLogger(__name__)


async def async_setup_entry(
    hass: HomeAssistant,
    entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up Ultra Card Pro Cloud sensor."""
    coordinator: UltraCardProCloudCoordinator = hass.data[DOMAIN][entry.entry_id][
        DATA_COORDINATOR
    ]

    async_add_entities([UltraCardProCloudAuthSensor(coordinator, entry)])


class UltraCardProCloudAuthSensor(CoordinatorEntity, SensorEntity):
    """Sensor that exposes Ultra Card Pro Cloud authentication status.
    
    This sensor is protected and cannot be manipulated by users.
    It serves as the authoritative source for PRO feature unlocking.
    """

    _attr_has_entity_name = True
    _attr_entity_category = EntityCategory.DIAGNOSTIC
    _attr_device_class = SensorDeviceClass.ENUM
    _attr_options = ["connected", "disconnected", "authenticating"]
    _attr_translation_key = "auth_status"
    # The name and state icons come from strings.json / icons.json.
    # These change every poll or are account details: keep them out of the
    # recorder so the sensor does not write a history row every 55 minutes.
    _unrecorded_attributes = frozenset(
        {"email", "last_poll", "connected_at", "features", "capabilities"}
    )

    def __init__(
        self,
        coordinator: UltraCardProCloudCoordinator,
        entry: ConfigEntry,
    ) -> None:
        """Initialize the sensor."""
        super().__init__(coordinator)
        
        self._attr_unique_id = f"{entry.entry_id}_auth_status"

        # Ultra Card and the Hub look the sensor up by this exact id, so keep it
        # fixed whatever the translated name is.
        self.entity_id = "sensor.ultra_card_pro_cloud_authentication_status"

    @property
    def native_value(self) -> str:
        """Return the state of the sensor."""
        if not self.coordinator.data:
            return "disconnected"
        
        if self.coordinator.data.get("authenticated"):
            return "connected"
        
        return "disconnected"

    @property
    def extra_state_attributes(self) -> dict[str, Any]:
        """Return the state attributes.
        
        These attributes contain the PRO subscription data that
        Ultra Card will use to unlock PRO features.
        
        SECURITY: This data comes from the authenticated API and
        cannot be manipulated by users through the frontend.

        Always includes integration_version + capabilities so Ultra Card
        can detect outdated Connect installs even when signed out.
        """
        handshake = {
            "integration_version": INTEGRATION_VERSION,
            "capabilities": dict(INTEGRATION_CAPABILITIES),
        }

        if not self.coordinator.data or not self.coordinator.data.get("authenticated"):
            return {
                **handshake,
                "authenticated": False,
                "subscription_tier": "free",
                "subscription_status": "expired",
                "needs_reauth": bool(
                    getattr(self.coordinator, "_reauth_requested", False)
                ),
                "last_poll": None,
            }

        subscription = self.coordinator.data.get("subscription", {})
        
        # Get user data with fallbacks
        username = self.coordinator.data.get("username") or "User"
        display_name = self.coordinator.data.get("display_name") or username
        
        # Do NOT expose token in entity state; frontend uses integration proxy for API calls
        return {
            **handshake,
            "authenticated": True,
            "user_id": self.coordinator.data.get("user_id"),
            "username": username,
            "email": self.coordinator.data.get("email") or "",
            "display_name": display_name,
            "subscription_tier": subscription.get("tier", "free"),
            "subscription_status": subscription.get("status", "expired"),
            "subscription_expires": subscription.get("expires"),
            "connected_at": self.coordinator.data.get("connected_at"),
            "last_poll": self.coordinator.data.get("last_poll"),
            "needs_reauth": bool(
                getattr(self.coordinator, "_reauth_requested", False)
            ),
            "features": subscription.get("features", {}),
        }


    @property
    def available(self) -> bool:
        """Return if entity is available."""
        return self.coordinator.last_update_success

    @callback
    def _handle_coordinator_update(self) -> None:
        """Handle updated data from the coordinator."""
        self.async_write_ha_state()
        _LOGGER.debug(
            "Auth sensor updated: %s (authenticated: %s)",
            self.native_value,
            self.coordinator.data.get("authenticated") if self.coordinator.data else False,
        )

