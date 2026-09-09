# Installation

Ultra Card is a custom Lovelace card. There are three supported installation paths:

1. **HACS** (recommended) — handles updates automatically.
2. **Manual** — for users who prefer to manage files themselves.
3. **HACS custom repository** — for testing prereleases before they hit the default HACS index.

> **Requirement:** Home Assistant **2024.1.0** or newer, and a modern browser (ES2015+).

---

## 1. HACS (recommended)

[![Open in HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=WJDDesigns&repository=Ultra-Card&category=plugin)

1. Open **HACS** in Home Assistant.
2. Search for **Ultra Card**.
3. Click **Download** and install the latest release.
4. Restart Home Assistant when prompted.
5. Hard-refresh your dashboard (Cmd/Ctrl + Shift + R).

That's it — Ultra Card is now available as **Custom: Ultra Card** when you add a card.

---

## 2. HACS custom repository (prereleases)

If you want to try a beta build:

1. **HACS** → **⋮** (top right) → **Custom repositories**.
2. Add `https://github.com/WJDDesigns/Ultra-Card` with category **Lovelace** (a.k.a. Frontend / Dashboard).
3. Search for **Ultra Card**, install the version you want, restart HA.

---

## 3. Manual install

Ultra Card ships as **multiple JS files**, not a single bundle. They must all live in the same directory or the browser cannot resolve them.

1. From the [latest release](https://github.com/WJDDesigns/Ultra-Card/releases) download **all** release assets — not only `ultra-card.js`. Typical files:
   - `ultra-card.js` — main card bundle
   - `ultra-card.js.LICENSE.txt`
   - `ultra-card-panel.js` — sidebar panel (only used with the Pro Cloud integration)
   - any `uc-*.js` chunks (lazy-loaded module chunks)
2. Copy the entire folder into `config/www/ultra-card/` (or directly under `config/www/`).
3. Add **one** Lovelace resource pointing at the **main** bundle:
   - **Settings → Dashboards → Resources → Add resource**
   - URL: `/local/ultra-card/ultra-card.js` (or `/local/ultra-card.js` if files live directly in `www/`)
   - Resource type: **JavaScript Module**
4. Reload your browser (Cmd/Ctrl + Shift + R).

> If you also use the **Ultra Card Hub** sidebar (Pro feature), make sure `ultra-card-panel.js` is in that same directory. With HACS, this is automatic.

---

## Optional: Pro features

Pro features (cloud sync, daily backups, animated modules, video backgrounds, 3rd-party card integration) are unlocked via a free account at **[UltraCard.io](https://ultracard.io)** and the **Ultra Card Pro Cloud** integration:

1. Install the **Ultra Card Pro Cloud** custom integration from HACS → Integrations.
2. Restart Home Assistant.
3. Sign in via **Settings → Devices & services → Add integration → Ultra Card Pro Cloud**.

See [Pro and Cloud](#uc-doc-pro-and-cloud) for the full breakdown.

---

## Verifying the install

Open any dashboard, click **Edit dashboard → Add card**, and search for **Ultra Card**. You should see:

- **Custom: Ultra Card** — the main card type
- A live preview area with **Add Module** when you open it

If you don't see it, see [FAQ and Troubleshooting](#uc-doc-faq-and-troubleshooting).

---

## Updating

- **HACS users:** HACS will notify you in the Lovelace dashboard when a new release is available. Click **Update**, then hard-refresh.
- **Manual users:** Download the new release assets, replace the files in `config/www/ultra-card/`, then bust your browser cache.

> **Browser caching is aggressive.** After any update, do a hard refresh (Cmd/Ctrl + Shift + R) or clear site data in DevTools → Application → Clear storage. See [FAQ and Troubleshooting](#uc-doc-faq-and-troubleshooting) for details.
