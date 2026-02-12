# Building an Android App Bundle (AAB) for Google Play

This comprehensive guide explains how to package the Vinayak Suthar Arts web application into a signed, release-ready Android App Bundle (AAB) for distribution on Google Play Store.

## Overview

This project uses a **Trusted Web Activity (TWA)** approach via Bubblewrap to wrap the deployed web application as a native Android app. The entire process is local and reproducible—**no backend changes are required**.

## Prerequisites

Before you begin, ensure you have:

- **Node.js** (v16 or higher) and npm - [Download here](https://nodejs.org/)
- **Java Development Kit (JDK)** 17 or higher - [Download here](https://adoptium.net/)
- **Android SDK** (can be installed via Android Studio or standalone)
- A **deployed production URL** of your web application (e.g., `https://your-app.ic0.app`)

### Optional but Recommended

- **Android Studio** (latest stable version) - [Download here](https://developer.android.com/studio)
  - Useful for debugging and testing the generated APK/AAB

## Required User-Provided Values

Before building, you must provide the following values:

### 1. Application Identity

Edit `frontend/android-wrapper/bubblewrap.config.json`:

- **`host`**: Your deployed site URL (e.g., `https://your-app.ic0.app`)
- **`packageId`**: Unique Android package name (e.g., `com.vinayaksuthararts.app`)
  - Must be unique on Google Play
  - Use reverse domain notation
  - Cannot be changed after first upload to Play Store
- **`name`**: Full app name (e.g., `Vinayak Suthar Arts`)
- **`launcherName`**: Short name shown under icon (e.g., `VS Arts`)

### 2. Versioning

Edit `frontend/android-wrapper/bubblewrap.config.json`:

- **`appVersionName`**: Human-readable version (e.g., `1.0.0`, `1.1.0`)
- **`appVersionCode`**: Integer version code (e.g., `1`, `2`, `3`)
  - Must increment with each release
  - Google Play uses this to determine which version is newer

### 3. Visual Assets

Update URLs in `bubblewrap.config.json` to point to your deployed assets:

- **`iconUrl`**: App icon (512x512 PNG recommended)
- **`maskableIconUrl`**: Adaptive icon (512x512 PNG)
- **`monochromeIconUrl`**: Monochrome icon for themed icons

### 4. Signing Credentials

You must generate a release keystore for signing your app. See the "Generating a Release Keystore" section below.

## Step-by-Step Build Process

### Step 1: Configure Your Deployed URL

1. Open `frontend/android-wrapper/bubblewrap.config.json`
2. Replace `YOUR_DEPLOYED_SITE_URL.com` with your actual deployed URL
3. Update all asset URLs to point to your deployed site
4. Customize `packageId`, `name`, and other identity fields as needed

Example:

