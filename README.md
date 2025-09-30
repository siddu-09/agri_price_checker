# Agri Price Checker

A simple agriculture price checker app with a Node.js backend and React Native (Expo) mobile frontend.

## Project Structure

```
agri-price-checker/
├─ backend/
│  ├─ data/
│  │  └─ prices.json
│  ├─ package.json
│  └─ index.js
├─ mobile/
│  ├─ App.js
│  ├─ app.json
│  ├─ package.json
│  ├─ babel.config.js
│  ├─ assets/
│  │  └─ images/         (crop images)
│  ├─ src/
│  │  ├─ api/
│  │  │  └─ pricesApi.js
│  │  ├─ components/
│  │  │  ├─ CropCard.js
│  │  │  └─ SearchBar.js
│  │  ├─ hooks/
│  │  │  └─ useLocalization.js
│  │  ├─ screens/
│  │  │  ├─ HomeScreen.js
│  │  │  ├─ CropDetailsScreen.js
│  │  │  ├─ FavoritesScreen.js
│  │  │  └─ SettingsScreen.js
│  │  └─ utils/
│  │     └─ storage.js
└─ README.md
```

## How to Run

### Backend

```
cd backend
npm install
npm run start
# Server: http://localhost:4000/api/prices
```

### Mobile (Expo)

```
cd mobile
npm install
npx expo start
```

- For Android emulator, API base URL is `http://10.0.2.2:4000`.
- For physical device, replace with your PC's LAN IP (e.g. `http://192.168.0.100:4000`).

## Features

- Crop price list and search
- Crop details with 7-day price chart
- Favorites (persisted)
- Offline cache (AsyncStorage)
- Simple localization (expandable)

## Notes

- Add images to `mobile/assets/images/` and (optionally) `backend/public/images/`.
- For production, use a real database and secure API.
