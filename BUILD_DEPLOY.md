# Build & Deploy Guide

## Available Commands

### Build Commands

- `npm run build` - Validates and builds the integration
- `npm run build:release` - Creates a release package with zip file
- `npm run build:deploy` - Builds and deploys to Home Assistant

### Deploy Commands

- `npm run deploy` - Deploys the integration to Home Assistant
- `npm run release` - Alias for build:release

### Version Management

- `npm run version:update` - Updates version across all files
- `npm run build 1.0.2` - Build with specific version update

## Quick Start

### Deploy to Home Assistant

```bash
# Build and deploy in one command
npm run build:deploy
```

### Create a Release

```bash
# Create release package for GitHub/HACS
npm run build:release
```

### Update Version and Release

```bash
# Build with new version and create release
npm run build 1.0.2 --release
```

## What Each Command Does

### `npm run build`

1. Validates all Python files for syntax errors
2. Validates all JSON files (manifest, strings, translations)
3. Creates a clean distribution in `dist/` directory
4. Shows current version from manifest.json

### `npm run build:release`

1. Does everything `build` does
2. Creates a zip file in `release/` directory
3. Copies README, LICENSE, and other docs to release folder
4. Ready for GitHub releases or manual HACS installation

### `npm run deploy`

1. Checks if Home Assistant config is mounted
2. Verifies HA instance is reachable
3. Removes old integration version
4. Copies new files to custom_components
5. Shows next steps for HA restart

## File Structure

```
Ultra Card Pro Cloud/
├── custom_components/          # Source integration files
│   └── ultra_card_pro_cloud/
├── dist/                       # Build output (git ignored)
│   └── ultra_card_pro_cloud/
├── release/                    # Release packages (git ignored)
│   └── ultra-card-pro-cloud-v*.zip
├── build.js                    # Build script
├── deploy.js                   # Deploy script
└── package.json               # NPM scripts
```

## Requirements

- Node.js installed
- Python 3 (optional, for validation)
- Home Assistant config mounted at `/Volumes/config`
- Network access to your HA instance

## Troubleshooting

### Deploy fails with "volume not mounted"

1. Mount your HA config share
2. In Finder: Go → Connect to Server (⌘K)
3. Enter: `smb://YOUR_HA_IP/config`

### Python validation skipped

- Install Python 3 if you want syntax validation
- Build will continue without Python validation

### Integration not showing after deploy

1. Restart Home Assistant
2. Clear browser cache
3. Check Settings → Devices & Services → Add Integration
