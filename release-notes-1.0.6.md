# Release 1.0.6

## [1.0.6] - 2025-02-25

### Added
- **New Ultra Card sidebar** – All Ultra Card settings (Dashboard, Favorites, Presets, Colors, Variables, Templates, Pro, About) are now in a dedicated sidebar panel. **Pro users:** update this integration to see the new sidebar. **Non-Pro users:** install the Ultra Card Pro Cloud integration to access the sidebar and manage Favorites, Presets, Colors, Variables, and more.
- **Grace period for Pro access** – When the auth server is unreachable, Pro access is maintained for 24 hours using cached auth data so temporary outages do not revoke access.
- **JWT expiry parsing** – Token expiry is read from the JWT payload for accurate refresh timing.

### Improved
- Panel loads from the Ultra Card frontend (HACS) so the sidebar works for everyone; coordinator retry and timeout behavior for more reliable auth and subscription updates.
