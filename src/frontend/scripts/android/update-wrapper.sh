#!/bin/bash
set -e

# Android Wrapper Update Script
# This script generates or updates the Android TWA wrapper project using Bubblewrap

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WRAPPER_DIR="$SCRIPT_DIR/../../android-wrapper"
CONFIG_FILE="$WRAPPER_DIR/bubblewrap.config.json"

echo "🔧 Android Wrapper Update Script"
echo "================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js is not installed."
    echo "   Please install Node.js from https://nodejs.org/"
    exit 1
fi

# Check if npx is available
if ! command -v npx &> /dev/null; then
    echo "❌ Error: npx is not available."
    echo "   Please ensure npm is properly installed."
    exit 1
fi

# Check if config file exists
if [ ! -f "$CONFIG_FILE" ]; then
    echo "❌ Error: Configuration file not found at $CONFIG_FILE"
    exit 1
fi

# Check if deployed URL has been updated
if grep -q "YOUR_DEPLOYED_SITE_URL" "$CONFIG_FILE"; then
    echo "❌ Error: Please update the deployed site URL in bubblewrap.config.json"
    echo "   Replace 'YOUR_DEPLOYED_SITE_URL.com' with your actual deployed URL"
    exit 1
fi

echo "📋 Configuration file: $CONFIG_FILE"
echo ""

# Navigate to wrapper directory
cd "$WRAPPER_DIR"

# Check if this is initial setup or update
if [ -d "twa" ]; then
    echo "🔄 Updating existing TWA project..."
    cd twa
    npx @bubblewrap/cli update --manifest="../bubblewrap.config.json"
else
    echo "🆕 Generating new TWA project..."
    npx @bubblewrap/cli init --manifest="$CONFIG_FILE"
fi

echo ""
echo "✅ Android wrapper project updated successfully!"
echo ""
echo "📁 Project location: $WRAPPER_DIR/twa"
echo ""
echo "Next steps:"
echo "  1. Ensure you have a release keystore configured (see keystore.example.properties)"
echo "  2. Run the build script: ./scripts/android/build-release-aab.sh"
echo ""
