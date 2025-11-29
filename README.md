# 🌾 Agri Price Checker

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React Native](https://img.shields.io/badge/React%20Native-0.81.5-61DAFB.svg?logo=react)
![Expo](https://img.shields.io/badge/Expo-~54.0-000020.svg?logo=expo)
![License](https://img.shields.io/badge/license-MIT-green.svg)

**Empowering Farmers with Real-Time Market Insights** 📊

*A mobile application providing instant access to agricultural commodity prices, helping farmers make informed selling decisions and maximize profits.*

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Tech Stack](#-tech-stack) • [Screenshots](#-screenshots)

</div>

---

## 📖 About

**Agri Price Checker** is a React Native mobile application designed to solve a critical problem faced by farmers: the lack of real-time market price information. Farmers often sell their produce at lower prices due to insufficient market knowledge, resulting in reduced profits and missed opportunities.

This app provides a simple, accessible solution by offering:
- ✅ Quick access to current crop prices
- ✅ Market-specific pricing information
- ✅ Favorite crops management for faster access
- ✅ Offline functionality with cached data
- ✅ User-friendly interface designed for farmers

**Developer:** Siddu Hamigi (2024-B-08112005A)

---

## ✨ Features

### 🔍 **Smart Crop Search**
- Search through a comprehensive database of agricultural commodities
- Visual crop cards with images for easy identification
- Instant filtering as you type

### 💰 **Real-Time Price Information**
- Current market prices for various crops
- Market location and commodity details
- Pricing trends and market insights

### ⭐ **Favorites Management**
- Save frequently checked crops for quick access
- One-tap access to favorite commodities
- Persistent storage across app sessions

### 📱 **Intuitive Navigation**
- Bottom tab navigation for seamless experience
- Dedicated Home and Favorites screens
- Detailed view for each crop with comprehensive information

### 🔌 **Offline Support**
- Works with previously fetched data
- AsyncStorage for local data persistence
- No internet required for cached information

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React Native** | Cross-platform mobile development |
| **Expo** | Development framework and tooling |
| **React Navigation** | Navigation and routing |
| **AsyncStorage** | Local data persistence |
| **PapaParse** | CSV data parsing |
| **Expo Vector Icons** | Icon library |
| **React Native Gesture Handler** | Touch interactions |

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Expo CLI** (install globally: `npm install -g expo-cli`)
- **Expo Go** app on your mobile device (for testing)

---

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/siddu-09/agri_price_checker.git
   cd agri_price_checker
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   expo start
   ```

4. **Run on your device**
   - Scan the QR code with Expo Go app (Android)
   - Scan the QR code with Camera app (iOS)
   
   Or run on emulator:
   ```bash
   npm run android  # For Android
   npm run ios      # For iOS
   npm run web      # For Web
   ```

---

## 📱 Usage

### Home Screen
1. Browse through available crops displayed as cards
2. Use the search bar to quickly find specific commodities
3. Tap on any crop card to view detailed price information

### Details Screen
- View current market price
- See commodity and market details
- Add/remove crops from favorites
- Access comprehensive pricing information

### Favorites Screen
- Quick access to your saved crops
- Tap on any favorite to view details
- Manage your favorite crops list

---

## 📁 Project Structure

```
agri_price_checker/
├── App.js                      # Main app entry point
├── app.json                    # Expo configuration
├── package.json                # Dependencies and scripts
├── assets/
│   ├── data.csv               # Crop price data
│   └── images/                # App images and icons
├── src/
│   ├── components/
│   │   ├── CropCard.js        # Crop display card component
│   │   └── SearchBar.js       # Search functionality component
│   ├── constants/
│   │   └── theme.js           # App theme and colors
│   ├── screens/
│   │   ├── HomeScreen.js      # Main home screen
│   │   ├── DetailsScreen.js   # Crop details screen
│   │   └── FavoritesScreen.js # Favorites management screen
│   └── utils/
│       ├── DataManager.js     # Data handling utilities
│       └── Storage.js         # AsyncStorage wrapper
└── README.md
```

---

## 🎯 Target Audience

- 👨‍🌾 **Farmers**: Get real-time market prices for crops
- 🏪 **Agricultural Traders**: Monitor commodity prices
- 🛒 **Market Vendors**: Track price trends
- 📊 **Agricultural Students**: Learn about market dynamics


---

## 👨‍💻 Author

**Siddu Hamigi**
- Enrollment Number: 2024-B-08112005A
- GitHub: [@siddu-09](https://github.com/siddu-09)

---

## 🙏 Acknowledgments

- Thanks to all farmers who inspired this project
- React Native and Expo communities for excellent documentation
- Open-source contributors for amazing libraries

---


<div align="center">

**Made with ❤️ for Farmers**

⭐ Star this repository if you find it helpful!

</div>
