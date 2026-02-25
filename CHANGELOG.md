# Changelog

All notable changes to Ultra Card Connect will be documented in this file.

## [1.0.9] - 2026-02-25

### Changed
- **Renamed to Ultra Card Connect** — The integration was previously called "Ultra Card Pro Cloud". The new name better reflects that this integration is required for **all Ultra Card users**, not just Pro subscribers.
- **Required for all users** — All Ultra Card users now need this integration installed to access the Ultra Card Hub sidebar (Favorites, Presets, Colors, Variables, Templates). Pro subscribers continue to get their subscription synced across all devices automatically.
- **Updated HACS display name** — Now appears as "Ultra Card Connect" in HACS search.
- **Updated setup screen** — The Home Assistant integration setup flow now clearly states the integration is for all users.
- **Updated README and info panel** — Documentation rewritten to reflect the new name, new purpose, and clear instructions for both free and Pro users.
- **Updated GitHub repository URL** — Repository moved to `https://github.com/WJDDesigns/ultra-card-connect`.

### Notes
- **No breaking changes** — The internal domain (`ultra_card_pro_cloud`) and sensor entity (`sensor.ultra_card_pro_cloud_authentication_status`) are unchanged. Existing installs continue to work without any action required.
- **Existing HACS installs** — Users who have the integration installed will receive this as a normal HACS update notification.

## [1.0.8] - 2026-02-25

### Fixed
- **Sidebar panel now actually loads** – v1.0.7 registered the static path using HA's deprecated synchronous API which silently fails on HA 2024.x+. Now uses `async_register_static_paths` (the correct modern API), with a fallback to the legacy method for older HA versions. Users who saw the "Unable to load custom panel" error after updating to v1.0.7 should update to this version.

## [1.0.7] - 2026-02-25

### Fixed
- **Sidebar panel now loads reliably for all users** – The `ultra-card-panel.js` file is now bundled directly inside this integration instead of being loaded from the Ultra Card HACS frontend card path (`/hacsfiles/Ultra-Card/`). Previously, users who installed the Pro Cloud integration without the Ultra Card card also installed via HACS would see *"Unable to load custom panel"* on page load. The integration is now fully self-contained.

## [1.0.6] - 2025-02-25

### Added
- **New Ultra Card sidebar** – All Ultra Card settings (Dashboard, Favorites, Presets, Colors, Variables, Templates, Pro, About) are now in a dedicated sidebar panel. **Pro users:** update this integration to see the new sidebar. **Non-Pro users:** install the Ultra Card Pro Cloud integration to access the sidebar and manage Favorites, Presets, Colors, Variables, and more.
- **Grace period for Pro access** – When the auth server is unreachable, Pro access is maintained for 24 hours using cached auth data so temporary outages do not revoke access.
- **JWT expiry parsing** – Token expiry is read from the JWT payload for accurate refresh timing.

### Improved
- Panel loads from the Ultra Card frontend (HACS) so the sidebar works for everyone; coordinator retry and timeout behavior for more reliable auth and subscription updates.

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
