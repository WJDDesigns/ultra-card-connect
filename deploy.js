#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const CONFIG = {
  // Tip: Replace these placeholders with your own instances or use env vars
  instances: [
    {
      name: "My HA",
      url: process.env.HA_URL || "http://192.168.4.244:8123/",
      path:
        process.env.HA_SMB_PATH ||
        "/Volumes/config/custom_components/ultra_card_pro_cloud",
    },
  ],
  sourceDir: "custom_components/ultra_card_pro_cloud",
  // Path to ultra-card-panel.js built by the Ultra Card frontend project.
  // Adjust this path if your Ultra Card repo lives elsewhere.
  panelJsSrc:
    process.env.ULTRA_CARD_PANEL_JS ||
    path.resolve(__dirname, "../Ultra Card/dist/ultra-card-panel.js"),
};

console.log("🚀 Ultra Card Pro Cloud Integration Deployment\n");

// Bundle ultra-card-panel.js and all lazy-load chunks (uc-*.js) into the integration's
// www/ folder so the sidebar panel works. The panel uses code-splitting; chunks must
// be deployed or the panel will 404 when loading Dashboard, Favorites, Account, Pro, etc.
function bundlePanelJs() {
  const wwwDir = path.resolve(__dirname, CONFIG.sourceDir, "www");
  const destFile = path.join(wwwDir, "ultra-card-panel.js");

  if (!fs.existsSync(CONFIG.panelJsSrc)) {
    console.error(
      `❌ ultra-card-panel.js not found at: ${CONFIG.panelJsSrc}\n` +
        "   Build the Ultra Card project first (npm run build), or set\n" +
        "   ULTRA_CARD_PANEL_JS env var to the correct path.\n" +
        "   Deployment aborted so the integration is never deployed without the panel.\n"
    );
    process.exit(1);
  }

  if (!fs.existsSync(wwwDir)) {
    fs.mkdirSync(wwwDir, { recursive: true });
  }

  fs.copyFileSync(CONFIG.panelJsSrc, destFile);
  const sizeKb = Math.round(fs.statSync(destFile).size / 1024);
  console.log(`📦 Bundled ultra-card-panel.js → ${CONFIG.sourceDir}/www/ (${sizeKb} KB)`);

  // Copy all panel lazy-load chunks (uc-*.js) from the same dist so dynamic imports resolve.
  // Without these, the panel will 404 when opening Dashboard, Favorites, Account, Pro tabs.
  const distDir = path.dirname(CONFIG.panelJsSrc);
  let chunkCount = 0;
  if (fs.existsSync(distDir)) {
    const files = fs.readdirSync(distDir);
    for (const name of files) {
      // Match uc-<id>.js (e.g. uc-980.js) but not ultra-card-panel.js
      if (name.startsWith("uc-") && name.endsWith(".js") && name !== "ultra-card-panel.js") {
        const src = path.join(distDir, name);
        const dest = path.join(wwwDir, name);
        fs.copyFileSync(src, dest);
        chunkCount++;
      }
    }
  }
  if (chunkCount > 0) {
    console.log(`📦 Bundled ${chunkCount} panel chunk(s) (uc-*.js) → ${CONFIG.sourceDir}/www/`);
  } else {
    console.log(
      `⚠️  No uc-*.js chunks found in ${distDir}. Build the Ultra Card project with 'npm run build' first, then run deploy again.`
    );
  }
  console.log("");
  return true;
}

// Check if volume is mounted
function isVolumeMounted() {
  try {
    return fs.existsSync("/Volumes/config");
  } catch (error) {
    return false;
  }
}

// Check if HA instance is reachable
function checkInstance(url) {
  try {
    execSync(`curl -s --connect-timeout 2 "${url}" > /dev/null 2>&1`, {
      stdio: "ignore",
    });
    return true;
  } catch (error) {
    return false;
  }
}

// Copy directory recursively
function copyRecursive(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursive(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Count files in directory
function countFiles(dir) {
  let count = 0;
  const items = fs.readdirSync(dir);

  items.forEach((item) => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      count += countFiles(fullPath);
    } else {
      count++;
    }
  });

  return count;
}

// Deploy integration to target path
function deployIntegration(targetPath) {
  try {
    const sourcePath = path.resolve(__dirname, CONFIG.sourceDir);

    if (!fs.existsSync(sourcePath)) {
      console.log(`  ❌ Source not found: ${sourcePath}`);
      return false;
    }

    // Create parent directory
    const parentDir = path.dirname(targetPath);
    if (!fs.existsSync(parentDir)) {
      console.log(`  📁 Creating directory: ${parentDir}`);
      fs.mkdirSync(parentDir, { recursive: true });
    }

    // Samba/network shares can fail when removing a non-empty integration directory
    // (observed ENOTEMPTY on /Volumes/config). Deploy in place instead of deleting
    // the root folder so updated panel chunks always make it to Home Assistant.
    if (!fs.existsSync(targetPath)) {
      console.log(`  📁 Creating integration directory...`);
      fs.mkdirSync(targetPath, { recursive: true });
    }

    // Copy integration files
    console.log(`  📦 Copying integration files...`);
    copyRecursive(sourcePath, targetPath);

    // Count files
    const fileCount = countFiles(targetPath);
    console.log(`  ✅ Deployed ${fileCount} files`);

    return true;
  } catch (error) {
    console.error(`  ❌ Deployment failed: ${error.message}`);
    return false;
  }
}

// Main deployment process
async function deploy() {
  // Bundle panel JS into integration www/ folder before deploying (exits if panel missing)
  bundlePanelJs();

  // Check if volume is mounted
  if (!isVolumeMounted()) {
    console.log("❌ Config volume not mounted at /Volumes/config");
    console.log("   Please mount your Home Assistant config volume first.");
    console.log("\n💡 How to mount (if not already):");
    console.log("   1. In Finder: Go → Connect to Server (⌘K)");
    console.log("   2. Enter: smb://192.168.4.244/config");
    console.log("   3. Or use your HA Samba share\n");
    process.exit(1);
  }

  console.log("✅ Config volume is mounted\n");

  // Check which instances are available
  console.log("🔍 Checking Home Assistant instances...\n");

  let deployed = false;
  for (const instance of CONFIG.instances) {
    console.log(`📡 ${instance.name} (${instance.url})`);

    const isReachable = checkInstance(instance.url);
    if (isReachable) {
      console.log("  ✅ Instance is reachable");

      if (deployIntegration(instance.path)) {
        console.log("  🎉 Integration deployed successfully!\n");
        deployed = true;
      } else {
        console.log("  ❌ Deployment failed\n");
      }
    } else {
      console.log("  ⚠️  Instance not reachable (skipping)\n");
    }
  }

  if (deployed) {
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("✨ Deployment complete!\n");
    console.log("⚠️  Next Steps:");
    console.log("   1. Restart Home Assistant");
    console.log("      → http://192.168.4.244:8123/config/server_control");
    console.log("   2. Go to Settings → Devices & Services");
    console.log("   3. Click '+ Add Integration'");
    console.log("   4. Search for 'Ultra Card Pro Cloud'");
    console.log("   5. Enter your ultracard.io credentials");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
  } else {
    console.log("⚠️  No instances were successfully deployed to.\n");
    process.exit(1);
  }
}

// Run deployment
deploy().catch((error) => {
  console.error("💥 Deployment error:", error.message);
  process.exit(1);
});
