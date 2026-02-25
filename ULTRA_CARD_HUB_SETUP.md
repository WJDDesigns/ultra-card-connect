# Ultra Card Hub – Sidebar panel setup

If **Ultra Card** does not appear in the main sidebar (next to Overview, Map, HACS, etc.), follow one of the methods below.

---

## Method 1: Use `/local/` (recommended – no path guesswork)

This uses your Home Assistant `www` folder so the panel URL is always correct.

### Step 1: Build the panel file

On your dev machine (where the Ultra Card repo is):

```bash
cd "/Users/wayne/Ultra Card"
npm run build
```

You should get `dist/ultra-card-panel.js`.

### Step 2: Copy the panel into Home Assistant

Copy `dist/ultra-card-panel.js` into the **same folder** as your Ultra Card files (e.g. `config/www/community/Ultra-Card/` next to `ultra-card.js`).

- **Target path:** `<config>/www/ultra-card-panel.js`  
  Examples:
  - Linux: `/config/www/ultra-card-panel.js`
  - If you use Samba/network share: your HA config share → `www` folder → paste `ultra-card-panel.js`
  - File Editor add-on: open `www/ultra-card-panel.js` (create `www` if it doesn’t exist) and paste the file contents, or upload the file if the add-on allows it

So the file is served by HA as: `http://YOUR_HA:8123/local/ultra-card-panel.js`

### Step 3: Add panel_custom to configuration.yaml

Open **configuration.yaml** and add this. If you already have a `panel_custom:` block, add only the `- name: ultra-card-panel` block under it.

If the panel file is in **config/www/community/Ultra-Card/** (same folder as ultra-card.js):

```yaml
panel_custom:
  - name: ultra-card-panel
    sidebar_title: Ultra Card
    sidebar_icon: mdi:cards
    url_path: ultra-card-hub
    js_url: /local/community/Ultra-Card/ultra-card-panel.js
    module_url: /local/community/Ultra-Card/ultra-card-panel.js
```

If the panel file is in **config/www/** (no community/Ultra-Card):

```yaml
panel_custom:
  - name: ultra-card-panel
    sidebar_title: Ultra Card
    sidebar_icon: mdi:cards
    url_path: ultra-card-hub
    js_url: /local/ultra-card-panel.js
    module_url: /local/ultra-card-panel.js
```

### Step 4: Restart Home Assistant

**Settings → System → Restart → Restart Home Assistant.**

### Step 5: Check the sidebar

Go to the **main** dashboard (e.g. click **Overview**). In the **left sidebar** you should see **Ultra Card** with the cards icon.

---

## Method 2: Use HACS path (if Ultra Card is installed via HACS)

Only if you already use HACS for the Ultra Card **card** and know its path:

1. In the browser, open **Developer Tools → Network**, refresh, and find the request to `ultra-card.js`.
2. Note the full URL path (e.g. `http://YOUR_HA:8123/hacsfiles/Ultra-Card/ultra-card.js` or `.../ultra-card/ultra-card.js`).
3. Use the **same** base path for the panel, with `ultra-card-panel.js`:

```yaml
panel_custom:
  - name: ultra-card-panel
    sidebar_title: Ultra Card
    sidebar_icon: mdi:cards
    url_path: ultra-card-hub
    js_url: /hacsfiles/Ultra-Card/ultra-card-panel.js
    module_url: /hacsfiles/Ultra-Card/ultra-card-panel.js
```

Replace `/hacsfiles/Ultra-Card/` with whatever path you saw (e.g. `/hacsfiles/ultra-card/`).  
Then restart HA and check the main sidebar.

---

## Method 3: Integration (Ultra Card Pro Cloud)

The **Ultra Card Pro Cloud** integration also registers this panel when the integration is set up. For that to work:

1. **Settings → Devices & services → Add integration** → search **Ultra Card Pro Cloud** → add it (you can skip or enter Pro credentials).
2. Ensure the **updated** integration code is on your HA server (update via HACS or copy the latest `custom_components/ultra_card_pro_cloud` into your config).
3. Restart Home Assistant.

If the sidebar item still doesn’t appear, use **Method 1** (with `/local/`) to confirm the panel works; the integration can then be fixed or debugged separately.

---

## Checklist if you still don’t see it

- [ ] You’re looking at the **main** left sidebar (Overview, Map, etc.), **not** Config → Dashboard or a dashboard’s view tabs.
- [ ] You **restarted** Home Assistant after changing `configuration.yaml` or the integration.
- [ ] With Method 1: `www/ultra-card-panel.js` exists and is readable; in the browser, `http://YOUR_HA:8123/local/ultra-card-panel.js` returns the script (not 404).
- [ ] In **Developer Tools → Logs**, search for “panel” or “Ultra Card”; note any errors.
- [ ] You don’t have the same panel defined **twice** (e.g. both in `panel_custom` and from the integration with the same `url_path`); use one or the other.

---

## Quick test: minimal panel (confirm panel_custom works)

To confirm that **panel_custom** works at all on your system, you can add a minimal panel:

1. Create `www/test-panel.js` with exactly this content:

```javascript
customElements.define('test-panel', class extends HTMLElement {
  set hass(h) { this.innerHTML = '<h1>Test panel works</h1>'; }
});
```

2. In `configuration.yaml`:

```yaml
panel_custom:
  - name: test-panel
    sidebar_title: Test Panel
    sidebar_icon: mdi:test-tube
    url_path: test-panel
    js_url: /local/test-panel.js
```

3. Restart HA and check the sidebar for **Test Panel**.  
   - If **Test Panel** appears, panel_custom works and the issue is specific to the Ultra Card panel (path or script).  
   - If **Test Panel** doesn’t appear, the problem is with panel_custom or your HA/frontend setup.
