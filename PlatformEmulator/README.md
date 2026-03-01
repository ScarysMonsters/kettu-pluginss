# PlatformEmulator

Spoof your Discord platform to appear as Windows, Linux, Android, iOS, Web, or Console.

## Features

- 🎭 Spoof OS detection (Windows, Linux, Darwin, Android, iOS)
- 🌐 Spoof browser/client type
- ⚙️ Easy configuration via settings
- 🔄 Persistent across sessions

## Configuration

1. Install the plugin
2. Go to **Settings → Plugins → PlatformEmulator**
3. Select your desired platform:
   - **Windows** - Appear as Discord Desktop on Windows
   - **Linux** - Appear as Discord Desktop on Linux
   - **Darwin** - Appear as Discord Desktop on macOS
   - **Android** - Appear as Discord Android
   - **iOS** - Appear as Discord iOS
   - **Web** - Appear as Discord Web
   - **Console** - Appear as Discord Embedded (Xbox/PlayStation)
4. **Restart Discord** (required for changes to take effect)

## Technical Details

This plugin patches Discord's native platform detection by modifying the `os` and `browser` properties in the client metadata.

## Changelog

### v1.0.0
- Initial release
- Support for 7 platform types
- Settings integration

## Credits

Created by [Sans](https://github.com/002-sans)
Reworked by 
[ScarysMonsters](https://github.com/ScarysMonsters)