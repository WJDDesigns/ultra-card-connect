# Ultra Card Pro Cloud - Sensor-Based Authentication

## Overview

Ultra Card Pro Cloud now exposes authentication status via a **protected sensor entity** that users cannot manipulate. This provides secure, automatic PRO feature unlocking across all devices connected to the same Home Assistant instance.

## How It Works

### 1. **Integration Creates Protected Sensor**

When you sign into Ultra Card Pro Cloud:

```
sensor.ultra_card_pro_cloud_authentication_status
├─ State: "connected" (when authenticated)
├─ Attributes:
   ├─ authenticated: true
   ├─ user_id: 123
   ├─ username: "your_username"
   ├─ email: "your@email.com"
   ├─ display_name: "Your Name"
   ├─ subscription_tier: "pro"
   ├─ subscription_status: "active"
   ├─ subscription_expires: "2025-12-31"
   ├─ connected_at: "2025-01-10T12:00:00"
   └─ features: {...}
```

### 2. **Ultra Card Detects Sensor Automatically**

Any Ultra Card instance in Home Assistant will automatically:

1. Check for the sensor on load
2. Read the protected attributes
3. Unlock PRO features if authenticated
4. Update in real-time when auth status changes

### 3. **Cross-Device Magic**

- Sign in once via the integration config
- ALL cards on ALL devices instantly unlock PRO features
- No need to log in separately on each device
- No cookies, no localStorage, no sync issues

## Security Features

### Protected Sensor

- **Users cannot edit** sensor attributes directly
- **Only the integration** can update the sensor
- **Sensor data comes from ultracard.io** API after authentication
- **No way to fake PRO status** without valid credentials

### Read-Only for Frontend

- Frontend cards can only **read** the sensor
- They cannot **write** or **modify** sensor data
- The sensor is the **single source of truth**

## File Structure

```
custom_components/ultra_card_pro_cloud/
├── __init__.py          # Integration setup
├── sensor.py            # NEW: Sensor platform (protected entity)
├── coordinator.py       # Data fetching from API
├── config_flow.py       # Configuration UI
└── const.py             # Constants
```

## Implementation Details

### Sensor Entity (`sensor.py`)

**Entity ID:** `sensor.ultra_card_pro_cloud_authentication_status`

**States:**

- `connected` - User authenticated, PRO features unlocked
- `disconnected` - Not authenticated
- `authenticating` - Login in progress

**Attributes (when connected):**

```python
{
    "authenticated": True,
    "user_id": 123,
    "username": "user",
    "email": "user@example.com",
    "display_name": "User Name",
    "subscription_tier": "pro",  # or "free"
    "subscription_status": "active",  # or "expired"
    "subscription_expires": "2025-12-31T23:59:59",
    "connected_at": "2025-01-10T12:00:00",
    "features": {
        "auto_backups": True,
        "snapshots_enabled": True,
        "snapshot_limit": 10,
        "backup_retention_days": 90
    }
}
```

### Ultra Card Detection (`uc-cloud-auth-service.ts`)

```typescript
checkIntegrationAuth(hass: any): CloudUser | null {
  const sensorEntityId = 'sensor.ultra_card_pro_cloud_authentication_status';
  const sensorState = hass?.states?.[sensorEntityId];

  if (!sensorState || sensorState.state !== 'connected') {
    return null; // Not authenticated
  }

  // Read protected attributes and unlock PRO features
  return convertToCloudUser(sensorState.attributes);
}
```

## User Experience

### Setup (One-Time)

1. Install "Ultra Card Pro Cloud" from HACS
2. Go to Settings → Devices & Services → Add Integration
3. Search for "Ultra Card Pro Cloud"
4. Enter your ultracard.io credentials
5. Click Submit

### Result

✅ **All Ultra Cards instantly unlock PRO features**

- Map module unlocked
- PRO dashboard access
- Advanced features enabled
- Works on desktop, mobile, tablets
- Works in the app and web browsers

### No Additional Steps Needed

- No login button in each card
- No per-device authentication
- No cache clearing issues
- Just works everywhere automatically

## Deployment

### For Ultra Card Pro Cloud Integration

1. **Copy updated files:**

   ```bash
   cp -r custom_components/ultra_card_pro_cloud \
     /config/custom_components/
   ```

2. **Restart Home Assistant**

3. **Configure integration** (if not already done):
   - Settings → Devices & Services → Add Integration
   - Search "Ultra Card Pro Cloud"
   - Enter credentials

### For Ultra Card

1. **Deploy updated `ultra-card.js`:**

   ```bash
   cp ultra-card.js /config/www/ultra-card/
   ```

2. **Hard refresh** browser (Ctrl+F5)

## Testing Checklist

- [ ] Integration creates sensor after authentication
- [ ] Sensor shows "connected" state when authenticated
- [ ] Sensor attributes contain valid subscription data
- [ ] Ultra Card detects sensor automatically
- [ ] PRO modules unlock when sensor is "connected"
- [ ] Lock icon appears when sensor is "disconnected"
- [ ] Works on multiple devices simultaneously
- [ ] Sensor updates when subscription changes
- [ ] Re-login updates sensor attributes

## Troubleshooting

### "PRO modules still locked"

**Check sensor state:**

```yaml
Developer Tools → States →
sensor.ultra_card_pro_cloud_authentication_status
```

**Expected:** State should be `connected`

**If disconnected:**

1. Check integration config
2. Verify ultracard.io credentials
3. Check integration logs

### "Sensor not found"

**Check integration is installed:**

```
Settings → Devices & Services → Ultra Card Pro Cloud
```

**If not listed:**

1. Install from HACS
2. Restart Home Assistant
3. Configure integration

### "Sensor shows 'connected' but cards still locked"

1. Hard refresh browser (Ctrl+F5 / Cmd+Shift+R)
2. Clear browser cache
3. Check Ultra Card version (needs v2.0-beta8+)
4. Check browser console for errors

## Console Output

### When Integration Connected

```
✅ Found Ultra Card Pro Cloud sensor: connected
   Attributes: {authenticated: true, subscription_tier: "pro", ...}
✅ Ultra Card Pro Cloud connected! {id: 123, username: "user", ...}
   💫 Connected at: 2025-01-10T12:00:00
```

### When Integration Not Installed

```
📝 Ultra Card Pro Cloud integration not installed (sensor not found)
```

### When Integration Installed But Not Authenticated

```
✅ Found Ultra Card Pro Cloud sensor: disconnected
📝 Integration installed but not authenticated
```

## Architecture Benefits

### Why Sensor > localStorage/Cookies?

| Feature              | Sensor       | localStorage | Cookies       |
| -------------------- | ------------ | ------------ | ------------- |
| Cross-device sync    | ✅ Automatic | ❌ Manual    | ⚠️ Per-domain |
| User can't fake      | ✅ Yes       | ❌ No        | ❌ No         |
| No CORS issues       | ✅ Yes       | ✅ Yes       | ❌ No         |
| Real-time updates    | ✅ Yes       | ❌ No        | ❌ No         |
| Survives cache clear | ✅ Yes       | ❌ No        | ❌ No         |
| Works offline        | ✅ Yes       | ⚠️ Partial   | ⚠️ Partial    |

### Security Model

```
ultracard.io API
    ↓ (JWT auth)
Integration Backend (Python)
    ↓ (Protected write)
Sensor Entity (HA core)
    ↓ (Read-only)
Ultra Card Frontend (TypeScript)
    ↓ (Display)
User Browser
```

**Users cannot bypass any step in this chain.**

## Future Enhancements

- [ ] Connection animation in card when sensor changes
- [ ] Notification when PRO expires
- [ ] Integration config panel in card editor
- [ ] Sensor icon changes based on subscription tier
- [ ] Animated "unlocking" effect when PRO activates

---

**Built with ❤️ by WJD Designs**
