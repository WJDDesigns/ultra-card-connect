"""Data coordinator for Ultra Card Connect."""
from __future__ import annotations

import logging
import asyncio
import time
from datetime import timedelta
from typing import Any

import aiohttp
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers.update_coordinator import DataUpdateCoordinator, UpdateFailed

from .auth_state import (
    AuthSession,
    get_auth_state,
    parse_retry_after,
    sign_in_wait_message,
)
from .const import (
    API_BASE_URL,
    DOMAIN,
    JWT_ENDPOINT,
    SUBSCRIPTION_ENDPOINT,
    TOKEN_REFRESH_INTERVAL,
    CONF_USERNAME,
    CONF_PASSWORD,
    GRACE_PERIOD_HOURS,
)
from .bot_challenge import BOT_CHALLENGE_MESSAGE, is_bot_challenge as _is_bot_challenge
from .jwt_utils import parse_jwt_expiry

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

# Grace period - calculated from hours constant
GRACE_PERIOD_SECONDS = GRACE_PERIOD_HOURS * 3600


class BotChallengeError(UpdateFailed):
    """Raised when edge bot protection blocks access to the ultracard.io API."""


class SignInRateLimited(UpdateFailed):
    """Raised while ultracard.io is refusing sign-ins from this network."""


MAX_RETRY_AFTER = 30  # seconds; never sleep longer than this inside an update


def _retry_after_seconds(response: aiohttp.ClientResponse) -> int:
    """Parse Retry-After for in-update sleeps on data endpoints, clamped to a sane range.

    Not for sign-in: a sign-in 429 must be honoured in full (see AuthState.block_sign_in).
    """
    seconds = parse_retry_after(response.headers.get("Retry-After"), RATE_LIMIT_DELAY)
    return int(max(1, min(seconds, MAX_RETRY_AFTER)))


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


def _format_grace_remaining(seconds_remaining: float) -> str:
    """Format remaining grace period time in a human-readable way."""
    hours = seconds_remaining / 3600
    if hours >= 1:
        return f"{hours:.1f} hours"
    minutes = seconds_remaining / 60
    return f"{minutes:.0f} minutes"


class UltraCardProCloudCoordinator(DataUpdateCoordinator):
    """Class to manage fetching Ultra Card Connect data."""

    def __init__(
        self,
        hass: HomeAssistant,
        session: aiohttp.ClientSession,
        entry: ConfigEntry,
    ) -> None:
        """Initialize."""
        self.session = session
        self.entry = entry
        self._auth_state = get_auth_state(hass.data.setdefault(DOMAIN, {}))
        self._session: AuthSession = self._auth_state.session_for(
            entry.entry_id, (entry.data or {}).get(CONF_USERNAME)
        )
        self._last_auth_attempt: float = 0
        self._auth_failure_count: int = 0
        self._reauth_requested: bool = False
        self._last_error: str | None = None

        # Grace period caching - maintains Pro access during server outages
        self._last_successful_data: dict[str, Any] | None = None
        self._last_successful_time: float = 0

        # Pass the entry explicitly: relying on the ContextVar was deprecated in
        # HA 2024.11 and removed later.
        super().__init__(
            hass,
            _LOGGER,
            config_entry=entry,
            name="Ultra Card Connect",
            update_interval=timedelta(seconds=TOKEN_REFRESH_INTERVAL),
        )

    # Tokens live on the shared AuthSession so a setup retry or reload reuses
    # them instead of signing in again.
    @property
    def _jwt_token(self) -> str | None:
        return self._session.jwt_token

    @_jwt_token.setter
    def _jwt_token(self, value: str | None) -> None:
        self._session.jwt_token = value

    @property
    def _refresh_token(self) -> str | None:
        return self._session.refresh_token

    @_refresh_token.setter
    def _refresh_token(self, value: str | None) -> None:
        self._session.refresh_token = value

    @property
    def _token_expires_at(self) -> int:
        return self._session.token_expires_at

    @_token_expires_at.setter
    def _token_expires_at(self, value: int) -> None:
        self._session.token_expires_at = value

    def reset_auth_state(self) -> None:
        """Forget tokens and failure bookkeeping so the next refresh signs in fresh.

        Used when the Hub stores new credentials: the old JWT (if any) belongs
        to the previous account, the reauth flag would suppress a new repair
        if the fresh credentials are also wrong, and the grace-period cache
        must not keep the previous account's Pro tier alive. The instance-wide
        sign-in block survives: ultracard.io limits by IP, not by account.
        """
        self._session.clear_tokens()
        self._session.username = (self.entry.data or {}).get(CONF_USERNAME)
        self._auth_failure_count = 0
        self._reauth_requested = False
        self._last_error = None
        self._last_successful_data = None
        self._last_successful_time = 0

    def is_invalid_credentials_error(self, err: Exception) -> bool:
        """Public wrapper so setup code can classify first-refresh failures."""
        return self._is_invalid_credentials_error(err)

    def _get_cached_data_if_valid(self) -> dict[str, Any] | None:
        """Return cached auth data if within grace period, None otherwise.
        
        This allows Pro users to maintain access during temporary server outages.
        """
        if not self._last_successful_data or not self._last_successful_time:
            return None
        
        grace_elapsed = time.time() - self._last_successful_time
        grace_remaining = GRACE_PERIOD_SECONDS - grace_elapsed
        
        if grace_remaining > 0:
            _LOGGER.warning(
                "⏳ Server unreachable, using cached auth (%s remaining in grace period)",
                _format_grace_remaining(grace_remaining)
            )
            return self._last_successful_data
        
        _LOGGER.warning(
            "⚠️ Grace period expired (was %d hours), Pro access will be revoked",
            GRACE_PERIOD_HOURS
        )
        return None

    async def _async_request_reauth(self, reason: str) -> None:
        """Surface HA reauth UI when stored credentials or tokens are invalid."""
        if self._reauth_requested:
            return
        if not self.entry.data or CONF_USERNAME not in self.entry.data:
            return
        self._reauth_requested = True
        _LOGGER.warning("Requesting reauthentication for Ultra Card Connect: %s", reason)
        try:
            await self.hass.config_entries.async_start_reauth(self.entry)
        except Exception as err:
            _LOGGER.error("Failed to start reauthentication flow: %s", err)
            self._reauth_requested = False

    def _is_invalid_credentials_error(self, err: Exception) -> bool:
        """Return True when the error indicates revoked or invalid credentials."""
        # Bot protection blocks the request before WordPress checks anything, so
        # prompting for credentials would send the user chasing the wrong fault.
        if isinstance(err, BotChallengeError):
            return False
        message = str(err).lower()
        return (
            "invalid credentials" in message
            or "token expired or revoked" in message
            or "no jwt token available after authentication" in message
        )

    async def _async_update_data(self) -> dict[str, Any]:
        """Fetch data from API."""
        try:
            _LOGGER.debug("🔄 Starting data update cycle")

            # No credentials (set up without account) — report disconnected; user signs in later via Account tab
            if not self.entry.data or CONF_USERNAME not in self.entry.data:
                return {"authenticated": False}

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
                    except (BotChallengeError, SignInRateLimited):
                        # A full re-auth would hit the same wall.
                        raise
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

            # Token is kept in coordinator only; frontend uses integration proxy for API calls
            result = {
                "authenticated": True,
                "user_id": user_data.get("id"),
                "username": user_data.get("user_nicename") or user_data.get("name"),
                "email": user_data.get("user_email") or user_data.get("email"),
                "display_name": user_data.get("display_name") or user_data.get("name"),
                "connected_at": datetime.datetime.now(
                    datetime.timezone.utc
                ).isoformat(),
                "last_poll": datetime.datetime.now(
                    datetime.timezone.utc
                ).isoformat(),
                "subscription": {
                    "tier": subscription_data.get("tier", "free"),
                    "status": subscription_data.get("status", "expired"),
                    "expires": subscription_data.get("expires"),
                    "features": subscription_data.get("features", {}),
                },
            }
            
            # Reset failure bookkeeping on success
            self._auth_failure_count = 0
            self._reauth_requested = False
            self._last_error = None

            # Cache successful auth for grace period during future outages
            self._last_successful_data = result.copy()
            self._last_successful_time = time.time()
            
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
            # Check for grace period - maintain Pro access during temporary outages
            cached = self._get_cached_data_if_valid()
            if cached:
                return cached
            raise UpdateFailed(
                f"Connection failed: Unable to reach ultracard.io - {err}"
            ) from err
        except aiohttp.ClientSSLError as err:
            # SSL/TLS certificate issues
            self._auth_failure_count += 1
            _LOGGER.error(
                "❌ SSL/TLS error connecting to Ultra Card API: %s "
                "(Certificate validation failed - this may be a network proxy or firewall issue)",
                err
            )
            # Check for grace period - maintain Pro access during temporary outages
            cached = self._get_cached_data_if_valid()
            if cached:
                return cached
            raise UpdateFailed(f"SSL certificate error: {err}") from err
        except asyncio.TimeoutError:
            # Request timed out
            self._auth_failure_count += 1
            _LOGGER.error(
                "❌ Timeout connecting to Ultra Card API "
                "(Server did not respond within %d seconds - check your internet connection or try again later)",
                REQUEST_TIMEOUT
            )
            # Check for grace period - maintain Pro access during temporary outages
            cached = self._get_cached_data_if_valid()
            if cached:
                return cached
            raise UpdateFailed(
                f"Connection timed out after {REQUEST_TIMEOUT} seconds"
            )
        except aiohttp.ServerDisconnectedError as err:
            # Server closed connection unexpectedly
            self._auth_failure_count += 1
            _LOGGER.error(
                "❌ Server disconnected during request: %s "
                "(The server closed the connection - this may be temporary, try again)",
                err
            )
            # Check for grace period - maintain Pro access during temporary outages
            cached = self._get_cached_data_if_valid()
            if cached:
                return cached
            raise UpdateFailed(f"Server disconnected: {err}") from err
        except aiohttp.ClientResponseError as err:
            # HTTP error response
            self._auth_failure_count += 1
            _LOGGER.error(
                "❌ HTTP error from Ultra Card API: %s %s",
                err.status, err.message
            )
            # Use grace period for 5xx server errors (not 4xx client errors)
            if err.status >= 500:
                cached = self._get_cached_data_if_valid()
                if cached:
                    return cached
            raise UpdateFailed(f"HTTP {err.status}: {err.message}") from err
        except UpdateFailed as err:
            self._auth_failure_count += 1
            _LOGGER.error("Update failed: %s", err)

            # The fetch helpers wrap aiohttp connection errors in UpdateFailed,
            # so transient outages land here rather than in the aiohttp
            # branches above. Honour the grace period for anything that is not
            # a definitive "your credentials are wrong"; a bot-wall is an
            # upstream outage too and _last_error still records it.
            if not self._is_invalid_credentials_error(err):
                cached = self._get_cached_data_if_valid()
                if cached:
                    return cached

            # While sign-ins are blocked, keep the refresh token: it is the
            # only way back in that does not count against the limit.
            if self._auth_failure_count >= 3 and not isinstance(err, SignInRateLimited):
                _LOGGER.warning(
                    "Multiple auth failures (%d), clearing tokens for fresh start",
                    self._auth_failure_count,
                )
                self._session.clear_tokens()

            if self._is_invalid_credentials_error(err):
                await self._async_request_reauth(str(err))

            raise
        except Exception as err:
            self._auth_failure_count += 1
            _LOGGER.error(
                "Unexpected error communicating with Ultra Card API: %s (%s)",
                err,
                type(err).__name__,
            )

            if self._auth_failure_count >= 3:
                _LOGGER.warning(
                    "Multiple auth failures (%d), clearing tokens for fresh start",
                    self._auth_failure_count,
                )
                self._session.clear_tokens()

            raise UpdateFailed(f"{type(err).__name__}: {err}") from err

    def _raise_sign_in_blocked(self, wait_seconds: float) -> None:
        message = sign_in_wait_message(wait_seconds)
        self._last_error = message
        raise SignInRateLimited(message)

    async def _authenticate(self) -> None:
        """Authenticate with ultracard.io and get JWT token."""
        username = self.entry.data[CONF_USERNAME]
        password = self.entry.data[CONF_PASSWORD]

        url = f"{API_BASE_URL}{JWT_ENDPOINT}/token"

        wait = self._auth_state.sign_in_wait_seconds()
        if wait > 0:
            _LOGGER.debug("Skipping sign-in: ultracard.io asked us to wait %.0f s", wait)
            self._raise_sign_in_blocked(wait)

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
                    _LOGGER.debug("📥 Auth response length: %d bytes", len(response_text))
                    
                    # Challenge pages never reach WordPress. Retrying cannot
                    # succeed. Fail fast with a generic user-facing message.
                    if _is_bot_challenge(response, response_text):
                        _LOGGER.error(
                            "Cannot reach Ultra Card cloud during sign-in (HTTP %s).",
                            response.status,
                        )
                        self._last_error = BOT_CHALLENGE_MESSAGE
                        raise BotChallengeError(BOT_CHALLENGE_MESSAGE)

                    # Retrying inside the window would restart ultracard.io's
                    # sliding limit, so stop until Retry-After has passed.
                    if response.status == 429:
                        wait = self._auth_state.block_sign_in(response.headers.get("Retry-After"))
                        _LOGGER.warning(
                            "⏳ ultracard.io rate-limited sign-in; not retrying for %.0f seconds",
                            wait,
                        )
                        self._raise_sign_in_blocked(wait)
                    
                    # Handle various error statuses
                    if response.status == 401 or response.status == 403:
                        _LOGGER.error(
                            "Authentication failed: Invalid credentials (status %s)",
                            response.status,
                        )
                        self._last_error = "Invalid ultracard.io username or password."
                        await self._async_request_reauth(
                            f"Invalid credentials (HTTP {response.status})"
                        )
                        raise UpdateFailed(f"Invalid credentials: {response.status}")
                    
                    # Accept any 2xx status as success
                    if not (200 <= response.status < 300):
                        _LOGGER.error("❌ Authentication failed: %s - %s", response.status, response_text[:200])
                        self._last_error = (
                            f"ultracard.io returned HTTP {response.status} during sign-in."
                        )
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
                        self._last_error = (
                            "ultracard.io returned a non-JSON response to the sign-in "
                            "request. This usually means a CDN, WAF, or security plugin "
                            "is intercepting /wp-json/ before WordPress."
                        )
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
                    self._last_error = None
                    return

            except aiohttp.ClientError as err:
                _LOGGER.error("❌ Connection error during authentication (attempt %d/%d): %s", 
                             attempt + 1, MAX_RETRIES, err)
                self._last_error = f"Cannot reach ultracard.io: {err}"
                if attempt < MAX_RETRIES - 1:
                    await asyncio.sleep(RETRY_DELAY * (attempt + 1))
                else:
                    raise UpdateFailed(f"Cannot connect to ultracard.io: {err}") from err
            except UpdateFailed:
                raise
            except Exception as err:
                _LOGGER.error("❌ Unexpected error during authentication: %s", err)
                self._last_error = f"{type(err).__name__}: {err}"
                if attempt < MAX_RETRIES - 1:
                    await asyncio.sleep(RETRY_DELAY * (attempt + 1))
                else:
                    raise UpdateFailed(f"Authentication error: {err}") from err

        # Every attempt ended in `continue` (rate limiting or a retried error
        # status). Without this the loop falls out silently leaving no token and
        # no explanation of why.
        raise UpdateFailed(
            self._last_error
            or f"Authentication with ultracard.io failed after {MAX_RETRIES} attempts"
        )

    async def _refresh_jwt_token(self) -> None:
        """Refresh JWT token using refresh token."""
        if not self._refresh_token:
            _LOGGER.warning("No refresh token available, re-authenticating")
            await self._authenticate()
            return

        url = f"{API_BASE_URL}{JWT_ENDPOINT}/token/refresh"
        
        _LOGGER.debug("🔄 Refreshing JWT token at: %s", url)

        try:
            # JWT Auth Pro issues an opaque refresh token, not a JWT, and it must
            # be sent in the body only. Adding `Authorization: Bearer <refresh>`
            # makes the plugin try to decode it as a JWT and reject the whole
            # request with 403 jwt_auth_invalid_token ("Wrong number of segments").
            async with self.session.post(
                url,
                json={"refresh_token": self._refresh_token},
                headers=_get_headers(),
                timeout=_get_timeout(),
            ) as response:
                response_text = await response.text()
                _LOGGER.debug("📥 Refresh response status: %s", response.status)
                _LOGGER.debug("📥 Refresh response length: %d bytes", len(response_text))

                if _is_bot_challenge(response, response_text):
                    _LOGGER.error(
                        "Cannot reach Ultra Card cloud during token refresh (HTTP %s).",
                        response.status,
                    )
                    self._last_error = BOT_CHALLENGE_MESSAGE
                    raise BotChallengeError(BOT_CHALLENGE_MESSAGE)

                # A full sign-in here would hit the same limit. Keep the
                # refresh token and try again on a later cycle.
                if response.status == 429:
                    wait = self._auth_state.block_sign_in(response.headers.get("Retry-After"))
                    _LOGGER.warning(
                        "⏳ ultracard.io rate-limited token refresh; not retrying for %.0f seconds",
                        wait,
                    )
                    self._raise_sign_in_blocked(wait)
                
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

                    self._last_error = None
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

        # WordPress only includes sensitive fields like email for authenticated
        # self-requests when the profile is fetched with context=edit.
        url = f"{API_BASE_URL}/wp/v2/users/me?context=edit"
        
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
                        retry_after = _retry_after_seconds(response)
                        _LOGGER.warning("⏳ Rate limited, waiting %s seconds", retry_after)
                        await asyncio.sleep(retry_after)
                        continue
                    
                    # Handle token expiration/revocation (JWT Auth Pro auto-revoke feature)
                    if response.status == 401 or response.status == 403:
                        _LOGGER.warning(
                            "Token rejected (status %s), clearing and will re-auth",
                            response.status,
                        )
                        self._jwt_token = None
                        self._refresh_token = None
                        await self._async_request_reauth(
                            f"Token expired or revoked (HTTP {response.status})"
                        )
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
                        retry_after = _retry_after_seconds(response)
                        _LOGGER.warning("⏳ Rate limited, waiting %s seconds", retry_after)
                        await asyncio.sleep(retry_after)
                        continue
                    
                    # Handle token expiration/revocation
                    if response.status == 401 or response.status == 403:
                        _LOGGER.warning("Token rejected during subscription fetch")
                        self._jwt_token = None
                        self._refresh_token = None
                        await self._async_request_reauth(
                            f"Token expired or revoked (HTTP {response.status})"
                        )
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
            "bot_challenge": False,
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
                body = await resp.text()
                if _is_bot_challenge(resp, body):
                    results["bot_challenge"] = True
                    results["errors"].append(BOT_CHALLENGE_MESSAGE)
                elif resp.status < 500:
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
        if results["ssl"] and not results["bot_challenge"]:
            try:
                url = f"{API_BASE_URL}{JWT_ENDPOINT}"
                async with self.session.get(
                    url,
                    timeout=aiohttp.ClientTimeout(total=10, connect=5),
                    headers={"User-Agent": USER_AGENT},
                ) as resp:
                    body = await resp.text()
                    # JWT endpoint should return 405 for GET (method not allowed) or 200
                    # Either indicates the API is reachable
                    if _is_bot_challenge(resp, body):
                        results["api"] = False
                        results["bot_challenge"] = True
                        results["errors"].append(BOT_CHALLENGE_MESSAGE)
                    elif resp.status in (200, 405, 401):
                        results["api"] = True
                    else:
                        results["api"] = False
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
            "Connectivity test results - DNS: %s, SSL: %s, API: %s, Auth: %s",
            results["dns"], results["ssl"], results["api"], results["auth"],
        )
        if results["errors"]:
            _LOGGER.warning("⚠️ Connectivity test errors: %s", results["errors"])
        
        return results

    def get_redacted_diagnostics(self) -> dict[str, Any]:
        """Build a redacted diagnostics snapshot (never includes tokens/passwords)."""
        data = self.data or {}
        subscription = data.get("subscription") or {}
        now = int(time.time())
        token_expires_at = int(self._token_expires_at or 0)
        seconds_until_expiry = token_expires_at - now if token_expires_at else None
        last_success_age = None
        if self._last_successful_time:
            last_success_age = round(time.time() - self._last_successful_time, 1)

        grace_remaining = None
        if self._last_successful_time:
            remaining = GRACE_PERIOD_SECONDS - (time.time() - self._last_successful_time)
            if remaining > 0:
                grace_remaining = round(remaining, 1)

        email = data.get("email") or ""
        redacted_email = ""
        if isinstance(email, str) and "@" in email:
            local, _, domain = email.partition("@")
            redacted_email = f"{local[:1]}***@{domain}" if local else f"***@{domain}"

        return {
            "authenticated": bool(data.get("authenticated")),
            "username": data.get("username"),
            "email_redacted": redacted_email,
            "subscription_tier": subscription.get("tier") or data.get("subscription_tier"),
            "subscription_status": subscription.get("status") or data.get("subscription_status"),
            "needs_reauth": bool(self._reauth_requested),
            "last_error": self._last_error,
            "last_update_success": bool(self.last_update_success),
            "last_poll": data.get("last_poll"),
            "connected_at": data.get("connected_at"),
            "token_present": bool(self._jwt_token),
            "refresh_token_present": bool(self._refresh_token),
            "token_expires_in_seconds": seconds_until_expiry,
            "auth_failure_count": int(self._auth_failure_count or 0),
            "sign_in_blocked_for_seconds": round(self._auth_state.sign_in_wait_seconds(), 1),
            "last_successful_age_seconds": last_success_age,
            "grace_remaining_seconds": grace_remaining,
            "has_stored_credentials": bool(
                self.entry.data and CONF_USERNAME in self.entry.data
            ),
        }

    async def async_logout(self) -> None:
        """Logout and invalidate tokens."""
        _LOGGER.debug("🚪 Logging out from Ultra Card Connect")
        
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

        # Clear local tokens, the stale reauth flag / last error, and the
        # grace-period cache (otherwise Pro access could survive a sign-out).
        self.reset_auth_state()
        _LOGGER.debug("✅ Local auth state cleared")
