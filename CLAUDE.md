# Ultra Card Connect (ultra_card_pro_cloud)

Home Assistant custom integration for Ultra Card Connect: Pro sign-in against ultracard.io and the
Ultra Card Hub sidebar panel. Repo: https://github.com/WJDDesigns/ultra-card-connect

## Naming

| Name | Meaning |
|------|---------|
| **Ultra Card Connect** | HACS / integration display name |
| `ultra_card_pro_cloud` | HA domain and sensor entity (kept after the rename; do not change) |
| **Ultra Card Hub** | Sidebar panel served from `custom_components/ultra_card_pro_cloud/www/` |
| **Ultra Card Pro** | Paid tier on ultracard.io |

## Layout

- `custom_components/ultra_card_pro_cloud/`: the integration (Python). Auth state lives in `auth_state.py`.
- `custom_components/ultra_card_pro_cloud/www/`: built Hub panel (`ultra-card-panel.js`, `uc-*.js` chunks,
  `panel-assets.json` SHA-256 manifest) and `docs/` (synced from the Ultra Card wiki). These are generated;
  never hand-edit them.
- `tests/`: pytest unit tests. `scripts/`: version, docs and panel checks.

## Commands

```bash
pip install -r requirements-dev.txt          # pytest, ruff
pytest tests/ -q                             # unit tests
ruff check custom_components/ultra_card_pro_cloud/
npm run version:check                        # version.py, manifest.json, package.json agree
node build.js                                # validate Python/JSON, write dist/
npm run panel:check                          # Hub panel hashes match panel-assets.json
npm run docs:check                           # docs bundle present and well-formed
```

No npm dependencies; scripts use Node built-ins (Node 20+, Python 3.11+). CI (`.github/workflows/ci.yml`)
runs all of the above plus hassfest and HACS validation on every PR. Run them before pushing.

## ultracard.io server limits (read before touching auth, polling or proxy code)

Since 2026-10-09 the site rate-limits sign-ins and caches the signed-out preset feed:

- `POST /wp-json/jwt-auth/v1/token`: 20 per IP per 10 minutes. The 21st returns `429`
  (`too_many_sign_ins`) with `Retry-After`. The window is fixed and refused attempts are not counted.
- Signed-out `GET /wp-json/wp/v2/presets_dir_ltg` is cached for 10 minutes (`X-WJD-Cache: HIT|MISS`).

Why: on 2026-10-08, 1.8.0 raised `ConfigEntryNotReady` when `users/me` failed, so every setup retry built a
new coordinator with no token and signed in again (token calls went from ~570/day to 3,000). Normal load is
~680 installs, each making one `users/me` and one `/subscription` call per 55-minute coordinator cycle.
1.8.1 keeps tokens and the sign-in block in `auth_state.py`, shared across retries.

Rules:

- Route every new auth path through `auth_state.py`.
- Reuse the JWT until near expiry and refresh with `/token/refresh`. Never sign in per request or per proxy call.
- Treat `429` from `/token` as final for `Retry-After` seconds; do not retry inside that window.
- `users/me?context=edit` costs about 1 s of PHP per call. Keep it off any frequent path.

## Versioning and release

1. Edit `version.py` (single source of truth), then `npm run version:update` and `npm run version:check`.
2. Add a `## [X.Y.Z]` section to `CHANGELOG.md` (the release workflow uses it as the release notes).
3. Push tag `vX.Y.Z`. `.github/workflows/release.yml` runs HACS, hassfest, version/docs/panel checks, checks
   the tag matches `manifest.json`, builds the zip and creates the GitHub release with the built-in
   `GITHUB_TOKEN`. No other secrets are needed. Ask Wayne before pushing a tag.

## Bundling the Hub panel from Ultra Card

The panel is built in the Ultra Card repo (https://github.com/WJDDesigns/Ultra-Card) and copied here:

```bash
# in an Ultra Card checkout
npm ci && npm run build
INTEGRATION_WWW_PATH=<this repo>/custom_components/ultra_card_pro_cloud/www npm run sync:panel
# back here
npm run panel:check
```

`sync:panel` copies `ultra-card-panel.js` and all `uc-*.js` chunks, prunes stale ones and rewrites
`panel-assets.json`. Build from a clean production Ultra Card build: CI warns if `127.0.0.1:7242` debug
telemetry is in `www/`. A "bundle Ultra Card X.Y.Z Hub" release does this, then bumps the Connect version.

## Docs bundle

`npm run docs:sync` clones `https://github.com/WJDDesigns/Ultra-Card.wiki.git` (public) into `www/docs/`.
Run it before a release or after wiki edits. `DOCS_STRICT=1 npm run docs:check` fails if the bundle is older
than the wiki.

## Local deploy (Wayne's Mac only)

`npm run deploy` / `npm run build:deploy` rsyncs the integration onto Wayne's Home Assistant over SMB
(`/Volumes/config`, HA at `HA_URL`) and pulls the panel from a sibling `../Ultra Card` checkout. It needs the
LAN and the mounted share, so it cannot run from a cloud session. Config is in `.env` (see `.env.example`:
`HA_URL`, `HA_SMB_PATH`, `ULTRA_CARD_PANEL_JS`). In the cloud, stop at a green PR or a pushed tag.
