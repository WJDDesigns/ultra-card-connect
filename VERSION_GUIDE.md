# Version Management Guide

## Single Source of Truth

The version for Ultra Card Pro Cloud is managed in **one place only**:

```
custom_components/ultra_card_pro_cloud/version.py
```

## How to Change the Version

1. **Edit `version.py`**:

   ```python
   __version__ = "1.0.1"  # Change this number
   ```

2. **Sync to manifest.json** (choose one method):

   **Option A - Using npm:**

   ```bash
   npm run version:update
   ```

   **Option B - Direct command:**

   ```bash
   node update-version.js
   ```

3. **Deploy** (automatic version sync included):

   ```bash
   npm run deploy
   ```

   The deploy script automatically runs `update-version.js` before deploying.

## Files Updated

When you run `update-version.js`, it will:

- ✅ Read version from `version.py`
- ✅ Update `manifest.json` with the new version
- ✅ Show you what changed

## Where Version is Used

The version appears in:

- `manifest.json` - Home Assistant integration metadata
- `__init__.py` - Logs during integration setup
- Home Assistant logs when the integration starts

## Example Workflow

```bash
# 1. Edit version.py in the root folder
# Change: __version__ = "1.0.1"

# 2. Sync the version to manifest.json (REQUIRED)
npm run version:update

# 3. Deploy to Home Assistant
npm run deploy
```

## Important Notes

- 🎯 **Only edit `version.py` (root folder)** - don't manually edit `manifest.json`
- ✋ **Manual control** - You must run `npm run version:update` before deploying
- 📝 Version format: Use semantic versioning (e.g., `1.0.0`, `1.1.0`, `2.0.0-beta1`)
- 📁 The `version.py` file is in the **root folder** for easy access (just like Ultra Card's `src/version.ts`)
