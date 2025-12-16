# Ultra Card Pro Cloud

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/custom-components/hacs)
[![GitHub release](https://img.shields.io/github/release/WJDDesigns/ultra-card-pro-cloud.svg)](https://github.com/WJDDesigns/ultra-card-pro-cloud/releases)

> Unlock Ultra Card PRO features across **all your devices** with a single login!

This Home Assistant integration connects your HA instance to ultracard.io, automatically unlocking PRO features on every device connected to your Home Assistant - desktop, mobile, tablets, and TVs.

## ✨ Why You Need This

### The Problem

Without this integration, you have to login separately on:

- Your desktop browser
- Your phone browser
- Your tablet
- Your TV / Chromecast
- Any other device running Home Assistant

And when your session expires, you have to do it all over again! 😫

### The Solution

Install this integration once, and **every device automatically has PRO features forever** ✅

## 🚀 Features

- **🔐 Login Once** - Configure once in Home Assistant, works everywhere
- **📱 All Devices** - Desktop, mobile, tablet, TV - all unlocked automatically
- **🔄 Auto-Refresh** - Token refreshes automatically, never expires
- **🔒 More Secure** - Credentials stored in HA config, not browser localStorage
- **👨‍👩‍👧‍👦 Multi-User** - Each HA user can have their own PRO subscription
- **⚙️ Zero Maintenance** - Set it and forget it

## 📋 Requirements

1. **Ultra Card PRO subscription** - Get yours at [ultracard.io](https://ultracard.io)
2. **Home Assistant 2024.1.0+**
3. **Ultra Card** installed (via HACS)

## 🔧 Installation

### HACS (Recommended)

**🎉 Now available directly in HACS!**

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=WJDDesigns&repository=ultra-card-pro-cloud&category=integration)

1. Open **HACS** in Home Assistant
2. Click **Integrations**
3. Search for **"Ultra Card Pro Cloud"**
4. Click **Download**
5. **Restart Home Assistant**

_Or add manually:_

1. Click the **⋮** menu → **Custom repositories**
2. Add repository: `https://github.com/WJDDesigns/ultra-card-pro-cloud`
3. Category: **Integration**
4. Click **Add**
5. Find **"Ultra Card Pro Cloud"** and click **Download**
6. **Restart Home Assistant**

### Manual Installation

1. Download the [latest release](https://github.com/WJDDesigns/ultra-card-pro-cloud/releases)
2. Copy `custom_components/ultra_card_pro_cloud` to your HA `custom_components` directory
3. Restart Home Assistant

## ⚙️ Configuration

### Initial Setup

1. Go to **Settings** → **Devices & Services**
2. Click **+ Add Integration**
3. Search for **"Ultra Card Pro Cloud"**
4. Enter your **ultracard.io username/email**
5. Enter your **password**
6. Click **Submit**

✅ **Done!** All your devices now have PRO features unlocked.

### Verify It's Working

1. Open any dashboard with an Ultra Card
2. Edit the card → Click **PRO** tab
3. You should see: **"✅ PRO Features Unlocked via Ultra Card Pro Cloud"**
4. Check on mobile/other devices - they'll be unlocked too!

## 🎯 How It Works

```
┌─────────────────────────────────────────────────┐
│  Home Assistant Instance                        │
│  ┌───────────────────────────────────────────┐ │
│  │ Ultra Card Pro Cloud Integration          │ │
│  │  • Authenticates with ultracard.io        │ │
│  │  • Manages JWT tokens automatically       │ │
│  │  • Refreshes every 55 minutes             │ │
│  │  • Exposes auth state via hass.data       │ │
│  └───────────────────────────────────────────┘ │
│              ↓                                   │
│  ┌───────────────────────────────────────────┐ │
│  │ Ultra Card (on any device)                │ │
│  │  • Checks hass.data for integration       │ │
│  │  • Reads subscription status              │ │
│  │  • Unlocks PRO features automatically     │ │
│  └───────────────────────────────────────────┘ │
└─────────────────────────────────────────────────┘
           ↓                 ↓                ↓
      [Desktop]         [Mobile]          [Tablet]
   PRO Unlocked ✅   PRO Unlocked ✅   PRO Unlocked ✅
```

### Technical Details

- **Authentication:** Uses ultracard.io JWT API (`/jwt-auth/v1/token`)
- **Token Refresh:** Automatic every 55 minutes (before 1-hour expiry)
- **Data Exposure:** Integration exposes auth state in `hass.data["ultra_card_pro_cloud"]`
- **Card Detection:** Ultra Card checks for integration on load and updates when state changes
- **Security:** Credentials encrypted in HA config entry, tokens stored in memory only

## 🔄 Updates & Maintenance

### Automatic Updates via HACS

Once installed via HACS, you'll automatically be notified of updates. Click **Update** when available.

### Reauthentication

If you change your ultracard.io password:

1. Go to **Settings** → **Devices & Services**
2. Find **Ultra Card Pro Cloud**
3. Click **Configure**
4. Enter new credentials
5. Click **Submit**

## 🐛 Troubleshooting

### PRO Features Not Unlocking

**Check integration status:**

1. Go to **Settings** → **Devices & Services**
2. Find **Ultra Card Pro Cloud**
3. Verify it shows as "Loaded" (not "Failed")

**Check logs:**

1. Go to **Settings** → **System** → **Logs**
2. Search for `ultra_card_pro_cloud`
3. Look for any error messages

**Common issues:**

- ❌ **Invalid credentials** - Verify username/password at ultracard.io
- ❌ **No internet connection** - Check HA can reach ultracard.io
- ❌ **Subscription expired** - Renew at ultracard.io

### Integration Shows "Failed to Setup"

1. Check Home Assistant logs for errors
2. Verify ultracard.io is accessible: `https://ultracard.io/wp-json/jwt-auth/v1/`
3. Try removing and re-adding the integration
4. Restart Home Assistant

### Multiple HA Users with Different Subscriptions

Each HA user can have their own Ultra Card Pro Cloud integration configured:

1. Login to HA as **User A**
2. Add integration with **User A's** ultracard.io credentials
3. Login to HA as **User B**
4. Add integration with **User B's** ultracard.io credentials

Each user will see their own PRO features based on their subscription.

## 👨‍💻 Development

### Version Management

This integration uses a **single source of truth** for version numbers:

**To change the version:**

1. Edit `version.py` (in the **root folder**):

   ```python
   __version__ = "1.0.1"  # Change this
   ```

2. Sync to manifest (**REQUIRED before deploying**):

   ```bash
   npm run version:update
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

You have **full manual control** - the deploy script does NOT auto-update the version.

See [VERSION_GUIDE.md](VERSION_GUIDE.md) for detailed documentation.

### Local Development

```bash
# Install dependencies (none required, pure Python + Node deploy script)
npm install

# Update version across all files
npm run version:update

# Deploy to local Home Assistant
npm run deploy
```

## 📝 Changelog

### Version 1.0.2

- **JWT Authentication Pro compatibility** - Full support for JWT Auth Pro plugin with token refresh mechanism
- **Fixed token expiry detection** - Now correctly parses JWT token expiry from the token itself (supports 180+ day tokens)
- **Fixed 202 status handling** - Properly handles HTTP 202 "Accepted" responses from JWT Auth Pro
- **Added rate limiting support** - Handles HTTP 429 responses with proper retry-after delays
- **Added retry logic** - Automatic retries with exponential backoff for transient failures
- **Improved token refresh** - Better handling of refresh tokens with JWT Auth Pro format
- **Reduced logging noise** - Routine polling now uses debug level (quiet logs in production)
- **Better error recovery** - Clears stale tokens after 3 consecutive failures to force fresh authentication

### Version 1.0.1

- **Reduced console logging** - Removed excess debug logging for cleaner output

### Version 1.0.0

- Initial release with cloud authentication and auto-refresh

## 🤝 Support

- **Issues:** [GitHub Issues](https://github.com/WJDDesigns/ultra-card-pro-cloud/issues)
- **Feature Requests:** [GitHub Discussions](https://github.com/WJDDesigns/ultra-card-pro-cloud/discussions)
- **Get PRO Subscription:** [ultracard.io](https://ultracard.io)

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

## 🙏 Credits

Created by [WJD Designs](https://github.com/WJDDesigns) for the Home Assistant community.

Uses [ultracard.io](https://ultracard.io) authentication API.

---

**If this integration makes your life easier, consider [getting PRO](https://ultracard.io) to support development!** ❤️
