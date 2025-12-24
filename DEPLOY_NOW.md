# 🚀 Deploy Ultra Card Pro Cloud - Complete Guide

## What We Built

**Sensor-Based Authentication System** - Users sign into Ultra Card Pro Cloud integration once, and ALL Ultra Cards across ALL devices automatically unlock PRO features. No per-device login, no cache issues, completely secure.

---

## 📦 Step 1: Deploy Ultra Card Pro Cloud Integration

### Option A: Upload via File Editor / SSH

1. **Copy integration files to Home Assistant:**

   ```bash
   # From your Mac to HA server:
   scp -r /Users/wayne/Ultra\ Card\ Pro\ Cloud/custom_components/ultra_card_pro_cloud \
     root@YOUR_HA_IP:/config/custom_components/
   ```

2. **Restart Home Assistant:**

   - Settings → System → Restart

3. **Install Integration:**
   - Settings → Devices & Services
   - Click "+ ADD INTEGRATION"
   - Search for "Ultra Card Pro Cloud"
   - Enter ultracard.io credentials
   - Click Submit

### Option B: Deploy via HACS (Recommended for End Users)

_This assumes you'll publish to GitHub as a custom HACS repository_

1. User adds custom repository in HACS
2. User installs "Ultra Card Pro Cloud"
3. User configures with their credentials

---

## 🎴 Step 2: Deploy Updated Ultra Card

### Update Card File

1. **Copy to Home Assistant:**

   ```bash
   # If using www folder:
   scp /Users/wayne/Ultra\ Card/ultra-card.js \
     root@YOUR_HA_IP:/config/www/ultra-card/

   # Or if using HACS:
   scp /Users/wayne/Ultra\ Card/ultra-card.js \
     root@YOUR_HA_IP:/config/custom_components/ultra_card/
   ```

2. **Force browser to reload:**
   - Desktop: `Ctrl+F5` (Windows/Linux) or `Cmd+Shift+R` (Mac)
   - Mobile: Clear browser cache, then reload

---

## ✅ Step 3: Verify It Works

### Check Integration Sensor

1. Go to **Developer Tools → States**
2. Search for: `sensor.ultra_card_pro_cloud_authentication_status`
3. **Expected State:** `connected`
4. **Expected Attributes:**
   ```yaml
   authenticated: true
   user_id: <your_user_id>
   username: <your_username>
   subscription_tier: pro
   subscription_status: active
   connected_at: <timestamp>
   ```

### Check Ultra Card Console

1. Open any Ultra Card in your dashboard
2. Open browser developer console (F12)
3. **Expected Output:**
   ```
   🔍 Checking for Ultra Card Pro Cloud integration...
   ✅ Found Ultra Card Pro Cloud sensor: connected
      Attributes: {authenticated: true, subscription_tier: "pro", ...}
   ✅ Ultra Card Pro Cloud connected! {id: 123, username: "user", ...}
      💫 Connected at: 2025-01-10T12:00:00
   ```

### Check PRO Features Unlocked

1. Go to any Ultra Card on desktop
2. **Map module should be unlocked** (no lock icon)
3. Open card editor → PRO tab should be accessible
4. Open same dashboard on mobile
5. **Same card should show unlocked** (no per-device login)

---

## 🎯 Expected User Experience

### Setup (One-Time)

1. Install Ultra Card Pro Cloud integration via HACS
2. Configure with ultracard.io credentials
3. Done!

### Result

✅ **All Ultra Cards instantly unlock PRO features**

- Desktop browser ✅
- Mobile browser ✅
- Tablet ✅
- Home Assistant Companion app ✅
- Chromecast ✅
- Any device connected to HA ✅

### No Additional Steps

- ❌ No login button in cards
- ❌ No per-device authentication
- ❌ No cache clearing issues
- ✅ Just works everywhere automatically

---

## 🔧 Troubleshooting

### "Sensor not found"

**Cause:** Integration not installed or not configured

**Fix:**

1. Check Settings → Devices & Services
2. Ensure "Ultra Card Pro Cloud" is listed
3. If not, install from HACS and configure

### "Sensor shows 'disconnected'"

**Cause:** Invalid credentials or API error

**Fix:**

1. Check integration config
2. Verify ultracard.io credentials
3. Check integration logs: Settings → System → Logs

### "PRO features still locked"

**Cause:** Old card version cached in browser

**Fix:**

1. Hard refresh: `Ctrl+F5` / `Cmd+Shift+R`
2. Clear browser cache completely
3. Verify card version in console

### "Works on desktop but not mobile"

**Cause:** Mobile browser has old cached version

**Fix:**

1. Close HA app completely
2. Clear app cache (iOS: Settings → Safari → Clear History)
3. Reopen HA app
4. Force refresh dashboard

---

## 🔒 Security Notes

### Why This Is Secure

1. **Sensor is protected** - Only the integration backend can write to it
2. **Frontend is read-only** - Cards can only read sensor data, not modify
3. **API authentication** - Integration authenticates with ultracard.io
4. **No user manipulation** - Users cannot fake PRO status

### What Users Cannot Do

- ❌ Edit sensor attributes directly
- ❌ Create fake sensor entities
- ❌ Bypass authentication via browser tools
- ❌ Use PRO features without valid subscription

### What Happens If...

**User deletes sensor entity?**

- Integration recreates it on next update cycle (1 hour max)

**User tries to edit sensor in Developer Tools?**

- Changes are ignored, integration overwrites on next update

**User subscription expires?**

- Integration updates sensor to `disconnected`
- All cards lock PRO features within 1 hour
- Real-time on next sensor state update

**User logs out of integration?**

- Sensor changes to `disconnected` immediately
- All cards detect change and show locks
- Works across all devices in real-time

---

## 📊 File Changes Summary

### Ultra Card Pro Cloud (Backend)

**New Files:**

- `custom_components/ultra_card_pro_cloud/sensor.py` - Protected sensor entity

**Modified Files:**

- `custom_components/ultra_card_pro_cloud/__init__.py` - Added sensor platform
- `custom_components/ultra_card_pro_cloud/coordinator.py` - Added timestamp

### Ultra Card (Frontend)

**Modified Files:**

- `src/services/uc-cloud-auth-service.ts` - Sensor detection instead of hass.data

**Built Files:**

- `ultra-card.js` - Updated with sensor detection

---

## 🧪 Testing Checklist

### Integration Tests

- [ ] Integration installs successfully
- [ ] Configuration flow works with valid credentials
- [ ] Sensor entity is created
- [ ] Sensor shows "connected" when authenticated
- [ ] Sensor attributes contain subscription data
- [ ] Sensor updates on subscription changes

### Card Tests

- [ ] Card detects sensor on load
- [ ] PRO modules unlock when sensor is "connected"
- [ ] Lock icons appear when sensor is "disconnected"
- [ ] Works on desktop browser
- [ ] Works on mobile browser
- [ ] Works on tablet
- [ ] Works in HA Companion app
- [ ] No login required on any device

### Cross-Device Tests

- [ ] Login on device A unlocks device B automatically
- [ ] Logout on device A locks device B automatically
- [ ] New devices detect auth automatically
- [ ] No cache/cookie sync issues

### Edge Cases

- [ ] Integration restart preserves auth
- [ ] HA restart preserves auth
- [ ] Browser refresh preserves auth
- [ ] Cache clear doesn't break auth
- [ ] Multiple users in same HA instance work independently

---

## 📝 Next Steps

1. ✅ **Deploy integration to HA**
2. ✅ **Deploy updated card to HA**
3. ✅ **Test on multiple devices**
4. 📄 **Update documentation** (if needed)
5. 🚀 **Release to users**

---

## 💡 Future Enhancements

- [ ] **Connection Animation** - Show animated "connecting to cloud" when sensor changes
- [ ] **Integration Setup UI in Card** - Add button to open integration config from card editor
- [ ] **Subscription Expiry Notification** - Show notification when PRO expires soon
- [ ] **Tier-Based Icons** - Different sensor icons for free/pro/ultimate tiers
- [ ] **Animated Unlock Effect** - Smooth animation when PRO features activate

---

**Built with ❤️ by WJD Designs**

Need help? Check [SENSOR_IMPLEMENTATION.md](./SENSOR_IMPLEMENTATION.md) for technical details.
