#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

console.log("🔨 Building Ultra Card Pro Cloud Integration\n");

// Configuration
const CONFIG = {
  version: null, // Will be read from manifest.json
  sourceDir: "custom_components/ultra_card_pro_cloud",
  distDir: "dist",
  releaseDir: "release",
};

// Read current version from manifest.json
function getCurrentVersion() {
  const manifestPath = path.join(__dirname, CONFIG.sourceDir, "manifest.json");
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  return manifest.version;
}

// Update version in all relevant files
function updateVersions(version) {
  console.log(`📝 Updating version to ${version}\n`);

  // Update manifest.json
  const manifestPath = path.join(__dirname, CONFIG.sourceDir, "manifest.json");
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  manifest.version = version;
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
  console.log("  ✅ Updated manifest.json");

  // Update package.json
  const packagePath = path.join(__dirname, "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"));
  packageJson.version = version;
  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2) + "\n");
  console.log("  ✅ Updated package.json");

  // Update version.py if it exists
  const versionPyPath = path.join(__dirname, "version.py");
  if (fs.existsSync(versionPyPath)) {
    const versionPy = `#!/usr/bin/env python3
"""Version information for Ultra Card Pro Cloud."""

__version__ = "${version}"
`;
    fs.writeFileSync(versionPyPath, versionPy);
    console.log("  ✅ Updated version.py");
  }

  // Update hacs.json
  const hacsPath = path.join(__dirname, "hacs.json");
  if (fs.existsSync(hacsPath)) {
    const hacs = JSON.parse(fs.readFileSync(hacsPath, "utf8"));
    // HACS doesn't have a version field, but we can ensure other fields are correct
    fs.writeFileSync(hacsPath, JSON.stringify(hacs, null, 2) + "\n");
    console.log("  ✅ Validated hacs.json");
  }

  console.log("");
}

// Validate Python files
function validatePython() {
  console.log("🐍 Validating Python files...\n");

  try {
    // Check if Python is available
    execSync("python3 --version", { stdio: "ignore" });

    // Find all Python files
    const pythonFiles = [];
    function findPythonFiles(dir) {
      const items = fs.readdirSync(dir);
      items.forEach((item) => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (
          stat.isDirectory() &&
          !item.startsWith(".") &&
          item !== "__pycache__"
        ) {
          findPythonFiles(fullPath);
        } else if (item.endsWith(".py")) {
          pythonFiles.push(fullPath);
        }
      });
    }

    findPythonFiles(path.join(__dirname, CONFIG.sourceDir));

    // Validate each file
    let hasErrors = false;
    pythonFiles.forEach((file) => {
      try {
        execSync(`python3 -m py_compile "${file}"`, { stdio: "ignore" });
        console.log(`  ✅ ${path.relative(__dirname, file)}`);
      } catch (error) {
        console.log(`  ❌ ${path.relative(__dirname, file)} - Syntax error`);
        hasErrors = true;
      }
    });

    if (hasErrors) {
      console.log("\n⚠️  Some Python files have syntax errors");
      process.exit(1);
    }

    console.log("\n  ✨ All Python files are valid\n");
  } catch (error) {
    console.log("  ⚠️  Python validation skipped (Python not available)\n");
  }
}

// Validate JSON files
function validateJSON() {
  console.log("📋 Validating JSON files...\n");

  const jsonFiles = [
    path.join(CONFIG.sourceDir, "manifest.json"),
    path.join(CONFIG.sourceDir, "strings.json"),
    path.join(CONFIG.sourceDir, "icons.json"),
    path.join(CONFIG.sourceDir, "translations", "en.json"),
    "hacs.json",
    "package.json",
  ];

  let hasErrors = false;
  jsonFiles.forEach((file) => {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
      try {
        JSON.parse(fs.readFileSync(fullPath, "utf8"));
        console.log(`  ✅ ${file}`);
      } catch (error) {
        console.log(`  ❌ ${file} - Invalid JSON: ${error.message}`);
        hasErrors = true;
      }
    }
  });

  if (hasErrors) {
    console.log("\n⚠️  Some JSON files are invalid");
    process.exit(1);
  }

  console.log("\n  ✨ All JSON files are valid\n");
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
      // Skip __pycache__ directories
      if (childItemName === "__pycache__") return;

      copyRecursive(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Create distribution
function createDistribution() {
  console.log("📦 Creating distribution...\n");

  const distPath = path.join(__dirname, CONFIG.distDir);

  // Clean dist directory
  if (fs.existsSync(distPath)) {
    fs.rmSync(distPath, { recursive: true, force: true });
  }
  fs.mkdirSync(distPath, { recursive: true });

  // Copy integration files
  const integrationDistPath = path.join(distPath, "ultra_card_pro_cloud");
  copyRecursive(path.join(__dirname, CONFIG.sourceDir), integrationDistPath);

  console.log(`  ✅ Created distribution in ${CONFIG.distDir}/\n`);
}

// Create release package
function createRelease(version) {
  console.log("📦 Creating release package...\n");

  const releasePath = path.join(__dirname, CONFIG.releaseDir);

  // Clean release directory
  if (fs.existsSync(releasePath)) {
    fs.rmSync(releasePath, { recursive: true, force: true });
  }
  fs.mkdirSync(releasePath, { recursive: true });

  // Create zip file name
  const zipName = `ultra-card-pro-cloud-v${version}.zip`;
  const zipPath = path.join(releasePath, zipName);

  // Create the zip file
  try {
    // First, create a temp directory with proper structure
    const tempDir = path.join(releasePath, "temp");
    fs.mkdirSync(tempDir, { recursive: true });

    // Copy the integration
    copyRecursive(
      path.join(__dirname, CONFIG.sourceDir),
      path.join(tempDir, "ultra_card_pro_cloud")
    );

    // Create the zip
    execSync(
      `cd "${tempDir}" && zip -r "${zipPath}" ultra_card_pro_cloud -x "*.pyc" -x "*__pycache__*"`,
      { stdio: "inherit" }
    );

    // Clean up temp directory
    fs.rmSync(tempDir, { recursive: true, force: true });

    // Copy important files to release directory
    const filesToCopy = ["README.md", "LICENSE", "hacs.json", "info.md"];
    filesToCopy.forEach((file) => {
      const srcFile = path.join(__dirname, file);
      if (fs.existsSync(srcFile)) {
        fs.copyFileSync(srcFile, path.join(releasePath, file));
      }
    });

    console.log(`  ✅ Created release package: ${zipName}`);
    console.log(`  📁 Location: ${releasePath}\n`);
  } catch (error) {
    console.log(`  ❌ Failed to create release: ${error.message}\n`);
    process.exit(1);
  }
}

// Main build process
async function build() {
  // Get current version
  CONFIG.version = getCurrentVersion();
  console.log(`📌 Current version: ${CONFIG.version}\n`);

  // Check for version argument (skip flags)
  const versionArg = process.argv.find(
    (arg) =>
      !arg.startsWith("--") &&
      arg !== process.argv[0] &&
      arg !== process.argv[1]
  );

  if (versionArg) {
    // Validate version format
    if (!/^\d+\.\d+\.\d+$/.test(versionArg)) {
      console.log(
        "❌ Invalid version format. Use: major.minor.patch (e.g., 1.0.1)"
      );
      process.exit(1);
    }
    CONFIG.version = versionArg;
    updateVersions(CONFIG.version);
  }

  // Validate Python files
  validatePython();

  // Validate JSON files
  validateJSON();

  // Create distribution
  createDistribution();

  // Create release if requested
  if (process.argv.includes("--release")) {
    createRelease(CONFIG.version);
  }

  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("✨ Build complete!\n");
  console.log(`📌 Version: ${CONFIG.version}`);
  console.log(`📦 Distribution: ${CONFIG.distDir}/`);
  if (process.argv.includes("--release")) {
    console.log(`🎁 Release: ${CONFIG.releaseDir}/`);
  }
  console.log("\n💡 Next steps:");
  console.log("   • Run 'npm run deploy' to deploy to Home Assistant");
  console.log("   • Run 'npm run build:release' to create a release package");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
}

// Run build
build().catch((error) => {
  console.error("💥 Build error:", error.message);
  process.exit(1);
});
