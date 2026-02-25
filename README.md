# Ultra Card Connect

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/custom-components/hacs)
[![GitHub release](https://img.shields.io/github/release/WJDDesigns/ultra-card-connect.svg)](https://github.com/WJDDesigns/ultra-card-connect/releases)

> **Required for all Ultra Card users.** Install once to get the Ultra Card sidebar in Home Assistant — and if you have a Pro subscription, it syncs automatically to every device.

This Home Assistant integration connects your HA instance to [ultracard.io](https://ultracard.io), adds the **Ultra Card Hub** sidebar panel, and — for Pro subscribers — automatically unlocks Pro features on every device connected to your Home Assistant.

---

## ✨ What You Get

### All Users (Free & Pro)
- **Ultra Card Sidebar (Hub)** — access Favorites, Presets, Colors, Variables, and Templates directly from the HA sidebar on any device
- **Single install** — configure once, works everywhere your Home Assistant is open

### Pro Subscribers
Everything above, plus:
- **Auto-sync Pro features** — desktop, mobile, tablet, TV — all unlocked automatically
- **Login Once** — no more logging in separately on each device
- **Auto-Refresh** — token refreshes automatically, never expires
- **Dashboard Snapshots** — full backup and restore of your dashboards
- **Cloud Backup** — 30 manual backups across all your cards

---

## ❓ Why This Integration Exists

### Without It
- No Ultra Card sidebar in Home Assistant
- Pro users must log in separately on every device
- Sessions expire and require re-login on each device

### With It
- The Ultra Card Hub sidebar is available on every device ✅
- Pro subscribers get features unlocked everywhere automatically ✅
- Set it and forget it ✅

---

## 🚀 Quick Install via HACS

Open your Home Assistant and add this repository in HACS:

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=WJDDesigns&repository=ultra-card-connect&category=integration)

**Or manually:**

1. Open HACS in Home Assistant
2. Click **Integrations**
3. Search for **"Ultra Card Connect"**
4. Click **Download**
5. Restart Home Assistant

**Or add as a custom repository:**

1. Click the ⋮ menu → **Custom repositories**
2. Add: `https://github.com/WJDDesigns/ultra-card-connect`
3. Category: **Integration**
4. Click **Add**, find **Ultra Card Connect**, click **Download**
5. Restart Home Assistant

---

## ⚙️ Configuration

### Initial Setup
1. Go to **Settings → Devices & Services**
2. Click **+ Add Integration**
3. Search for **"Ultra Card Connect"**
4. Enter your [ultracard.io](https://ultracard.io) username/email
5. Enter your password
6. Click **Submit**

✅ Done! The Ultra Card sidebar is now active on all your devices.

### Verify It's Working
- Open any dashboard — you should see the **Ultra Card Hub** entry in the sidebar
- Open the Hub → click the **Pro** tab
- Free users: see Pro features and upgrade options
- Pro users: see "Connected via Ultra Card Connect" with your subscription details

---

## 📋 Requirements

- Home Assistant 2024.1.0 or newer
- A [ultracard.io](https://ultracard.io) account (free or Pro)
- Ultra Card installed via HACS

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
│  │  • Adds Ultra Card Hub sidebar panel      │ │
│  │  • Exposes auth state via hass.data       │ │
│  └───────────────────────────────────────────┘ │
│              ↓                                   │
│  ┌───────────────────────────────────────────┐ │
│  │ Ultra Card (on any device)                │ │
│  │  • Hub sidebar available to all users     │ │
│  │  • Checks subscription for Pro features   │ │
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
- Data Exposure: Integration exposes auth state in `hass.data["ultra_card_pro_cloud"]`
- Card Detection: Ultra Card checks for the integration on load and updates when state changes
- Security: Credentials encrypted in HA config entry, tokens stored in memory only

---

## 🔄 Updates & Maintenance

### Automatic Updates via HACS
Once installed via HACS, you'll automatically be notified of updates. Click **Update** when available.

### Reauthentication
If you change your ultracard.io password:
1. Go to **Settings → Devices & Services**
2. Find **Ultra Card Connect**
3. Click **Configure**
4. Enter new credentials and click **Submit**

---

## 🐛 Troubleshooting

### Sidebar Not Appearing
1. Verify the integration is loaded: **Settings → Devices & Services → Ultra Card Connect** shows "Loaded"
2. Hard refresh your browser (Ctrl+Shift+R / Cmd+Shift+R)
3. Check logs: **Settings → System → Logs**, search for `ultra_card_pro_cloud`

### Pro Features Not Unlocking
1. Open the Hub sidebar → **Pro** tab — check your subscription status
2. Verify it shows "Connected via Ultra Card Connect" with an active Pro subscription
3. Check logs for `ultra_card_pro_cloud` errors

### Common Issues
- ❌ **Invalid credentials** — verify username/password at [ultracard.io](https://ultracard.io)
- ❌ **No internet connection** — check HA can reach ultracard.io
- ❌ **Integration shows "Failed to Setup"** — check logs, try removing and re-adding

### Integration Shows "Failed to Setup"
1. Check Home Assistant logs for errors
2. Verify ultracard.io is accessible: `https://ultracard.io/wp-json/jwt-auth/v1/`
3. Try removing and re-adding the integration
4. Restart Home Assistant

---

## 👨‍👩‍👧‍👦 Multiple HA Users

Each HA user can have their own Ultra Card Connect integration configured with their own ultracard.io credentials. Each user will see their own subscription status in the Hub sidebar.

---

## 👨‍💻 Development

### Version Management

This integration uses a single source of truth for version numbers.

To change the version, edit `version.py` in the root folder:
```python
__version__ = "1.0.8"  # Change this
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
