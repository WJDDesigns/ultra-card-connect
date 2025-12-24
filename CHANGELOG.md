# Changelog

All notable changes to Ultra Card Pro Cloud will be documented in this file.

## [1.0.5] - 2024-12-24

### Fixed
- **Critical: Removed duplicate Content-Type header** - aiohttp sets this automatically with `json=`, having it explicitly caused some servers/CDNs to reject requests
- **Critical: Fixed asyncio.CancelledError handling** - Was incorrectly catching and converting to CannotConnect, preventing proper task cancellation during HA restarts
- **Reduced retry count from 3 to 2** - Reduces traffic load when connections fail (was causing 3x traffic spikes)

### Note
If you experienced connection issues with v1.0.3/v1.0.4 but older versions worked, this release should fix it.

## [1.0.4] - 2024-12-23

### Fixed
- **Config Flow Connection Issues**: Updated `config_flow.py` with the same connection improvements as coordinator - was still using old 15s timeout and missing User-Agent headers
- **asyncio.CancelledError Handling**: Added specific handling for cancelled/interrupted requests during setup
- Users experiencing timeouts during initial setup should now have more reliable connections

### Improved
- Config flow now uses 30s timeout (was 15s) with 10s connect timeout
- Added User-Agent headers to config flow requests
- Better error messages for DNS, SSL, timeout, and connection issues during setup

## [1.0.3] - 2024-12-22

### Improved
- **Better Connection Error Handling**: Added specific exception handling for different connection error types (DNS, SSL/TLS, timeout, server disconnection) with helpful error messages to aid troubleshooting
- **User-Agent Headers**: All API requests now include proper User-Agent headers to prevent WAF/CDN blocking
- **Increased Timeouts**: Extended request timeout from 15s to 30s with a separate 10s connection timeout for more reliable connections on slower networks
- **Connectivity Diagnostics**: Added `async_test_connectivity()` method for diagnosing connection issues (tests DNS, SSL, API, and auth separately)
- **Enhanced Error Logging**: Error responses now include `error_type` field for easier issue categorization

### Fixed
- Intermittent connection failures where users could reach ultracard.io in browser but not through Home Assistant

## [1.0.2] - 2024-12-15

### Initial Release
- JWT authentication with ultracard.io
- Subscription status tracking
- Token refresh and auto-renewal
- Home Assistant sensor integration
