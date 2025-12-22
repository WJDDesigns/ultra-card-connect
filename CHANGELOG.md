# Changelog

All notable changes to Ultra Card Pro Cloud will be documented in this file.

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
