"""Data coordinator for Ultra Card Pro Cloud."""
from __future__ import annotations

import logging
from datetime import timedelta
from typing import Any

import aiohttp
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers.update_coordinator import DataUpdateCoordinator, UpdateFailed

from .const import (
    API_BASE_URL,
    JWT_ENDPOINT,
    SUBSCRIPTION_ENDPOINT,
    TOKEN_REFRESH_INTERVAL,
    CONF_USERNAME,
    CONF_PASSWORD,
)

_LOGGER = logging.getLogger(__name__)


class UltraCardProCloudCoordinator(DataUpdateCoordinator):
    """Class to manage fetching Ultra Card Pro Cloud data."""

    def __init__(
        self,
        hass: HomeAssistant,
        session: aiohttp.ClientSession,
        entry: ConfigEntry,
    ) -> None:
        """Initialize."""
        self.session = session
        self.entry = entry
        self._jwt_token: str | None = None
        self._refresh_token: str | None = None
        self._token_expires_at: int = 0

        super().__init__(
            hass,
            _LOGGER,
            name="Ultra Card Pro Cloud",
            update_interval=timedelta(seconds=TOKEN_REFRESH_INTERVAL),
        )

    async def _async_update_data(self) -> dict[str, Any]:
        """Fetch data from API."""
        try:
            _LOGGER.info("🔄 Starting data update cycle")
            
            # First time or token expired - login
            if not self._jwt_token:
                _LOGGER.info("🔐 No JWT token, authenticating...")
                await self._authenticate()

            # Check if token needs refresh
            import time
            current_time = int(time.time())
            if current_time >= self._token_expires_at - 300:  # 5 min before expiry
                _LOGGER.info("🔄 Token expiring soon, refreshing...")
                if self._refresh_token:
                    await self._refresh_jwt_token()
                else:
                    # No refresh token, re-authenticate
                    _LOGGER.info("🔄 No refresh token, re-authenticating...")
                    await self._authenticate()

            # Fetch user profile data from WordPress
            _LOGGER.info("👤 Fetching user profile data...")
            user_data = await self._fetch_user_profile()
            
            # Fetch subscription data
            _LOGGER.info("📡 Fetching subscription data...")
            subscription_data = await self._fetch_subscription()
            
            import datetime
            result = {
                "authenticated": True,
                "user_id": user_data.get("id"),
                "username": user_data.get("user_nicename") or user_data.get("name"),
                "email": user_data.get("user_email") or user_data.get("email"),
                "display_name": user_data.get("display_name") or user_data.get("name"),
                "token": self._jwt_token,  # CRITICAL: Include JWT token for frontend API calls
                "connected_at": datetime.datetime.now().isoformat(),
                "subscription": {
                    "tier": subscription_data.get("tier", "free"),
                    "status": subscription_data.get("status", "expired"),
                    "expires": subscription_data.get("expires"),
                    "features": subscription_data.get("features", {}),
                },
            }
            
            _LOGGER.info("✅ Successfully fetched data: %s", result)
            return result

        except Exception as err:
            _LOGGER.error("❌ Error communicating with Ultra Card API: %s", err)
            # Return unauthenticated state instead of raising
            return {
                "authenticated": False,
                "error": str(err),
            }

    async def _authenticate(self) -> None:
        """Authenticate with ultracard.io and get JWT token."""
        username = self.entry.data[CONF_USERNAME]
        password = self.entry.data[CONF_PASSWORD]

        url = f"{API_BASE_URL}{JWT_ENDPOINT}/token"
        
        _LOGGER.info("🔐 Authenticating with ultracard.io for user: %s", username)

        try:
            async with self.session.post(
                url,
                json={"username": username, "password": password},
                timeout=aiohttp.ClientTimeout(total=10),
            ) as response:
                if response.status != 200:
                    error_text = await response.text()
                    _LOGGER.error("❌ Authentication failed: %s - %s", response.status, error_text)
                    raise UpdateFailed(f"Authentication failed: {response.status}")

                data = await response.json()
                self._jwt_token = data.get("token")
                self._refresh_token = data.get("refresh_token")
                
                # JWT tokens typically expire in 1 hour
                expires_in = data.get("expires_in", 3600)
                import time
                self._token_expires_at = int(time.time()) + expires_in

                _LOGGER.info("✅ Successfully authenticated with ultracard.io")

        except aiohttp.ClientError as err:
            _LOGGER.error("❌ Connection error during authentication: %s", err)
            raise UpdateFailed(f"Cannot connect to ultracard.io: {err}") from err

    async def _refresh_jwt_token(self) -> None:
        """Refresh JWT token using refresh token."""
        if not self._refresh_token:
            _LOGGER.warning("No refresh token available, re-authenticating")
            await self._authenticate()
            return

        url = f"{API_BASE_URL}{JWT_ENDPOINT}/token/refresh"
        
        _LOGGER.debug("Refreshing JWT token")

        try:
            async with self.session.post(
                url,
                json={"refresh_token": self._refresh_token},
                timeout=aiohttp.ClientTimeout(total=10),
            ) as response:
                if response.status != 200:
                    _LOGGER.warning("Token refresh failed, re-authenticating")
                    await self._authenticate()
                    return

                data = await response.json()
                self._jwt_token = data.get("token")
                
                expires_in = data.get("expires_in", 3600)
                import time
                self._token_expires_at = int(time.time()) + expires_in

                _LOGGER.debug("Successfully refreshed JWT token")

        except aiohttp.ClientError as err:
            _LOGGER.warning("Error refreshing token, re-authenticating: %s", err)
            await self._authenticate()

    async def _fetch_user_profile(self) -> dict[str, Any]:
        """Fetch user profile data from WordPress."""
        if not self._jwt_token:
            raise UpdateFailed("No JWT token available")

        url = f"{API_BASE_URL}/wp/v2/users/me"
        
        _LOGGER.debug("Fetching user profile data")

        try:
            async with self.session.get(
                url,
                headers={"Authorization": f"Bearer {self._jwt_token}"},
                timeout=aiohttp.ClientTimeout(total=10),
            ) as response:
                if response.status != 200:
                    error_text = await response.text()
                    _LOGGER.error("Failed to fetch user profile: %s - %s", response.status, error_text)
                    raise UpdateFailed(f"Failed to fetch user profile: {response.status}")

                data = await response.json()
                _LOGGER.debug("User profile data: %s", data)
                return data

        except aiohttp.ClientError as err:
            _LOGGER.error("Error fetching user profile: %s", err)
            raise UpdateFailed(f"Cannot fetch user profile data: {err}") from err

    async def _fetch_subscription(self) -> dict[str, Any]:
        """Fetch subscription data from API."""
        if not self._jwt_token:
            raise UpdateFailed("No JWT token available")

        url = f"{API_BASE_URL}{SUBSCRIPTION_ENDPOINT}"
        
        _LOGGER.debug("Fetching subscription data")

        try:
            async with self.session.get(
                url,
                headers={"Authorization": f"Bearer {self._jwt_token}"},
                timeout=aiohttp.ClientTimeout(total=10),
            ) as response:
                if response.status != 200:
                    error_text = await response.text()
                    _LOGGER.error("Failed to fetch subscription: %s - %s", response.status, error_text)
                    raise UpdateFailed(f"Failed to fetch subscription: {response.status}")

                data = await response.json()
                _LOGGER.debug("Subscription data: %s", data)
                return data

        except aiohttp.ClientError as err:
            _LOGGER.error("Error fetching subscription: %s", err)
            raise UpdateFailed(f"Cannot fetch subscription data: {err}") from err

    async def async_logout(self) -> None:
        """Logout and invalidate tokens."""
        _LOGGER.info("Logging out from Ultra Card Pro Cloud")
        
        # Try to invalidate token on server
        if self._jwt_token:
            url = f"{API_BASE_URL}{JWT_ENDPOINT}/token/invalidate"
            try:
                async with self.session.post(
                    url,
                    headers={"Authorization": f"Bearer {self._jwt_token}"},
                    timeout=aiohttp.ClientTimeout(total=5),
                ) as response:
                    if response.status == 200:
                        _LOGGER.debug("Token invalidated on server")
            except Exception as err:
                _LOGGER.debug("Could not invalidate token on server: %s", err)

        # Clear local tokens
        self._jwt_token = None
        self._refresh_token = None
        self._token_expires_at = 0

