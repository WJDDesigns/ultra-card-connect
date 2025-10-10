"""Sensor platform for Ultra Card Pro Cloud."""
from __future__ import annotations

import logging
from typing import Any

from homeassistant.components.sensor import (
    SensorEntity,
    SensorDeviceClass,
)
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.entity import EntityCategory
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.update_coordinator import CoordinatorEntity

from .const import DOMAIN, DATA_COORDINATOR
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
    _attr_icon = "mdi:cloud"

    def __init__(
        self,
        coordinator: UltraCardProCloudCoordinator,
        entry: ConfigEntry,
    ) -> None:
        """Initialize the sensor."""
        super().__init__(coordinator)
        
        self._attr_unique_id = f"{entry.entry_id}_auth_status"
        self._attr_name = "Authentication Status"
        
        # This makes the entity ID predictable: sensor.ultra_card_pro_cloud_authentication_status
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
        """
        if not self.coordinator.data or not self.coordinator.data.get("authenticated"):
            return {
                "authenticated": False,
                "subscription_tier": "free",
                "subscription_status": "expired",
            }

        subscription = self.coordinator.data.get("subscription", {})
        
        # Get user data with fallbacks
        username = self.coordinator.data.get("username") or "User"
        display_name = self.coordinator.data.get("display_name") or username
        
        return {
            "authenticated": True,
            "user_id": self.coordinator.data.get("user_id"),
            "username": username,
            "email": self.coordinator.data.get("email") or "",
            "display_name": display_name,
            "token": self.coordinator.data.get("token"),  # CRITICAL: Expose JWT token for frontend API calls
            "subscription_tier": subscription.get("tier", "free"),
            "subscription_status": subscription.get("status", "expired"),
            "subscription_expires": subscription.get("expires"),
            "connected_at": self.coordinator.data.get("connected_at"),
            # Features for PRO validation
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

