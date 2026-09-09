# Development

## Naming

| Name | Meaning |
|------|---------|
| **Ultra Card Connect** | HACS / integration display name |
| `ultra_card_pro_cloud` | Home Assistant domain and sensor entity (unchanged after rename) |
| **Ultra Card Hub** | Sidebar panel served from this integration's `www/` folder |
| **Ultra Card Pro** | Paid subscription tier on ultracard.io |

## Prerequisites

- Node.js 20+
- Python 3.11+
- Home Assistant 2024.11.0 or newer for testing
- Ultra Card frontend repo (sibling folder) when bundling a new panel build

## Setup

```bash
npm install   # optional — scripts use Node built-ins
pip install -r requirements-dev.txt
cp .env.example .env   # configure local deploy targets
```

## Version management

1. Edit [`version.py`](version.py) (single source of truth).
2. Run `npm run version:update` to sync `manifest.json` and `package.json`.
3. Run `npm run version:check` to verify all three files match.

`npm run deploy` does **not** auto-sync versions.

## Common commands

| Command | Purpose |
|---------|---------|
| `npm run build` | Validate Python/JSON and create `dist/` |
| `npm run build:release` | Build + create `release/*.zip` |
| `npm run build:deploy` | Build + deploy to configured HA instance |
| `npm run deploy` | Deploy integration (bundles panel from Ultra Card; skips wiki sync unless `DOCS_SYNC=1`) |
| `npm run version:update` | Sync version from `version.py` |
| `npm run version:check` | Fail if version files disagree |
| `npm run docs:check` | CI/release: verify docs bundle |
| `npm run panel:check` | CI/release: verify Hub panel SHA-256 manifest |
| `pytest tests/` | Run unit tests |
| `ruff check custom_components/ultra_card_pro_cloud/*.py` | Lint Python |

## Documentation (wiki sync)

Ultra Card Hub **Docs** tab reads from `custom_components/ultra_card_pro_cloud/www/docs/`, synced from the [Ultra Card GitHub Wiki](https://github.com/WJDDesigns/Ultra-Card/wiki):

```bash
npm run docs:sync    # clone wiki → www/docs/ (+ index.json sections, search-index.json)
npm run docs:check   # CI/release: verify bundle + optional stale warnings
```

Run `docs:sync` before release or after wiki updates, then deploy the integration. Set `DOCS_STRICT=1` on `docs:check` to fail when the bundle is older than the wiki commit timestamp.

## Panel bundling

The Hub sidebar is served from `custom_components/ultra_card_pro_cloud/www/`.

- **From Ultra Card:** `npm run build && npm run sync:panel` copies `ultra-card-panel.js`, all `uc-*.js` chunks, prunes stale chunks, and writes `www/panel-assets.json` (SHA-256 hashes).
- **From this repo:** `npm run panel:check` verifies hashes (wired into `build`, CI, and release). `npm run deploy` also copies from the sibling Ultra Card `dist/` when present.
- Set `ULTRA_CARD_PANEL_JS` / `INTEGRATION_WWW_PATH` if your paths differ.

Release checklist: build Ultra Card → `sync:panel` → `panel:check` here → tag Connect.

After changing the panel, restart Home Assistant and hard-refresh the browser.

Rebuild from a clean Ultra Card production build (no local debug ingest hooks). CI warns when `127.0.0.1:7242` debug calls are still present in committed `www/` assets.

## Local deploy

Configure `.env` (see `.env.example`):

- `HA_URL` — your Home Assistant URL
- `HA_SMB_PATH` — path to `custom_components/ultra_card_pro_cloud` on the HA config volume
- `ULTRA_CARD_PANEL_JS` — optional path to built `ultra-card-panel.js`

Then:

```bash
npm run build:deploy
```

## Release checklist

1. Update `version.py`
2. `npm run version:update`
3. `npm run version:check`
4. `npm run build:release`
5. Update `CHANGELOG.md`
6. Tag `vX.Y.Z` and push — GitHub Actions runs hassfest, HACS validation, tests, and attaches the release zip

## CI

Pull requests run [`.github/workflows/ci.yml`](.github/workflows/ci.yml): version check, build validation, unit tests, ruff, and panel bundle checks.

## Archived docs

Historical implementation notes live in [`docs/archive/`](docs/archive/).
