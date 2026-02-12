# Android Wrapper Setup

This directory contains the configuration and setup for building an Android App Bundle (AAB) from the deployed Vinayak Suthar Arts web application.

## Overview

This setup uses **Bubblewrap** to generate a Trusted Web Activity (TWA) wrapper that packages the web app as a native Android application. The process is entirely local and reproducible—no backend changes are required.

## Quick Start

1. **Set your deployed site URL** in `bubblewrap.config.json`
2. **Generate/update the wrapper project**: Run `../scripts/android/update-wrapper.sh`
3. **Build the release AAB**: Run `../scripts/android/build-release-aab.sh`

## What's Included

- `bubblewrap.config.json` - Configuration template for the Android wrapper
- `keystore.example.properties` - Example signing configuration (copy and customize)
- `.gitignore` - Protects sensitive files from being committed

## Output Location

After a successful release build, the signed AAB will be available at:

**Stable output path (recommended for download/sharing):**
