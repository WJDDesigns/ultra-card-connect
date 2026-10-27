# Changelog

All notable changes to Ultra Card Connect will be documented in this file.

## [Unreleased]

## [1.11.1] - 2026-10-27

Ready for the Home Assistant Marketplace, which replaces HACS in Home Assistant 2026.11. Nothing changes in how Connect works, and there is nothing to reconfigure. Existing HACS installs move to the Marketplace on their own when you update Home Assistant.

**After updating:** restart Home Assistant.

### 🔧 Improvements

- **Marketplace install link** - The README has a one-click "Open in Marketplace" button for Home Assistant 2026.11 and newer, next to the HACS button for older versions

## [1.11.0] - 2026-10-26

Brings the bundled Hub up to Ultra Card 3.14.2, released today. The Hub was still on 3.13.3, so this also brings the Hub changes from 3.14.0 and 3.14.1. Nothing needs to be reconfigured.

**After updating:** restart Home Assistant.

### 🔧 Improvements

- **Updated the bundled Hub to Ultra Card 3.14.2** - The Hub's Variables tab gets entity search (the Entity field searches by entity ID or name as you type) and groups for global variables, with filter chips to show one group at a time
- **Lighter on ultracard.io** - From Ultra Card 3.14.1: the Hub's Account tab reuses billing details for 10 minutes and the themes catalog for an hour instead of asking ultracard.io every time

## [1.10.0] - 2026-10-10

Adds storage for Ultra Card's new Linked Row module (Ultra Card 3.14.0-beta2 and later). The bundled Hub stays on Ultra Card 3.13.3.

**After updating:** restart Home Assistant.

### 🚀 New Features

- **Linked rows for Ultra Card's Linked Row module** - A new endpoint, `/api/ultra_card_pro_cloud/linked_rows`, stores shared blocks of Ultra Card modules in Home Assistant so that editing a Linked Row once updates it on every dashboard, device and user. Any signed-in user can read them; only admins can create, change or delete them, the same as saving a dashboard. Each row has a revision number, so a save based on an old copy is refused (HTTP 409 with the current row) instead of overwriting newer work. `GET ?id=` returns one row; the plain `GET` lists the library without modules so dashboards never download every row. Rows are limited to 256 KB each and 200 in total. The status sensor's `capabilities` now include `linked_rows`.

## [1.9.0] - 2026-10-10

Fewer requests to ultracard.io and fewer false "sign in again" prompts. The bundled Hub is updated to Ultra Card 3.13.3.

**After updating:** restart Home Assistant.

### 🐛 Fixes

- **No more "Reauthenticate" repair when only the session expired** - When ultracard.io refuses the session token, Connect now renews it and carries on. It asks you to sign in again only when ultracard.io rejects the password itself, and clears the repair once sign-in works.
- **A typo in the Hub no longer signs you out** - The Hub checks a new username and password before saving them, and answers straight away instead of after 15 seconds.
- **Clearer error when ultracard.io's bot protection blocks sign-in** - Setup and reauth used to report this as a wrong password.

### 🔧 Improvements

- **Much lighter on ultracard.io** - Your profile is read once a day instead of every 55 minutes, setup and reauth sign in once instead of twice, and a long outage no longer throws away working sign-ins.
- **Reauth shows your username** and there is a new **Reconfigure** option to switch accounts.
- **Hub requests renew an expiring session** instead of failing until the next poll.
- **Diagnostics no longer include your username or email.**
- The status sensor's name and states are translatable, its state icons show, and its changing attributes no longer write a history row every poll.
- Creating an account from the Hub is limited to admins and to once a minute.
- **Bundled Hub updated to Ultra Card 3.13.3.**

## [1.8.2] - 2026-10-09

A stable release that brings the bundled Hub up to Ultra Card 3.13.2. Nothing needs to be reconfigured.

**After updating:** restart Home Assistant.

### 🔧 Improvements

- **Updated the bundled Hub to Ultra Card 3.13.2** - The sidebar Hub is now in Simplified Chinese when Home Assistant is set to it, and the FreeSpace card on Hub → Home links to the guide at [ultracard.io/freespace](https://ultracard.io/freespace/)

## [1.8.1] - 2026-10-09

A stable release that brings the bundled Hub up to Ultra Card 3.13.1 and fixes how Connect signs in to ultracard.io. During the October 8 ultracard.io outage, some installs signed in over and over instead of waiting for the site to recover. 1.8.1 keeps your sign-in across retries and respects ultracard.io's request to slow down. Nothing needs to be reconfigured.

**After updating:** restart Home Assistant.

### 🔧 Improvements

- **Updated the bundled Hub to Ultra Card 3.13.1** - The sidebar Hub now matches the current stable Ultra Card, including Layout width on Hub → Home and the FreeSpace status card

### 🐛 Bug Fixes

- **Fixed Connect signing in again on every startup retry** - If ultracard.io was slow or unavailable while Connect started, each automatic retry signed in from scratch, roughly every minute, until the site recovered. Connect now keeps its sign-in across retries and reloads and only signs in again when the token is gone or has expired
- **Connect now waits out ultracard.io's sign-in limit** - When ultracard.io asks Connect to slow down, Connect waits the full time it asks for (usually 10 minutes) instead of trying again after 30 seconds, which kept the limit from ever clearing. The Hub and the setup dialog now say why sign-in is paused instead of reporting a connection failure

## [1.8.0] - 2026-09-09

The stable 1.8.0 release. Connect bundles the Ultra Card 3.10.0 Hub with a redesigned look on every tab, adds the endpoint Ultra Card 3.10 uses to keep your global theme in sync, and closes a set of security and reliability gaps found in a full audit of the integration. Your existing sign-in carries over; nothing needs to be reconfigured.

**After updating:** restart Home Assistant. You no longer need to hard refresh your browser for the Hub to update; from this release on Connect handles that for you.

### 🚀 New Features

- **Added the redesigned Ultra Card Hub** - The bundled sidebar panel is now Ultra Card 3.10.0 with a refreshed look on every tab: a branded header with your account chip, a new Home page with quick actions and the latest release notes, consistent cards and buttons across Favorites, Presets, Themes, Colors, Variables, Templates, Account and Docs, and a tab strip you can drive with the keyboard. Layouts adapt properly on phones and narrow sidebars
- **Added global theme sync** - Ultra Card 3.10 can now store your global theme default in Connect, so every browser and every user on this Home Assistant sees the same look. Any signed-in user reads it; only Home Assistant admins can change it. Ultra Card detects the new `theme_settings` capability automatically

### 🔧 Improvements

- **Hub updates load without a hard refresh** - The panel URL now carries a content hash, so browsers stop serving a month-old Hub after an update. The panel also loads as a single module; the duplicate classic-script load that always failed in the browser console is gone
- **Signing in from the Hub is more forgiving** - If Connect failed to start (for example Home Assistant booted before your network was up), signing in now reloads the integration on the spot instead of waiting 15 seconds and blaming your password. First-time sign-in tells you when ultracard.io cannot be reached rather than reporting bad credentials
- **Signing out is complete** - Sign-out now revokes the token on ultracard.io, clears the cached Pro status, and dismisses any pending "Reauthenticate" repair
- **Clearer status in the Hub** - Diagnostics tiles stay neutral until a check has actually run, billing errors say what went wrong in plain language, the Colors tab tells you whether colours are stored in Home Assistant or only in this browser, and sync times read as "5m ago" instead of raw timestamps
- **Smart Cards run as you** - Assist requests from Smart Cards now carry the requesting Home Assistant user, so exposure rules and the activity log reflect who asked. Prompts are capped at 4000 characters and the free daily counter can no longer be undercounted by simultaneous requests
- **Bundled documentation refreshed** - The Docs tab now carries the latest 80 pages from the Ultra Card wiki, including the 3.10 Themes and Ultra Dashboard guides
- **Kept up with Home Assistant** - Connect now declares its configuration schema, passes the config entry to the update coordinator explicitly, and reads files off the event loop. Minimum Home Assistant version is now 2024.11.0

### 🐛 Bug Fixes

- **Fixed the 24-hour grace period never kicking in** - A DNS hiccup or a brief ultracard.io outage revoked Pro immediately instead of keeping your cached access for 24 hours as documented. Connection errors were being re-wrapped before the grace-period check ran
- **Fixed a boot-time outage permanently failing the integration** - If ultracard.io was unreachable when Home Assistant started, Connect stayed failed until you reloaded it by hand. Transient failures now retry automatically, and wrong credentials open the reauthenticate prompt instead
- **Fixed the cloud proxy accepting paths that escaped its allowlist** - A URL containing `..` segments (including percent-encoded ones) passed the check but was normalised by the HTTP client before sending, which could reach other WordPress endpoints with the shared token. The proxy now parses and canonicalises every URL, and requires the exact ultracard.io scheme, host and port
- **Fixed the proxy exposing token endpoints to the browser** - `/jwt-auth/v1/*` could previously be proxied, which would hand a fresh token to the browser or let one admin revoke the shared token for everyone. Sign-in, refresh and revoke are now handled only by the integration
- **Fixed tokens appearing in debug logs** - Sign-in and refresh response bodies (which contain the JWT and refresh token) are no longer written to the log at debug level
- **Fixed `Retry-After` handling** - A date-formatted header no longer crashes the request, and a very large value can no longer stall Connect for hours
- **Fixed startup logs reporting `v1.0.0`** - The version is now read from `manifest.json` everywhere, so logs and diagnostics agree
- **Fixed the Presets tab showing "Showing 0 of 0 presets" while still loading**, and centred the loading spinner
- **Fixed the active Hub tab scrolling out of view on phones** when opening a tab from a link or the account chip
- **Fixed saving favourite colours failing on unusual `order` values**, and capped the list size
- **Fixed account registration accepting malformed email addresses** before relaying them to ultracard.io
- **Fixed cloud outage messages naming host and CDN internals** - Users now see a clear, generic message and are asked to retry

## [1.7.1] - 2026-08-16

### Fixed
- **Token refresh now works with JWT Auth Pro** - JWT Auth Pro issues an opaque refresh token rather than a JWT, and it must be sent in the request body only. Connect was also sending it as an `Authorization: Bearer` header, which made the plugin try to decode it as a JWT and reject the whole request with `403 jwt_auth_invalid_token` ("Wrong number of segments"). Every refresh failed and silently fell back to a full re-login.
- **Temporary cloud outages are no longer blamed on your password** - When Ultra Card cloud is briefly unreachable, Connect previously retried and then reported authentication failed. It now fails fast, asks you to try again, and does not prompt you to re-enter a password that was never wrong.
- **Sign-in no longer fails silently** - If every authentication attempt was consumed by a retry (rate limiting, or a retried error status), the retry loop fell through and returned with no token and no error raised. The loop can no longer exit silently.
- **Login failures distinguish bad credentials from an upstream outage** - `/api/ultra_card_pro_cloud/login` previously answered every failure with "Authentication failed — check your credentials". Upstream outages now return 502 instead of 401 so they are not mistaken for a wrong password.

### Added
- **Cloud reachability diagnostics** - Connectivity checks now report when Ultra Card cloud is temporarily unreachable, and the coordinator exposes a redacted `last_error` for the Hub Account tab.

### Notes
- After updating, **restart Home Assistant**.

## [1.7.0] - 2026-08-11

### Changed
- **Bundled Hub panel updated to Ultra Card 3.7.0** - Includes Hub My Presets authoring (submit, edit, review status), new preset categories (Layout, Content, Data, Controls, Inputs, Media), required featured image on preset submit, favorites sync fixes, native card discovery, the Add Module gallery, appliance and layout modules, household PRO modules, and the full privacy, performance, and accessibility work from the 3.7.0 betas.
- **Panel bundle refreshed** - Synced `ultra-card-panel.js` and chunk assets from Ultra Card 3.7.0 (`511f89a4`) with an updated `panel-assets.json` SHA-256 manifest.

### Notes
- After updating, **restart Home Assistant** and hard refresh your browser (Ctrl+Shift+R / Cmd+Shift+R) so the new Hub panel loads.
- **Ultra Card 3.7.0 or newer** is recommended alongside this release so Hub preset authoring, category filters, and the rest of the 3.7.0 Hub features match what Connect serves.

## [1.6.0] - 2026-07-27

### Added
- **Version and capability handshake** - The authentication sensor now reports the integration version and a list of supported features (proxy, media upload, Smart Cards, favorite colors, diagnostics). Ultra Card reads this to warn you in Card Health when Connect needs updating, and to show clear "update Connect" messages instead of failing silently.
- **Diagnostics support** - New `/api/ultra_card_pro_cloud/diagnostics` endpoint plus native Home Assistant diagnostics (Settings > Integrations > Ultra Card Connect > Download diagnostics). Reports include auth state, connectivity checks, and panel bundle info, with passwords and tokens always redacted. This powers the new Diagnostics view in the Hub Account tab.
- **Panel bundle verification** - The bundled Hub panel now ships with a `panel-assets.json` manifest containing SHA-256 hashes of every file. A new `panel:check` step in the build, CI, and release workflows fails fast if the bundled panel ever drifts from a real Ultra Card build.

### Changed
- **Bundled Hub panel updated to Ultra Card 3.6.0** - Includes the redesigned single-row Hub navigation, the reorganized Account tab (Overview, Pro Tools, Diagnostics), in-panel billing management, and all fixes from the 3.6.0 betas.
- **Faster, safer deploys** - The build and deploy scripts now use incremental rsync-based syncing, prune stale chunk files automatically, and validate the panel bundle before packaging a release.
- **Naming cleanup** - Docs, README, and bundled wiki pages now consistently say "Ultra Card Connect" instead of the old "Ultra Card Pro Cloud" name.

### Notes
- After updating, **restart Home Assistant** and hard refresh your browser (Ctrl+Shift+R / Cmd+Shift+R) so the new panel and API endpoints load.
- Ultra Card 3.6.0 or newer is recommended alongside this release so the version handshake and diagnostics work end to end.

## [1.5.0] - 2026-05-24

### Added
- **Shared helper utilities for auth and payload handling** — Added new helper modules for JWT/auth normalization and safer proxy/media request handling across the integration endpoints.
- **Project quality tooling** — Added CI/test scaffolding and development baseline files to support validation and future regression coverage.

### Changed
- **Bundled Hub panel refreshed** — Updated bundled `ultra-card-panel.js` and chunk assets to include the latest Hub fixes and navigation updates from today.
- **Release pipeline hardening** — Updated release workflow and build/deploy guidance to enforce version checks, docs bundle checks, and release artifact packaging consistency.
- **Documentation cleanup** — Consolidated legacy deployment/setup notes into the current docs structure and removed outdated duplicate guides.

### Fixed
- **Coordinator/auth flow reliability** — Refined config/coordinator/sensor wiring and auth state propagation to reduce setup/auth edge-case failures.
- **Proxy/media handling resilience** — Improved payload parsing and helper-driven request handling paths used by the integration API endpoints.

## [1.4.0] - 2026-04-02

### Added
- **Media upload endpoint** — New dedicated endpoint (`/api/ultra_card_pro_cloud/media_upload`) for forwarding multipart photo uploads to ultracard.io. The JSON-based proxy cannot carry binary FormData, so photo uploads now go through this endpoint which adds the integration token server-side and forwards the file using reliable `requests`-based multipart POST (avoids `aiohttp` + HA session issues with WordPress `$_FILES`).
- **Base64 media upload via proxy** — The existing JSON proxy endpoint now also supports base64-encoded media uploads (`__media_upload_b64` payload) as a fallback for environments where the multipart endpoint isn't available.

### Fixed
- **Safe upload filenames** — Non-ASCII characters in uploaded filenames are now sanitized to prevent REST 400 errors on some WordPress setups.
- **Improved proxy payload extraction** — The proxy now correctly handles deeply nested body wrappers from HA HTTP/WebSocket requests (string JSON, nested `body` keys, `data` fallbacks) with up to 4 levels of unwrapping.

## [1.3.0] - 2026-03-15

### Fixed
- **Hub sidebar panel now shows the correct version** — The integration was shipping only `ultra-card-panel.js` without its lazy-load chunk files (`uc-*.js`). The panel's tab modules (Dashboard, Favorites, Presets, Colors, Variables, Templates) are loaded on demand from these chunks — without them the sidebar showed stale versions (e.g. beta11) and some tabs failed to load. All 174 chunk files are now bundled in the integration's `www/` folder alongside the panel
- **Panel chunk files kept in sync** — The `sync:panel` build script in the Ultra Card repo now copies all chunk files to the integration (previously only the panel bundle was synced), ensuring future releases stay in sync automatically

### Changed
- **Bundled Hub panel updated to Ultra Card beta16** — Includes all fixes from beta13 through beta16: lazy module loading system, correct HACS release asset delivery, module chunk file packaging, and panel version consistency

### Notes
- After updating this integration via HACS, **restart Home Assistant** then do a hard reload in your browser (Ctrl+Shift+R / Cmd+Shift+R) to clear the cached panel
- If cards on dashboards are blank, also update the **Ultra Card** frontend component via HACS (separate from this integration)

## [1.2.1] - 2026-03-15

### Fixed
- **Setup failure now surfaces correctly** — When coordinator/sensor setup fails (bad credentials, network error), `async_setup_entry` now returns `False` instead of silently swallowing the error and returning `True`. Home Assistant will correctly mark the config entry as failed and prompt the user to fix credentials or retry from the integration config page.
- **Better error logging on setup failure** — Changed `_LOGGER.error` to `_LOGGER.exception` so the full Python traceback is captured in the HA logs, making diagnosis significantly easier.

### Changed
- **Bundled Hub panel updated to Ultra Card beta13** — The sidebar panel JS has been rebuilt from the latest Ultra Card release. This includes the new lazy module loading system (panel chunk is now ~4.4 MB vs ~7.8 MB previously), the async config validation pipeline, and all bug fixes from beta9 through beta13 (action confirmation dialog fix, logic service console spam removed, loading flash eliminated, dashboard scanner improvements).

## [1.1.2] - 2026-03-13

### Fixed
- **Panel scrolling** — `:host` now uses `height: 100dvh` instead of `height: 100%`. When HA's panel host has no explicit height the old value collapsed to zero, making only the visible portion of the Hub accessible with no way to scroll. Now works correctly on all devices including mobile.
- **Snapshot "No Ultra Cards found"** — Fixed two causes:
  - `getCurrentDashboardPath()` now correctly returns `null` when called from the sidebar panel (URL isn't a `/lovelace/` path). Previously it returned `'default'` which caused the scanner to query the wrong dashboard and find 0 cards even when 53 existed.
  - `getDashboardStats()` now also counts cards inside modern **sections-layout** views (`view.sections[n].cards`). Only `view.cards` was checked before, so all cards on sections-layout dashboards returned a count of 0.
- **Cross-device color sync** — `_haLoaded` is now only latched after a **successful** API response. Previously it was set before the async load completed, so a transient error (slow connection, HA still booting) permanently blocked any retry for the session. The load now retries on the next `setHass()` call for any non-404/non-auth error.

## [1.1.1] - 2026-03-12

### Changed
- **Ultra Card Hub panel updated** — The sidebar panel JavaScript bundled in this integration has been updated to the latest build from the Ultra Card repo. This includes layout and mobile fixes (panel no longer wider than screen on mobile, menu tabs no longer overflow).
- **README: why the panel doesn’t update with the card** — Added a short section explaining that the Ultra Card Hub is served by this integration, not by the HACS “Ultra Card” frontend. Updating only the card updates dashboards and the card editor; **updating this integration** is required to get the latest Hub panel and favorite colors API behavior.

### Notes
- **Favorite colors** — Persistence across devices and after logout uses this integration’s API (`/api/ultra_card_pro_cloud/favorite_colors`). No backend changes in this release; the frontend (Ultra Card) now syncs to this API from every entry point. If you see a 404 in the console, ensure this integration is installed and updated.
- **If the Hub still looks old after updating** — Hard refresh the browser (Ctrl+Shift+R / Cmd+Shift+R) or restart Home Assistant so the new panel bundle is loaded.

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
