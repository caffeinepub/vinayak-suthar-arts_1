# Specification

## Summary
**Goal:** Make the Android release build produce a clearly named, easy-to-download/share signed Android App Bundle (.aab) in a stable, documented output directory.

**Planned changes:**
- Update the Android release AAB build script/process to copy the generated `app-release.aab` from Gradle’s default output path to a stable, human-friendly output directory under `frontend/android-wrapper`, creating the directory if needed.
- Ensure the build script prints the final stable AAB path at the end of the build for quick locating/downloading/sharing.
- Add/update `.gitignore` to ignore the stable output directory and generated build artifacts.
- Update Android AAB documentation to include an explicit “Where to find the AAB file to download/share” section that names the exact stable directory and filename and matches the script behavior.

**User-visible outcome:** After running the release build, the user can immediately find and download/share the signed `.aab` from a consistent, clearly documented location (while the original Gradle output remains unchanged).
