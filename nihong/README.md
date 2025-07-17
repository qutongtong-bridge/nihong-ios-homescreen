# Nihong - iOS Style Home Screen

A React Native implementation of an iOS-style home screen based on the provided screenshot.

## Features

- iOS-style app grid layout
- Gradient background
- Status bar with carrier, time, and battery
- App icons with rounded corners
- Dock bar with blur effect
- Page indicator dots
- Support for app badges (STAGING labels)

## Installation

```bash
cd nihong
npm install
```

### iOS Setup
```bash
cd ios && pod install
cd ..
npm run ios
```

### Android Setup
```bash
npm run android
```

## Project Structure

```
nihong/
├── src/
│   ├── index.js              # Main app entry point
│   ├── screens/
│   │   └── HomeScreen.js     # Main home screen component
│   ├── components/
│   │   ├── Header.js         # Status bar component
│   │   ├── AppGrid.js        # App grid layout
│   │   ├── AppIcon.js        # Individual app icon
│   │   ├── DockBar.js        # Bottom dock with blur
│   │   └── PageIndicator.js  # Page dots
│   └── assets/
│       └── icons/            # App icon images (to be added)
└── package.json
```

## Notes

- App icon images need to be added to `src/assets/icons/`
- The gradient background uses `react-native-linear-gradient`
- Blur effect requires `@react-native-community/blur`
- Icons use `react-native-vector-icons`