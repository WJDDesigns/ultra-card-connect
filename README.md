# Ultra Card Connect

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/custom-components/hacs)
[![GitHub release](https://img.shields.io/github/release/WJDDesigns/ultra-card-connect.svg)](https://github.com/WJDDesigns/ultra-card-connect/releases)

> **Required for all Ultra Card users.** Install once to get the Ultra Card Hub sidebar in Home Assistant. Pro subscribers also get their subscription synced automatically across every device.

This Home Assistant integration connects your HA instance to [ultracard.io](https://ultracard.io), adds the **Ultra Card Hub** sidebar panel available to everyone, and — for Pro subscribers — automatically unlocks Pro features on every device connected to your Home Assistant.

---

## ✨ What You Get

### All Users (Free & Pro)

Installing Ultra Card Connect adds the **Ultra Card Hub** to your Home Assistant sidebar — a dedicated panel with everything you need to manage your Ultra Cards across all your dashboards:

- **Favorites** — save your most-used card configurations for quick access
- **Presets** — community and custom presets to style your cards instantly
- **Colors** — manage your color palette across all cards
- **Variables** — create global variables reusable across all your cards
- **Templates** — manage and reuse Jinja templates
- **Dashboard** — see stats across all your dashboards at a glance
- **Pro** — view your subscription status and unlock Pro features

### Pro Subscribers

Everything above, plus:

- **Auto-sync Pro features** — desktop, mobile, tablet, TV — all unlocked automatically with one login
- **No per-device login** — no more signing in separately on every browser or device
- **Auto-Refresh** — token refreshes automatically every 55 minutes, never expires
- **Dashboard Snapshots** — full backup and restore of your entire dashboard layout
- **Cloud Backup** — 30 manual backups across all your cards
- **Priority Support** — Discord support for Pro members

---

## ❓ Why This Integration Exists

### The Problem

Without Ultra Card Connect:

- There is **no Ultra Card Hub sidebar** — Favorites, Presets, Colors, and Variables are not accessible outside of the card editor
- Pro users must log in separately on every device (desktop, phone, tablet, TV)
- Sessions expire and require re-login each time on each device

### The Solution

Install Ultra Card Connect once and:

- The **Ultra Card Hub sidebar appears on every device** connected to your Home Assistant ✅
- **Free users** get full access to Favorites, Presets, Colors, Variables, and Templates in the sidebar ✅
- **Pro subscribers** get all of the above plus their subscription synced across every device automatically ✅
- Set it and forget it ✅

---

## 🚀 Quick Install via HACS

Open your Home Assistant and add this repository in HACS:

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=WJDDesigns&repository=ultra-card-connect&category=integration)

**Or search manually in HACS:**

1. Open **HACS** in Home Assistant
2. Click **Integrations**
3. Search for **"Ultra Card Connect"**
4. Click **Download**
5. Restart Home Assistant

**Or add as a custom repository:**

1. Open HACS → click the ⋮ menu → **Custom repositories**
2. Add URL: `https://github.com/WJDDesigns/ultra-card-connect`
3. Category: **Integration**
4. Click **Add**
5. Find **Ultra Card Connect** and click **Download**
6. Restart Home Assistant

---

## ⚙️ Configuration

### Initial Setup

1. Go to **Settings → Devices & Services**
2. Click **+ Add Integration**
3. Search for **"Ultra Card Connect"**
4. Enter your [ultracard.io](https://ultracard.io) username or email
5. Enter your password
6. Click **Submit**

✅ Done! The Ultra Card Hub sidebar is now active on all your devices.

### Verify It's Working

1. Look for **Ultra Card** in your Home Assistant sidebar — click it to open the Hub
2. Open the **Pro** tab inside the Hub
   - **Free users:** you'll see your account details and Pro upgrade options
   - **Pro subscribers:** you'll see "Connected via Ultra Card Connect" with your active subscription details
3. Open the Hub on your phone, tablet, or another browser — it's already there ✅

---

## 📋 Requirements

- Home Assistant **2024.1.0** or newer
- A [ultracard.io](https://ultracard.io) account — free accounts are supported
- **Ultra Card** installed via HACS (the card, not just this integration)

---

## 🎯 How It Works

```
┌─────────────────────────────────────────────────┐
│  Home Assistant Instance                        │
│  ┌───────────────────────────────────────────┐ │
│  │ Ultra Card Connect Integration            │ │
│  │  • Authenticates with ultracard.io        │ │
│  │  • Manages JWT tokens automatically       │ │
│  │  • Refreshes every 55 minutes             │ │
│  │  • Adds Ultra Card Hub to the sidebar     │ │
│  │  • Exposes subscription state to cards    │ │
│  └───────────────────────────────────────────┘ │
│              ↓                                   │
│  ┌───────────────────────────────────────────┐ │
│  │ Ultra Card (on any device)                │ │
│  │  • Hub sidebar visible to all users       │ │
│  │  • Reads subscription tier automatically  │ │
│  │  • Unlocks Pro features if subscribed     │ │
│  └───────────────────────────────────────────┘ │
└─────────────────────────────────────────────────┘
           ↓                 ↓                ↓
      [Desktop]         [Mobile]          [Tablet]
   Hub Sidebar ✅    Hub Sidebar ✅    Hub Sidebar ✅
  (Pro if subscribed) (Pro if subscribed) (Pro if subscribed)
```

**Technical Details**
- Authentication: Uses ultracard.io JWT API (`/jwt-auth/v1/token`)
- Token Refresh: Automatic every 55 minutes (before 1-hour expiry)
- Grace Period: Pro access maintained for 24 hours if server is temporarily unreachable
- Security: Credentials encrypted in HA config entry, tokens stored in memory only
- Card Detection: Ultra Card reads subscription state automatically on load

---

## 🔄 Updates & Maintenance

### Why updating the card alone doesn’t update the sidebar panel

The **Ultra Card Hub** (sidebar panel) is **served by this integration**, not by the HACS “Ultra Card” frontend. When you open the Ultra Card item in the sidebar, Home Assistant loads the panel JavaScript from this integration’s `www/` folder. So:

- **Updating only the Ultra Card (frontend)** updates the card on your dashboards and the card editor, but **the sidebar panel stays on the old version** until this integration is updated.
- **Updating this integration** (Ultra Card Connect / Pro Cloud) delivers the latest panel (layout, Colors tab, etc.) and the favorite-colors API. After an integration update, restart HA or hard-refresh the frontend if the panel looks unchanged.

For the sidebar panel and favorite colors to match the changelog, **update this integration** when a new version is released.

### Automatic Updates via HACS

Once installed via HACS, you'll be notified of updates automatically. Click **Update** when available — no reinstall or reconfiguration needed.

### Reauthentication

If you change your ultracard.io password:

1. Go to **Settings → Devices & Services**
2. Find **Ultra Card Connect**
3. Click **Configure**
4. Enter your new credentials
5. Click **Submit**

---

## 🐛 Troubleshooting

### Sidebar Not Appearing

1. Verify the integration is loaded: **Settings → Devices & Services → Ultra Card Connect** — it should show as "Loaded"
2. Hard refresh your browser: **Ctrl+Shift+R** (Windows/Linux) or **Cmd+Shift+R** (Mac)
3. Check logs: **Settings → System → Logs** — search for `ultra_card_pro_cloud`
4. If still missing, try removing and re-adding the integration, then restart Home Assistant

### Pro Features Not Unlocking

1. Open the Hub sidebar → click the **Pro** tab
2. Verify it shows "Connected via Ultra Card Connect" with subscription status **PRO / Active**
3. If it shows your account but the wrong tier, your subscription may have expired — check at [ultracard.io](https://ultracard.io)
4. Check logs for `ultra_card_pro_cloud` error messages

### Common Issues

- ❌ **Invalid credentials** — verify your username and password at [ultracard.io](https://ultracard.io)
- ❌ **Cannot connect** — check that Home Assistant can reach the internet and that ultracard.io is accessible
- ❌ **Integration shows "Failed to Setup"** — check HA logs, verify `https://ultracard.io/wp-json/jwt-auth/v1/` is reachable, try removing and re-adding

### Existing Users After the Rename

If you had "Ultra Card Pro Cloud" installed before this rename, **nothing breaks**. The internal domain (`ultra_card_pro_cloud`) and sensor entity (`sensor.ultra_card_pro_cloud_authentication_status`) are unchanged. You will simply receive a HACS update notification — click Update, restart Home Assistant, and you're done.

---

## 👨‍👩‍👧‍👦 Multiple HA Users

Each Home Assistant user account can have its own Ultra Card Connect integration configured with separate ultracard.io credentials. Each user sees their own Hub sidebar and their own subscription status independently.

---

## 👨‍💻 Development

### Version Management

This integration uses a single source of truth for version numbers.

To change the version, edit `version.py` in the root folder:

```python
__version__ = "1.0.9"  # Change this
```

Then sync to manifest (required before deploying):

```bash
npm run version:update
npm run deploy
```

See `VERSION_GUIDE.md` for detailed documentation.

---

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for the full version history.

---

## 🤝 Support

- **Issues:** [GitHub Issues](https://github.com/WJDDesigns/ultra-card-connect/issues)
- **Feature Requests:** [GitHub Discussions](https://github.com/WJDDesigns/ultra-card-connect/discussions)
- **Get Pro Subscription:** [ultracard.io](https://ultracard.io)

---

## 📄 License

MIT License — see [LICENSE](LICENSE) file for details.

---

## 🙏 Credits

Created by [WJD Designs](https://github.com/WJDDesigns) for the Home Assistant community.

Uses the [ultracard.io](https://ultracard.io) authentication API.

If Ultra Card Connect makes your life easier, consider upgrading to Pro to support continued development! ❤️
