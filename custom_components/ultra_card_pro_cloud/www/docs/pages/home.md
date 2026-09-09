# Ultra Card Wiki

> **Ultra Card** is a visual, modular card builder for Home Assistant Lovelace dashboards. Build professional dashboards without writing YAML — drag-and-drop modules, conditional logic, Jinja2 templates, and a 4-tab editor on every module.

[![hacs_badge](https://img.shields.io/badge/HACS-Default-41BDF5.svg)](https://github.com/hacs/integration) · **[UltraCard.io](https://ultracard.io)** · **[Discord](https://discord.gg/6xVgHxzzBV)** · **[GitHub](https://github.com/WJDDesigns/Ultra-Card)**

---

## Get Started

| If you want to... | Read this |
|---|---|
| Install Ultra Card in Home Assistant | [Installation](#uc-doc-installation) |
| Build your first card | [Quick Start](#uc-doc-quick-start) |
| Understand the editor | [The Editor](#uc-doc-the-editor) |
| Use the Hub sidebar + in-panel docs | [Ultra Card Hub](#uc-doc-ultra-card-hub) |
| Browse every module | [Modules Overview](#uc-doc-modules-overview) |
| Show / hide modules conditionally | [Logic and Conditions](#uc-doc-logic-and-conditions) |
| Use Jinja2 in module fields | [Templates and Jinja](#uc-doc-templates-and-jinja) |
| Wire up taps, holds, and actions | [Actions](#uc-doc-actions) |
| Style modules globally | [Design System](#uc-doc-design-system) |
| Sync configs and add Pro modules | [Pro and Cloud](#uc-doc-pro-and-cloud) |
| Develop or contribute | [Development](#uc-doc-development) |
| Translate Ultra Card | [Translations](#uc-doc-translations) |
| Solve a problem | [FAQ and Troubleshooting](#uc-doc-faq-and-troubleshooting) |

---

## What Ultra Card gives you

- **69 modules** across 7 categories (content, data, interactive, layout, media, input, Pro)
- **Drag-and-drop layout** — rows, columns, and unlimited nesting
- **4-tab module editor** — General, Actions, Logic, Design
- **Native + 3rd-party card embedding** — Bubble Card, Mushroom, ApexCharts, etc.
- **Conditional logic** — entity state, attribute, time, or Jinja2 templates
- **Full Jinja2 support** — with a CodeMirror-powered template editor
- **Preset Marketplace** — install community presets, share your own
- **15 languages** — full internationalization
- **Pro tier** — cloud sync, daily backups, animated modules, video backgrounds

> **Note:** This wiki documents Ultra Card **v3.5.0-beta1**. Some features and modules may differ slightly in older releases. You can also read these pages inside Home Assistant via **Ultra Card Hub → Docs** ([Ultra Card Hub](#uc-doc-ultra-card-hub)).

---

## Project layout (1-minute orientation)

```
Ultra-Card/
├── src/
│   ├── cards/             Top-level <ultra-card> Lit element
│   ├── modules/           74+ module implementations + registry
│   ├── editor/            4-tab visual editor
│   ├── tabs/              Global Actions / Logic / Design tabs
│   ├── components/        Reusable UI (color picker, entity picker, dialogs…)
│   ├── services/          Cross-cutting services (logic, templates, cloud…)
│   ├── translations/      15 language files (en.json is canonical)
│   ├── utils/             Helpers (template processor, form utils, layout…)
│   ├── pro/               Pro/Cloud-gated module implementations
│   ├── panels/            Ultra Card Hub sidebar panel
│   └── types.ts           Single source of truth for config types
├── docs/                  Per-module documentation (also linked from wiki)
├── scripts/               Release, translation, sync helpers
├── webpack.config.js      Production bundler
└── package.json
```

For a deeper development walkthrough, see [Development](#uc-doc-development) and [Architecture](#uc-doc-architecture).

---

## License & credits

MIT-licensed. Created by [WJD Designs](https://wjddesigns.com). Thanks to the Discord community and everyone who contributes presets, translations, and feedback.
