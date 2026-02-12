#!/bin/bash
set -e

# Android Release AAB Build Script
# This script builds a signed release Android App Bundle

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WRAPPER_DIR="$SCRIPT_DIR/../../android-wrapper"
TWA_DIR="$WRAPPER_DIR/twa"
KEYSTORE_PROPS="$WRAPPER_DIR/keystore.properties"
STABLE_OUTPUT_DIR="$WRAPPER_DIR/out"
STABLE_AAB_PATH="$STABLE_OUTPUT_DIR/app-release.aab"

echo "🏗️  Android Release AAB Build Script"
echo "====================================="
echo ""

# Check if TWA project exists
if [ ! -d "$TWA_DIR" ]; then
    echo "❌ Error: TWA project not found at $TWA_DIR"
    echo "   Please run update-wrapper.sh first to generate the project."
    exit 1
fi

# Check if keystore.properties exists
if [ ! -f "$KEYSTORE_PROPS" ]; then
    echo "❌ Error: keystore.properties not found at $KEYSTORE_PROPS"
    echo ""
    echo "   Please create keystore.properties from keystore.example.properties"
    echo "   and configure your release signing credentials."
    echo ""
    echo "   Steps:"
    echo "   1. Copy keystore.example.properties to keystore.properties"
    echo "   2. Generate a release keystore (see ANDROID_AAB.md for instructions)"
    echo "   3. Update keystore.properties with your keystore details"
    exit 1
fi

# Verify keystore file exists
KEYSTORE_FILE=$(grep "^storeFile=" "$KEYSTORE_PROPS" | cut -d'=' -f2)
if [ -z "$KEYSTORE_FILE" ]; then
    echo "❌ Error: storeFile not specified in keystore.properties"
    exit 1
fi

# Resolve relative keystore path
if [[ "$KEYSTORE_FILE" != /* ]]; then
    KEYSTORE_FILE="$WRAPPER_DIR/$KEYSTORE_FILE"
fi

if [ ! -f "$KEYSTORE_FILE" ]; then
    echo "❌ Error: Keystore file not found at $KEYSTORE_FILE"
    echo "   Please generate your release keystore (see ANDROID_AAB.md)"
    exit 1
fi

echo "✅ Keystore found: $KEYSTORE_FILE"
echo ""

# Navigate to TWA project
cd "$TWA_DIR"

# Check if gradlew exists
if [ ! -f "./gradlew" ]; then
    echo "❌ Error: Gradle wrapper not found in TWA project"
    echo "   The project may not be properly initialized."
    exit 1
fi

# Make gradlew executable
chmod +x ./gradlew

echo "🔨 Building release AAB..."
echo ""

# Build the release bundle
./gradlew bundleRelease

AAB_OUTPUT="$TWA_DIR/app/build/outputs/bundle/release/app-release.aab"

if [ ! -f "$AAB_OUTPUT" ]; then
    echo "❌ Error: AAB file was not generated at expected location"
    echo "   Expected: $AAB_OUTPUT"
    exit 1
fi

echo ""
echo "✅ Release AAB built successfully!"
echo ""

# Create stable output directory if it doesn't exist
mkdir -p "$STABLE_OUTPUT_DIR"

# Copy AAB to stable output location
echo "📦 Copying AAB to stable output location..."
cp "$AAB_OUTPUT" "$STABLE_AAB_PATH"

if [ ! -f "$STABLE_AAB_PATH" ]; then
    echo "⚠️  Warning: Failed to copy AAB to stable output location"
    echo "   Original AAB is still available at: $AAB_OUTPUT"
else
    echo "✅ AAB copied to stable output location"
fi

echo ""
echo "📦 Output locations:"
echo "   Original (Gradle):  $AAB_OUTPUT"
echo "   Stable (Download):  $STABLE_AAB_PATH"
echo ""
echo "📊 File size: $(du -h "$STABLE_AAB_PATH" | cut -f1)"
echo ""
echo "🎉 Your downloadable AAB is ready at:"
echo "   $STABLE_AAB_PATH"
echo ""
echo "Next steps:"
echo "  1. Verify the AAB is signed (see ANDROID_AAB.md for verification steps)"
echo "  2. Test the AAB using Google Play Console's internal testing track"
echo "  3. Upload to Google Play Console for distribution"
echo ""
echo "💡 Tip: You can verify the AAB signature with:"
echo "   jarsigner -verify -verbose -certs $STABLE_AAB_PATH"
echo ""

