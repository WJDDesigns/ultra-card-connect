"""Data coordinator for Ultra Card Pro Cloud."""
from __future__ import annotations

import logging
import asyncio
import time
import base64
import json as json_module
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

# Constants for retry logic
MAX_RETRIES = 2  # Reduced from 3 to minimize traffic on failures
RETRY_DELAY = 2  # seconds
RATE_LIMIT_DELAY = 5  # seconds for 429 responses
DEFAULT_TOKEN_EXPIRY_DAYS = 180  # Match JWT Auth Pro default

# Connection settings
USER_AGENT = "HomeAssistant/UltraCardProCloud/1.0"
REQUEST_TIMEOUT = 30  # Total timeout in seconds
CONNECT_TIMEOUT = 10  # Connection establishment timeout


def parse_jwt_expiry(token: str) -> int | None:
    """Parse the expiry timestamp from a JWT token.
    
    JWT format: header.payload.signature
    The payload contains the 'exp' claim with Unix timestamp.
    """
    try:
        # Split the JWT into parts
        parts = token.split('.')
        if len(parts) != 3:
            _LOGGER.debug("Invalid JWT format - expected 3 parts, got %d", len(parts))
            return None
        
        # Decode the payload (second part)
        # Add padding if needed (base64 requires padding to be multiple of 4)
        payload_b64 = parts[1]
        padding = 4 - len(payload_b64) % 4
        if padding != 4:
            payload_b64 += '=' * padding
        
        # Use URL-safe base64 decoding
        payload_bytes = base64.urlsafe_b64decode(payload_b64)
        payload = json_module.loads(payload_bytes.decode('utf-8'))
        
        # Extract the 'exp' claim (expiry timestamp)
        exp = payload.get('exp')
        if exp:
            _LOGGER.debug("🔑 Parsed JWT expiry: %s (in %d seconds)", 
                         exp, exp - int(time.time()))
            return int(exp)
        
        _LOGGER.debug("No 'exp' claim found in JWT payload")
        return None
        
    except Exception as e:
        _LOGGER.debug("Failed to parse JWT expiry: %s", e)
        return None


def _get_timeout() -> aiohttp.ClientTimeout:
    """Get standard timeout configuration."""
    return aiohttp.ClientTimeout(total=REQUEST_TIMEOUT, connect=CONNECT_TIMEOUT)


def _get_headers(token: str | None = None) -> dict[str, str]:
    """Get standard request headers with User-Agent."""
    headers = {
        "User-Agent": USER_AGENT,
        "Accept": "application/json",
    }
    if token:
        headers["Authorization"] = f"Bearer {token}"
    return headers


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
        self._last_auth_attempt: float = 0
        self._auth_failure_count: int = 0

        super().__init__(
            hass,
            _LOGGER,
            name="Ultra Card Pro Cloud",
            update_interval=timedelta(seconds=TOKEN_REFRESH_INTERVAL),
        )

    async def _async_update_data(self) -> dict[str, Any]:
        """Fetch data from API."""
        try:
            _LOGGER.debug("🔄 Starting data update cycle")
            
            current_time = int(time.time())
            
            # Check if we have a valid token
            if not self._jwt_token:
                _LOGGER.info("🔐 No JWT token, authenticating...")
                await self._authenticate()
            elif current_time >= self._token_expires_at - 300:  # 5 min before expiry
                _LOGGER.info("🔄 Token expiring soon, refreshing...")
                if self._refresh_token:
                    try:
                        await self._refresh_jwt_token()
                    except Exception as e:
                        _LOGGER.warning("⚠️ Token refresh failed, re-authenticating: %s", e)
                        await self._authenticate()
                else:
                    # No refresh token, re-authenticate
                    _LOGGER.debug("🔄 No refresh token, re-authenticating...")
                    await self._authenticate()

            # Verify we have a token after auth attempt
            if not self._jwt_token:
                raise UpdateFailed("No JWT token available after authentication")

            # Fetch user profile data from WordPress
            _LOGGER.debug("👤 Fetching user profile data...")
            user_data = await self._fetch_user_profile()
            
            # Fetch subscription data
            _LOGGER.debug("📡 Fetching subscription data...")
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
            
            # Reset failure count on success
            self._auth_failure_count = 0
            
            _LOGGER.debug("✅ Data update successful")
            return result

        except aiohttp.ClientConnectorError as err:
            # DNS resolution failed or connection refused
            self._auth_failure_count += 1
            _LOGGER.error(
                "❌ Connection error to Ultra Card API: %s "
                "(This is usually a DNS or network issue - verify ultracard.io is reachable from your HA instance)",
                err
            )
            return {
                "authenticated": False,
                "error": f"Connection failed: Unable to reach ultracard.io - {err}",
                "error_type": "connection",
            }
        except aiohttp.ClientSSLError as err:
            # SSL/TLS certificate issues
            self._auth_failure_count += 1
            _LOGGER.error(
                "❌ SSL/TLS error connecting to Ultra Card API: %s "
                "(Certificate validation failed - this may be a network proxy or firewall issue)",
                err
            )
            return {
                "authenticated": False,
                "error": f"SSL certificate error: {err}",
                "error_type": "ssl",
            }
        except asyncio.TimeoutError:
            # Request timed out
            self._auth_failure_count += 1
            _LOGGER.error(
                "❌ Timeout connecting to Ultra Card API "
                "(Server did not respond within %d seconds - check your internet connection or try again later)",
                REQUEST_TIMEOUT
            )
            return {
                "authenticated": False,
                "error": f"Connection timed out after {REQUEST_TIMEOUT} seconds",
                "error_type": "timeout",
            }
        except aiohttp.ServerDisconnectedError as err:
            # Server closed connection unexpectedly
            self._auth_failure_count += 1
            _LOGGER.error(
                "❌ Server disconnected during request: %s "
                "(The server closed the connection - this may be temporary, try again)",
                err
            )
            return {
                "authenticated": False,
                "error": f"Server disconnected: {err}",
                "error_type": "disconnected",
            }
        except aiohttp.ClientResponseError as err:
            # HTTP error response
            self._auth_failure_count += 1
            _LOGGER.error(
                "❌ HTTP error from Ultra Card API: %s %s",
                err.status, err.message
            )
            return {
                "authenticated": False,
                "error": f"HTTP {err.status}: {err.message}",
                "error_type": "http_error",
            }
        except UpdateFailed as err:
            # Our own UpdateFailed exceptions
            self._auth_failure_count += 1
            _LOGGER.error("❌ Update failed: %s", err)
            
            # If we've failed multiple times, clear tokens to force re-auth
            if self._auth_failure_count >= 3:
                _LOGGER.warning("⚠️ Multiple auth failures (%d), clearing tokens for fresh start", self._auth_failure_count)
                self._jwt_token = None
                self._refresh_token = None
                self._token_expires_at = 0
            
            return {
                "authenticated": False,
                "error": str(err),
                "error_type": "update_failed",
            }
        except Exception as err:
            # Catch-all for unexpected errors
            self._auth_failure_count += 1
            _LOGGER.error(
                "❌ Unexpected error communicating with Ultra Card API: %s (%s)",
                err, type(err).__name__
            )
            
            # If we've failed multiple times, clear tokens to force re-auth
            if self._auth_failure_count >= 3:
                _LOGGER.warning("⚠️ Multiple auth failures (%d), clearing tokens for fresh start", self._auth_failure_count)
                self._jwt_token = None
                self._refresh_token = None
                self._token_expires_at = 0
            
            return {
                "authenticated": False,
                "error": f"{type(err).__name__}: {err}",
                "error_type": "unknown",
            }

    async def _authenticate(self) -> None:
        """Authenticate with ultracard.io and get JWT token."""
        username = self.entry.data[CONF_USERNAME]
        password = self.entry.data[CONF_PASSWORD]

        url = f"{API_BASE_URL}{JWT_ENDPOINT}/token"
        
        _LOGGER.info("🔐 Authenticating with ultracard.io for user: %s", username)
        _LOGGER.debug("🔗 Auth URL: %s", url)

        for attempt in range(MAX_RETRIES):
            try:
                async with self.session.post(
                    url,
                    json={"username": username, "password": password},
                    headers=_get_headers(),
                    timeout=_get_timeout(),
                ) as response:
                    response_text = await response.text()
                    _LOGGER.debug("📥 Auth response status: %s", response.status)
                    _LOGGER.debug("📥 Auth response body: %s", response_text[:500])
                    
                    # Handle rate limiting (JWT Auth Pro feature)
                    if response.status == 429:
                        retry_after = int(response.headers.get("Retry-After", RATE_LIMIT_DELAY))
                        _LOGGER.warning("⏳ Rate limited, waiting %s seconds before retry", retry_after)
                        await asyncio.sleep(retry_after)
                        continue
                    
                    # Handle various error statuses
                    if response.status == 401 or response.status == 403:
                        _LOGGER.error("❌ Authentication failed: Invalid credentials (status %s)", response.status)
                        raise UpdateFailed(f"Invalid credentials: {response.status}")
                    
                    # JWT Auth Pro may return 202 for async operations - handle it
                    if response.status == 202:
                        _LOGGER.debug("⏳ Got 202 Accepted, request is being processed...")
                        # Wait a moment and retry
                        await asyncio.sleep(2)
                        continue
                    
                    # Accept any 2xx status as success
                    if not (200 <= response.status < 300):
                        _LOGGER.error("❌ Authentication failed: %s - %s", response.status, response_text[:200])
                        if attempt < MAX_RETRIES - 1:
                            await asyncio.sleep(RETRY_DELAY * (attempt + 1))
                            continue
                        raise UpdateFailed(f"Authentication failed: {response.status}")

                    # Parse response JSON
                    try:
                        import json
                        data = json.loads(response_text)
                    except json.JSONDecodeError as e:
                        _LOGGER.error("❌ Failed to parse auth response: %s", e)
                        raise UpdateFailed(f"Invalid response from server: {e}")
                    
                    # JWT Auth Pro response format
                    # The token might be under different keys depending on version
                    self._jwt_token = (
                        data.get("token") or 
                        data.get("data", {}).get("token") or
                        data.get("jwt_token") or
                        data.get("access_token")
                    )
                    
                    # JWT Auth Pro provides refresh_token for token refresh
                    self._refresh_token = (
                        data.get("refresh_token") or
                        data.get("data", {}).get("refresh_token")
                    )
                    
                    if not self._jwt_token:
                        _LOGGER.error("❌ No token in response: %s", data.keys())
                        raise UpdateFailed("No token in authentication response")
                    
                    # Calculate token expiry - try multiple methods
                    # 1. First try to parse the exp claim from the JWT itself (most accurate)
                    jwt_exp = parse_jwt_expiry(self._jwt_token)
                    if jwt_exp:
                        self._token_expires_at = jwt_exp
                        _LOGGER.debug("⏰ Token expiry from JWT: %s", self._token_expires_at)
                    else:
                        # 2. Check if API returned expires_in
                        expires_in = (
                            data.get("expires_in") or 
                            data.get("data", {}).get("expires_in")
                        )
                        if expires_in:
                            self._token_expires_at = int(time.time()) + int(expires_in)
                            _LOGGER.debug("⏰ Token expiry from API expires_in: %s", self._token_expires_at)
                        else:
                            # 3. Default to configured days (match your JWT Auth Pro settings)
                            self._token_expires_at = int(time.time()) + (DEFAULT_TOKEN_EXPIRY_DAYS * 24 * 60 * 60)
                            _LOGGER.debug("⏰ Token expiry using default (%d days): %s", 
                                         DEFAULT_TOKEN_EXPIRY_DAYS, self._token_expires_at)

                    # Log time until expiry in human-readable format
                    seconds_until_expiry = self._token_expires_at - int(time.time())
                    days_until_expiry = seconds_until_expiry / (24 * 60 * 60)
                    _LOGGER.info("✅ Authenticated with ultracard.io (token valid for %.0f days)", days_until_expiry)
                    _LOGGER.debug("🔑 Token received, refresh token available: %s", bool(self._refresh_token))
                    return

            except aiohttp.ClientError as err:
                _LOGGER.error("❌ Connection error during authentication (attempt %d/%d): %s", 
                             attempt + 1, MAX_RETRIES, err)
                if attempt < MAX_RETRIES - 1:
                    await asyncio.sleep(RETRY_DELAY * (attempt + 1))
                else:
                    raise UpdateFailed(f"Cannot connect to ultracard.io: {err}") from err
            except UpdateFailed:
                raise
            except Exception as err:
                _LOGGER.error("❌ Unexpected error during authentication: %s", err)
                if attempt < MAX_RETRIES - 1:
                    await asyncio.sleep(RETRY_DELAY * (attempt + 1))
                else:
                    raise UpdateFailed(f"Authentication error: {err}") from err

    async def _refresh_jwt_token(self) -> None:
        """Refresh JWT token using refresh token."""
        if not self._refresh_token:
            _LOGGER.warning("No refresh token available, re-authenticating")
            await self._authenticate()
            return

        url = f"{API_BASE_URL}{JWT_ENDPOINT}/token/refresh"
        
        _LOGGER.debug("🔄 Refreshing JWT token at: %s", url)

        try:
            # JWT Auth Pro expects the refresh token in Authorization header as Bearer token
            # OR in the request body - we'll try both approaches
            headers = _get_headers()
            headers["Authorization"] = f"Bearer {self._refresh_token}"
            
            async with self.session.post(
                url,
                json={"refresh_token": self._refresh_token},
                headers=headers,
                timeout=_get_timeout(),
            ) as response:
                response_text = await response.text()
                _LOGGER.debug("📥 Refresh response status: %s", response.status)
                _LOGGER.debug("📥 Refresh response body: %s", response_text[:500])
                
                # Handle rate limiting
                if response.status == 429:
                    retry_after = int(response.headers.get("Retry-After", RATE_LIMIT_DELAY))
                    _LOGGER.warning("⏳ Rate limited during refresh, waiting %s seconds", retry_after)
                    await asyncio.sleep(retry_after)
                    # Re-authenticate instead of retrying refresh
                    await self._authenticate()
                    return
                
                # Handle 202 Accepted (async operation)
                if response.status == 202:
                    _LOGGER.info("⏳ Got 202 for refresh, re-authenticating instead...")
                    await self._authenticate()
                    return
                
                if not (200 <= response.status < 300):
                    _LOGGER.warning("⚠️ Token refresh failed with status %s, re-authenticating", response.status)
                    await self._authenticate()
                    return

                try:
                    import json
                    data = json.loads(response_text)
                except json.JSONDecodeError:
                    _LOGGER.warning("⚠️ Invalid refresh response, re-authenticating")
                    await self._authenticate()
                    return
                
                # Extract new token from response
                new_token = (
                    data.get("token") or 
                    data.get("data", {}).get("token") or
                    data.get("jwt_token") or
                    data.get("access_token")
                )
                
                if new_token:
                    self._jwt_token = new_token
                    
                    # Update refresh token if provided
                    new_refresh = (
                        data.get("refresh_token") or
                        data.get("data", {}).get("refresh_token")
                    )
                    if new_refresh:
                        self._refresh_token = new_refresh
                    
                    # Calculate token expiry using JWT parsing first
                    jwt_exp = parse_jwt_expiry(self._jwt_token)
                    if jwt_exp:
                        self._token_expires_at = jwt_exp
                    else:
                        expires_in = (
                            data.get("expires_in") or 
                            data.get("data", {}).get("expires_in")
                        )
                        if expires_in:
                            self._token_expires_at = int(time.time()) + int(expires_in)
                        else:
                            self._token_expires_at = int(time.time()) + (DEFAULT_TOKEN_EXPIRY_DAYS * 24 * 60 * 60)

                    _LOGGER.debug("✅ Successfully refreshed JWT token")
                else:
                    _LOGGER.warning("⚠️ No token in refresh response, re-authenticating")
                    await self._authenticate()

        except aiohttp.ClientError as err:
            _LOGGER.warning("⚠️ Error refreshing token, re-authenticating: %s", err)
            await self._authenticate()

    async def _fetch_user_profile(self) -> dict[str, Any]:
        """Fetch user profile data from WordPress."""
        if not self._jwt_token:
            raise UpdateFailed("No JWT token available")

        url = f"{API_BASE_URL}/wp/v2/users/me"
        
        _LOGGER.debug("👤 Fetching user profile from: %s", url)

        for attempt in range(MAX_RETRIES):
            try:
                async with self.session.get(
                    url,
                    headers=_get_headers(self._jwt_token),
                    timeout=_get_timeout(),
                ) as response:
                    response_text = await response.text()
                    _LOGGER.debug("📥 User profile response status: %s", response.status)
                    
                    # Handle rate limiting
                    if response.status == 429:
                        retry_after = int(response.headers.get("Retry-After", RATE_LIMIT_DELAY))
                        _LOGGER.warning("⏳ Rate limited, waiting %s seconds", retry_after)
                        await asyncio.sleep(retry_after)
                        continue
                    
                    # Handle token expiration/revocation (JWT Auth Pro auto-revoke feature)
                    if response.status == 401 or response.status == 403:
                        _LOGGER.warning("⚠️ Token rejected (status %s), clearing and will re-auth", response.status)
                        self._jwt_token = None
                        self._refresh_token = None
                        raise UpdateFailed(f"Token expired or revoked: {response.status}")
                    
                    if not (200 <= response.status < 300):
                        _LOGGER.error("❌ Failed to fetch user profile: %s - %s", response.status, response_text[:200])
                        if attempt < MAX_RETRIES - 1:
                            await asyncio.sleep(RETRY_DELAY * (attempt + 1))
                            continue
                        raise UpdateFailed(f"Failed to fetch user profile: {response.status}")

                    try:
                        import json
                        data = json.loads(response_text)
                    except json.JSONDecodeError as e:
                        _LOGGER.error("❌ Failed to parse user profile response: %s", e)
                        raise UpdateFailed(f"Invalid user profile response: {e}")
                    
                    _LOGGER.debug("✅ User profile data received")
                    return data

            except aiohttp.ClientError as err:
                _LOGGER.error("❌ Error fetching user profile (attempt %d/%d): %s", 
                             attempt + 1, MAX_RETRIES, err)
                if attempt < MAX_RETRIES - 1:
                    await asyncio.sleep(RETRY_DELAY * (attempt + 1))
                else:
                    raise UpdateFailed(f"Cannot fetch user profile data: {err}") from err
        
        raise UpdateFailed("Failed to fetch user profile after all retries")

    async def _fetch_subscription(self) -> dict[str, Any]:
        """Fetch subscription data from API."""
        if not self._jwt_token:
            raise UpdateFailed("No JWT token available")

        url = f"{API_BASE_URL}{SUBSCRIPTION_ENDPOINT}"
        
        _LOGGER.debug("📡 Fetching subscription from: %s", url)

        for attempt in range(MAX_RETRIES):
            try:
                async with self.session.get(
                    url,
                    headers=_get_headers(self._jwt_token),
                    timeout=_get_timeout(),
                ) as response:
                    response_text = await response.text()
                    _LOGGER.debug("📥 Subscription response status: %s", response.status)
                    
                    # Handle rate limiting
                    if response.status == 429:
                        retry_after = int(response.headers.get("Retry-After", RATE_LIMIT_DELAY))
                        _LOGGER.warning("⏳ Rate limited, waiting %s seconds", retry_after)
                        await asyncio.sleep(retry_after)
                        continue
                    
                    # Handle token expiration/revocation
                    if response.status == 401 or response.status == 403:
                        _LOGGER.warning("⚠️ Token rejected during subscription fetch")
                        self._jwt_token = None
                        self._refresh_token = None
                        raise UpdateFailed(f"Token expired or revoked: {response.status}")
                    
                    if not (200 <= response.status < 300):
                        _LOGGER.error("❌ Failed to fetch subscription: %s - %s", response.status, response_text[:200])
                        if attempt < MAX_RETRIES - 1:
                            await asyncio.sleep(RETRY_DELAY * (attempt + 1))
                            continue
                        raise UpdateFailed(f"Failed to fetch subscription: {response.status}")

                    try:
                        import json
                        data = json.loads(response_text)
                    except json.JSONDecodeError as e:
                        _LOGGER.error("❌ Failed to parse subscription response: %s", e)
                        raise UpdateFailed(f"Invalid subscription response: {e}")
                    
                    _LOGGER.debug("✅ Subscription data received")
                    return data

            except aiohttp.ClientError as err:
                _LOGGER.error("❌ Error fetching subscription (attempt %d/%d): %s", 
                             attempt + 1, MAX_RETRIES, err)
                if attempt < MAX_RETRIES - 1:
                    await asyncio.sleep(RETRY_DELAY * (attempt + 1))
                else:
                    raise UpdateFailed(f"Cannot fetch subscription data: {err}") from err
        
        raise UpdateFailed("Failed to fetch subscription after all retries")

    async def async_test_connectivity(self) -> dict[str, Any]:
        """Test connectivity to ultracard.io for diagnostics.
        
        Returns a dict with test results for each stage:
        - dns: Whether DNS resolution succeeded
        - ssl: Whether SSL/TLS handshake succeeded
        - api: Whether the API responded
        - auth: Whether authentication works (if credentials provided)
        """
        results = {
            "dns": False,
            "ssl": False,
            "api": False,
            "auth": False,
            "errors": [],
        }
        
        # Test 1: Basic connectivity (DNS + SSL)
        try:
            async with self.session.get(
                "https://ultracard.io/",
                timeout=aiohttp.ClientTimeout(total=10, connect=5),
                headers={"User-Agent": USER_AGENT},
            ) as resp:
                results["dns"] = True
                results["ssl"] = True
                if resp.status < 500:
                    results["api"] = True
                else:
                    results["errors"].append(f"Server returned status {resp.status}")
        except aiohttp.ClientConnectorError as e:
            results["errors"].append(f"DNS/Connection failed: {e}")
        except aiohttp.ClientSSLError as e:
            results["dns"] = True  # DNS worked if we got to SSL
            results["errors"].append(f"SSL/TLS failed: {e}")
        except asyncio.TimeoutError:
            results["errors"].append("Connection timed out")
        except Exception as e:
            results["errors"].append(f"Unexpected error: {type(e).__name__}: {e}")
        
        # Test 2: API endpoint accessibility
        if results["ssl"]:
            try:
                url = f"{API_BASE_URL}{JWT_ENDPOINT}"
                async with self.session.get(
                    url,
                    timeout=aiohttp.ClientTimeout(total=10, connect=5),
                    headers={"User-Agent": USER_AGENT},
                ) as resp:
                    # JWT endpoint should return 405 for GET (method not allowed) or 200
                    # Either indicates the API is reachable
                    if resp.status in (200, 405, 401):
                        results["api"] = True
                    else:
                        results["errors"].append(f"API endpoint returned unexpected status {resp.status}")
            except Exception as e:
                results["errors"].append(f"API test failed: {type(e).__name__}: {e}")
        
        # Test 3: Authentication (if we have credentials)
        if results["api"] and self._jwt_token:
            results["auth"] = True
        elif results["api"]:
            try:
                # Try to authenticate
                await self._authenticate()
                if self._jwt_token:
                    results["auth"] = True
            except Exception as e:
                results["errors"].append(f"Authentication test failed: {e}")
        
        _LOGGER.info(
            "🔍 Connectivity test results - DNS: %s, SSL: %s, API: %s, Auth: %s",
            results["dns"], results["ssl"], results["api"], results["auth"]
        )
        if results["errors"]:
            _LOGGER.warning("⚠️ Connectivity test errors: %s", results["errors"])
        
        return results

    async def async_logout(self) -> None:
        """Logout and invalidate tokens."""
        _LOGGER.debug("🚪 Logging out from Ultra Card Pro Cloud")
        
        # Try to invalidate token on server (JWT Auth Pro revoke endpoint)
        if self._jwt_token:
            # Try the Pro revoke endpoint first
            revoke_urls = [
                f"{API_BASE_URL}{JWT_ENDPOINT}/token/revoke",
                f"{API_BASE_URL}{JWT_ENDPOINT}/token/invalidate",
            ]
            
            for url in revoke_urls:
                try:
                    async with self.session.post(
                        url,
                        headers=_get_headers(self._jwt_token),
                        timeout=aiohttp.ClientTimeout(total=5),
                    ) as response:
                        if 200 <= response.status < 300:
                            _LOGGER.debug("✅ Token revoked on server via %s", url)
                            break
                except Exception as err:
                    _LOGGER.debug("⚠️ Could not revoke token via %s: %s", url, err)

        # Clear local tokens
        self._jwt_token = None
        self._refresh_token = None
        self._token_expires_at = 0
        self._auth_failure_count = 0
        _LOGGER.debug("✅ Local tokens cleared")
