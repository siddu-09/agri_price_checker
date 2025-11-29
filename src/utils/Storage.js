import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = '@agri_price_checker_favorites';

export const getFavorites = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(FAVORITES_KEY);
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
        console.error('Error reading favorites:', e);
        return [];
    }
};

export const addFavorite = async (crop) => {
    try {
        const favorites = await getFavorites();
        const isAlreadyFavorite = favorites.some((f) => f.id === crop.id);
        if (!isAlreadyFavorite) {
            const newFavorites = [...favorites, crop];
            await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
            return true;
        }
        return false;
    } catch (e) {
        console.error('Error adding favorite:', e);
        return false;
    }
};

export const removeFavorite = async (cropId) => {
    try {
        const favorites = await getFavorites();
        const newFavorites = favorites.filter((f) => f.id !== cropId);
        await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
        return true;
    } catch (e) {
        console.error('Error removing favorite:', e);
        return false;
    }
};

export const isFavorite = async (cropId) => {
    try {
        const favorites = await getFavorites();
        return favorites.some((f) => f.id === cropId);
    } catch (e) {
        console.error('Error checking favorite:', e);
        return false;
    }
};
