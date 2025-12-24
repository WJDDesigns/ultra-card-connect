#!/bin/bash

# Ultra Card Pro Cloud - Icon Fix Deployment Script

echo "🚀 Deploying Ultra Card Pro Cloud with icon fix..."

# Check if we're in the right directory
if [ ! -f "custom_components/ultra_card_pro_cloud/manifest.json" ]; then
    echo "❌ Error: Run this script from the Ultra Card Pro Cloud root directory"
    exit 1
fi

# Verify the manifest has the required fields
echo "📋 Checking manifest.json..."
if ! grep -q '"integration_type"' custom_components/ultra_card_pro_cloud/manifest.json; then
    echo "❌ Error: integration_type missing from manifest.json"
    exit 1
fi

echo "✅ Manifest.json looks correct"

# Check if using entity-level icon (no manifest icon needed)
echo "🖼️  Checking icon configuration..."
if grep -q '"icon":' custom_components/ultra_card_pro_cloud/manifest.json; then
    echo "ℹ️  Manifest has icon field (not needed with entity-level icons)"
else
    echo "✅ Using entity-level icon (no manifest icon needed)"
fi

# Check if icons.json exists for sensor entity
echo "🎨 Checking sensor icon translations..."
if [ ! -f "custom_components/ultra_card_pro_cloud/icons.json" ]; then
    echo "❌ Error: icons.json not found"
    exit 1
fi

echo "✅ Sensor icon translations configured"

# Display the current manifest
echo ""
echo "📄 Current manifest.json:"
cat custom_components/ultra_card_pro_cloud/manifest.json

echo ""
echo "🎨 Sensor icon translations (icons.json):"
cat custom_components/ultra_card_pro_cloud/icons.json

echo ""
echo "📁 Files in integration directory:"
ls -la custom_components/ultra_card_pro_cloud/

echo ""
echo "✅ Ready to deploy!"
echo ""
echo "🔧 To deploy to Home Assistant:"
echo "1. Copy the integration folder to your HA server:"
echo "   scp -r custom_components/ultra_card_pro_cloud root@YOUR_HA_IP:/config/custom_components/"
echo ""
echo "2. Restart Home Assistant:"
echo "   Settings → System → Restart"
echo ""
echo "3. Add the integration:"
echo "   Settings → Devices & Services → Add Integration → Search 'ultra'"
echo ""
echo "The icon should now appear correctly!"
