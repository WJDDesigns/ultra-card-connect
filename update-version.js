#!/usr/bin/env node

/**
 * Update version across all integration files
 * This reads from version.py and updates manifest.json
 *
 * Usage: node update-version.js
 */

const fs = require("fs");
const path = require("path");

const VERSION_FILE = path.join(__dirname, "version.py");
const MANIFEST_FILE = path.join(
  __dirname,
  "custom_components/ultra_card_pro_cloud/manifest.json"
);

console.log("🔄 Updating Ultra Card Pro Cloud version...\n");

// Read version from version.py
let version = "";
try {
  const versionContent = fs.readFileSync(VERSION_FILE, "utf8");
  const match = versionContent.match(/__version__\s*=\s*["'](.+?)["']/);

  if (!match) {
    console.error("❌ Could not find __version__ in version.py");
    process.exit(1);
  }

  version = match[1];
  console.log(`✅ Found version in version.py: ${version}`);
} catch (error) {
  console.error(`❌ Error reading version.py: ${error.message}`);
  process.exit(1);
}

// Update manifest.json
try {
  const manifestContent = fs.readFileSync(MANIFEST_FILE, "utf8");
  const manifest = JSON.parse(manifestContent);

  const oldVersion = manifest.version;
  manifest.version = version;

  fs.writeFileSync(MANIFEST_FILE, JSON.stringify(manifest, null, 2) + "\n");
  console.log(`✅ Updated manifest.json: ${oldVersion} → ${version}`);
} catch (error) {
  console.error(`❌ Error updating manifest.json: ${error.message}`);
  process.exit(1);
}

console.log("\n🎉 Version update complete!\n");
console.log("📝 Changed files:");
console.log("   - custom_components/ultra_card_pro_cloud/manifest.json\n");
