# FAQ and Troubleshooting

Common questions and fixes. If your issue isn't here, ask on [Discord](https://discord.gg/6xVgHxzzBV) or open a [GitHub issue](https://github.com/WJDDesigns/Ultra-Card/issues).

---

## Installation

### "Custom: Ultra Card" doesn't appear in Add card

- **HACS install:** confirm Ultra Card is installed (HACS → Frontend) and that you **restarted Home Assistant** after install.
- **Manual install:** confirm the resource was added at **Settings → Dashboards → Resources** with type **JavaScript Module**, pointing at `/local/ultra-card/ultra-card.js` (or wherever you placed it).
- **Browser cache:** hard-refresh — `Cmd+Shift+R` / `Ctrl+Shift+F5`.

### "Cannot find module" or modules render as red error blocks

Most common cause: **missing chunk files**. Ultra Card splits into multiple JS files (main bundle + per-module chunks). If you only copied `ultra-card.js`, modules can't load.

Fix: download **all** release assets into the same directory. See [Installation](#uc-doc-installation) § *Manual install*.

### Updated Ultra Card but still seeing the old version

HA's frontend cache is aggressive. Try in order:

1. **Hard refresh** (`Cmd+Shift+R` / `Ctrl+Shift+F5`).
2. **Clear site data** — DevTools → Application → Storage → Clear site data.
3. **Verify the file** — does `dist/ultra-card.js` actually have the new content?

---

## Editor

### Live preview is laggy / sluggish

- Disable **animate on change** on heavy modules (Slider Control, Bar, Gauge).
- Reduce particle counts on **Living Canvas** / **Dynamic Weather**.
- Check the breakpoint preview switcher — make sure you're not testing the desktop layout on mobile.
- Close DevTools — its Performance recording can dramatically slow rendering.

### Module setting doesn't seem to save

- Confirm you clicked **Save** at the bottom of the dashboard editor (not just the module's local close).
- Watch for browser console errors — sometimes a malformed template fails validation.

### "Could not load area" on Area Summary

The Area module reads HA's area / device / entity registry over WebSocket. Ensure your account has admin access (or registry-read permissions) and that HA is reachable. Click **Retry** on the module after fixing.

---

## Logic & templates

### Template doesn't update live

- The template **must reference HA state** for HA to know when to re-render. A template like `{{ now() }}` doesn't subscribe to any state, so it only updates when other state in the card changes.
- Test your template in **HA → Developer Tools → Template** to confirm syntax.
- For "every second" updates, use the **[Module Animated Clock](#uc-doc-module-animated-clock)** or template-driven **Text** with the `clock-update-service` (1Hz tick).

### Logic shows the module then immediately hides it

This usually means a Logic condition references an entity that's still `unavailable` on first load. Add a `has_value` precondition:

```
Mode: Every (AND)
1. entity: sensor.x  operator: has_value
2. entity: sensor.x  operator: >  value: 50
```

### "Show 5 of 5 lights on" template gives the wrong count

Common pitfall — `expand()` returns light entities themselves, but you might be querying a `light.living_room_all` group. Try:

```jinja
{{ expand('light.living_room_all')
   | rejectattr('entity_id', 'eq', 'light.living_room_all')
   | selectattr('state', 'eq', 'on')
   | list | count }}
```

---

## Pro / Cloud

### Pro modules show "Sign in to use"

You need both:

1. An **UltraCard.io account** (sign up at [UltraCard.io](https://ultracard.io)).
2. The **Ultra Card Connect** custom HA integration (HACS → Integrations).

After installing the integration, sign in via **Settings → Devices & services → Add integration → Ultra Card Connect**. See [Pro and Cloud](#uc-doc-pro-and-cloud) and [Ultra Card Hub](#uc-doc-ultra-card-hub).

### Sidebar Hub is missing

The Hub is served by the **Ultra Card Connect** integration, not HACS frontend. Update the integration in HACS → Integrations and restart HA. Just updating the card does **not** update the Hub. See [Ultra Card Hub](#uc-doc-ultra-card-hub).

### Hub Docs look outdated or module help opens the wrong page

1. Update **Ultra Card Connect** via HACS (the integration ships the bundled wiki).
2. Restart Home Assistant, then hard-refresh the browser.
3. On the Hub **Docs** tab, click **Refresh**.
4. If a module **?** help icon opens Home instead of the module page, that module may not have a wiki page — check [Modules Overview](#uc-doc-modules-overview).

### Dropdown menu clipped at screen edge

Set **Menu direction** to **Up** or **Down** in the Dropdown module General tab (instead of Auto). Press **Escape** to close a stuck open menu.

### Slider carousel stuck between pages on iPhone / iPad

Fixed in v3.5 — update Ultra Card via HACS. The carousel now snaps to the nearest page when a swipe ends mid-slide.

### Cloud sync paused / errors

Open the cloud icon in the editor — it shows the last sync error. Re-authenticate via **Settings → Devices & services → Ultra Card Pro Cloud → Configure**.

---

## Performance

### High CPU on the dashboard tab

Diagnostics:

1. Open DevTools → Performance, record 5 seconds, look for hot frames.
2. Common culprits:
   - **Many template logic conditions** with frequently-changing entity references — try simplifying.
   - **Large Dynamic Lists** (>50 items) — paginate via your template.
   - **Heavy backgrounds** on mobile — Dynamic Weather, Living Canvas, Video Background. Hide on mobile via Logic → Hidden on devices.
   - **Long-range Graphs** — reduce time period.

### Modules flicker when scrolling

- Enable **persistent state** (where supported) so accordion / tabs don't reset when scrolled out of view.
- Disable hover effects on the affected module.

### Bundle is large to download

Ultra Card is split into chunks; the initial `ultra-card.js` is ~smaller than the total. If you have very limited bandwidth, reduce the *visible* module variety so fewer chunks are pulled. The on-demand chunk loader (`uc-module-preload-scheduler.ts`) only fetches what your layouts use.

---

## Layout

### Two columns on desktop, one on mobile

Use the **Hidden on devices** option on the second column to hide it on mobile, **or** put one module per column with full width and use the column's **width** mode.

### Module overflow on mobile

- Reduce font sizes via per-breakpoint Design overrides.
- Set the column to allow horizontal scroll (Design → Overflow).
- For lists, use **[Module Slider](#uc-doc-module-slider)** so users can swipe through pages.

### Dragging is jumpy

Browser DevTools open with throttling can disrupt drag-and-drop. Close DevTools or disable CPU throttling.

---

## YAML / config

### My imported config has wrong colors

Imports get `_contentOrigin: imported`. Some preset Color tokens fall back to defaults if your custom variables don't exist. Open the **Variable Mapping** dialog when prompted, or define your variables before pasting.

### My export contains entity IDs I want stripped

By default, **export** strips known sensitive fields (IPs, tokens, image URLs) but keeps entity IDs intact (so the dashboard works for the importer). When sharing publicly, tick **Strip personal data** in the export dialog.

---

## Documentation link goes to the homepage

- **README / GitHub:** the Documentation link points to [this wiki](https://github.com/WJDDesigns/Ultra-Card/wiki).
- **In Home Assistant:** use **Ultra Card Hub → Docs** for the bundled copy ([Ultra Card Hub](#uc-doc-ultra-card-hub)).
- **Module editor:** click the **`?`** icon in a module's header to jump to that module's wiki page.

---

## Asking for help

When you file a bug, please include:

1. Ultra Card **version** (visible in the editor's about/cloud panel, or `version.ts`).
2. Home Assistant **version**.
3. Browser + OS.
4. **Console output** (DevTools → Console — copy all red lines).
5. The minimal **YAML config** that reproduces the issue.
6. Screenshots / a screen recording if visual.

The quicker we can reproduce it, the quicker we can fix it.
