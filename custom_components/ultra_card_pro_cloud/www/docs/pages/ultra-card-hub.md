# Ultra Card Hub

The **Ultra Card Hub** is a sidebar panel in Home Assistant for managing Ultra Card across all your dashboards — favorites, presets, colors, variables, templates, account settings, and **built-in documentation**.

> The Hub is served by the **Ultra Card Connect** integration (HACS → Integrations), not by the Ultra Card frontend card. Updating only the card does **not** update the Hub panel. See [Pro and Cloud](#uc-doc-pro-and-cloud).

---

## Navigation groups

The Hub sidebar is organized into four groups:

| Group | Tabs |
|---|---|
| **Home** | Dashboard — stats and cards across your Lovelace dashboards |
| **Library** | Favorites · Presets · Colors · Variables · Templates |
| **Account** | Account · Pro (subscription status) |
| **Help** | **Docs** · About |

Tabs remember your last selection via browser local storage.

---

## Docs tab (in-panel wiki)

The **Docs** tab bundles this GitHub wiki inside Home Assistant — no browser tab required.

### Features

- **Sidebar navigation** — same sections as this wiki (Getting Started, Core Concepts, Modules, Reference)
- **Full-text search** — type in the search box; press **`/`** anywhere on the Docs tab to focus search
- **In-page table of contents** — jump to headings on long pages
- **Refresh button** — reload the bundled docs from the integration
- **Stale banner** — warns when the integration's doc bundle is older than the latest wiki (update Ultra Card Connect via HACS)
- **Deep links** — wiki cross-links open inside the Docs tab (`#uc-doc-{slug}`)

Bundled docs are synced from **[this wiki](https://github.com/WJDDesigns/Ultra-Card/wiki)** when the Ultra Card Connect integration is built/released.

---

## Opening docs from the card editor

You don't have to navigate manually:

| Entry point | Opens |
|---|---|
| **About tab → "Documentation in Ultra Card Hub"** | Docs tab → Home |
| **Module editor → ? help icon** (module header) | Docs tab → that module's page (`module-{type}` slug) |

The Hub remembers your last docs page per browser.

---

## Cross-tab navigation

Other Hub tabs and the card editor can jump you to a specific tab programmatically (e.g. open Docs from the editor while you're editing a card). Account and Pro share the **Account** group in the sidebar.

---

## Requirements

1. **Ultra Card** installed via HACS (frontend card)
2. **Ultra Card Connect** installed via HACS (integration) + HA restart
3. Hard refresh after updating the integration (`Cmd+Shift+R` / `Ctrl+Shift+F5`) if the Hub looks stale

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| Hub missing from sidebar | Install/update **Ultra Card Connect**, restart HA. |
| Docs tab empty or 404 | Update Ultra Card Connect — it ships the `www/docs/` bundle. |
| Docs content looks old | Update Ultra Card Connect; click **Refresh** on the Docs tab. |
| Module help opens Home instead of module page | That module may not have a wiki page yet — check [Modules Overview](#uc-doc-modules-overview). |

See also [FAQ and Troubleshooting](#uc-doc-faq-and-troubleshooting) § *Pro / Cloud*.
