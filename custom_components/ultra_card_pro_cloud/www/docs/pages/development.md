# Development

How to set up Ultra Card locally, run the dev workflow, and contribute changes.

> **TL;DR:** clone, `npm install`, `npm run watch:ha`. See below for full workflow.

---

## Prerequisites

- **Node.js** ≥ 20 (20 LTS recommended)
- **npm** (bundled with Node)
- A working **Home Assistant** instance for testing
- (macOS) the HA config volume mounted at `/Volumes/config`, **or** `HA_DEPLOY_PATH` set to your HA `www/community/Ultra-Card` folder

---

## Clone & install

```bash
git clone https://github.com/WJDDesigns/Ultra-Card.git
cd Ultra-Card
npm install
```

---

## Dev workflow — fast iteration (~10–15 sec)

The fastest loop:

```bash
npm run watch:ha
```

What this does on every save:

1. Webpack rebuilds the bundle (~8–10s).
2. Built file auto-deploys to your HA `www/community/Ultra-Card/`.
3. Console prints `✓ Auto-deployed to HA`.
4. **Refresh** your HA browser (`F5` / `Cmd+Shift+R`) to see changes — no HA restart needed.

If your HA volume isn't at `/Volumes/config`, set the path explicitly:

```bash
HA_DEPLOY_PATH=/path/to/ha/config/www/community/Ultra-Card npm run watch:ha
```

### Browser cache (one-time)

HA aggressively caches frontend resources. Open DevTools, **Network → Disable cache**, and keep DevTools open while developing. Or do a hard refresh (`Cmd+Shift+R` / `Ctrl+Shift+F5`).

---

## Available scripts

| Script | What |
|---|---|
| `npm run watch:ha` | **Recommended.** Watch mode + auto-deploy to HA. |
| `npm run dev:ha` | Alias for `watch:ha`. |
| `npm run watch` | Watch mode (auto-deploys when HA path is found). |
| `npm run dev` | Standalone dev server with hot reload (localhost:8080). |
| `npm run build` | Production build (`dist/`). |
| `npm run build:deploy` | Build + run `deploy.js`. |
| `npm run build:release` | Run the release script (creates a tagged release). |
| `npm run build:prerelease` | Same but as a prerelease. |
| `npm run typecheck` | `tsc --noEmit`. |
| `npm run lint` / `lint:fix` | ESLint. |
| `npm run test` / `test:run` / `test:coverage` | Vitest. |
| `npm run validate:translations` | Sanity-check translation JSON files. |
| `npm run translations:stats` | Coverage report per language. |
| `npm run sync:panel` | Copy built sidebar panel into the integration repo. |
| `npm run release:check` | **Run before any release** — typecheck + lint + tests + translations + prebuild + production build. Same pipeline as CI. |

---

## Project structure

```
src/
├── cards/             Top-level <ultra-card> Lit element
├── modules/           Module implementations + registry + manifest
├── editor/            Visual editor + selector tabs
├── tabs/              Shared Actions / Logic / Design tabs
├── components/        Reusable UI components (color picker, dialogs)
├── services/          Cross-cutting services
├── translations/      i18n JSON files
├── utils/             Helpers (template processor, layout, color)
├── pro/               Pro features (cloud, premium modules)
├── panels/            Ultra Card Hub sidebar
├── workers/           Web Workers
├── types.ts           Single source of truth for config types
└── version.ts         Version constant
```

See [Architecture](#uc-doc-architecture) for the deeper tour.

---

## Adding a module

1. **Manifest** — add a row to [`src/modules/module-manifest-data.ts`](https://github.com/WJDDesigns/Ultra-Card/blob/main/src/modules/module-manifest-data.ts) with type / title / description / category / tags.
2. **Type** — add the new `type` literal to the `BaseModule` discriminated union in [`src/types.ts`](https://github.com/WJDDesigns/Ultra-Card/blob/main/src/types.ts), and a dedicated interface for the module's config.
3. **Implementation** — create `src/modules/<your>-module.ts`. Start from [`src/modules/_module-template.ts`](https://github.com/WJDDesigns/Ultra-Card/blob/main/src/modules/_module-template.ts) and follow the canonical `renderGeneralTab` pattern in [`/.cursor/rules/module-general-tab.mdc`](https://github.com/WJDDesigns/Ultra-Card/blob/main/.cursor/rules/module-general-tab.mdc).
4. **Register** — add a lazy-loader entry in [`src/modules/module-loaders.ts`](https://github.com/WJDDesigns/Ultra-Card/blob/main/src/modules/module-loaders.ts) so the module is discoverable.
5. **Tests** — add a unit test for any non-trivial logic (Vitest, alongside the source file or under `src/utils/*.test.ts`).
6. **Translations** — add new strings to `src/translations/en.json` (the source of truth). Other languages are inherited until translated.
7. **Doc** — write a wiki page (or update the existing one) plus `docs/modules/<your>.md` for the README cross-link.

Run `npm run release:check` before pushing your PR. CI runs the same pipeline.

---

## Sidebar panel and the Pro Cloud integration

The **Ultra Card Hub** sidebar panel is **served by the Ultra Card Pro Cloud integration**, not by HACS:

- Panel changes (anything in `src/panels/`) build into `dist/ultra-card-panel.js` on `npm run build`.
- To ship them with the integration, run `npm run sync:panel` — copies the built panel into the integration repo (default: `../Ultra Card Pro Cloud`, override with `INTEGRATION_WWW_PATH`).
- A new integration release is needed for users to receive the updated panel. Updating only the card does **not** update the panel.

---

## Releasing

The release pipeline is in [`scripts/release.js`](https://github.com/WJDDesigns/Ultra-Card/blob/main/scripts/release.js):

```bash
npm run release:check     # always run first
npm run build:release     # creates tagged release
# or for a beta:
npm run build:prerelease
```

Every tagged release builds via GitHub Actions; HACS picks up the release automatically.

---

## Code style

- **Formatting** — Prettier (`.prettierrc`). Don't fight it.
- **Linting** — ESLint with `@typescript-eslint`. Run `npm run lint:fix` before commit.
- **Comments** — explain *why*, not *what*. The TypeScript types should make *what* obvious.
- **Strict mode** — TypeScript currently runs with `strict: false` and `noImplicitAny: false` for compat. Incremental tightening is encouraged; see [DEVELOPMENT.md § *TypeScript strict mode*](https://github.com/WJDDesigns/Ultra-Card/blob/main/DEVELOPMENT.md#typescript-strict-mode-incremental).
- **Use uc-form helpers** — most editor inputs go through `injectUcFormStyles()`, `renderSettingsSection()`, `renderFieldSection()`, etc. Don't write raw HTML form markup. See the cursor rule `module-general-tab.mdc`.

---

## Translations

See [Translations](#uc-doc-translations) for the workflow and PR conventions.

---

## Where to ask for help

- **Bugs / features** — [GitHub Issues](https://github.com/WJDDesigns/Ultra-Card/issues)
- **Discussion / showcase** — [Discord](https://discord.gg/6xVgHxzzBV)
- **PRs welcome** — see the [README's Contributing section](https://github.com/WJDDesigns/Ultra-Card#contributing)
