import React, { useState, useCallback } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import CropCard from '../components/CropCard';
import { getFavorites } from '../utils/Storage';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

const FavoritesScreen = ({ navigation }) => {
    const [favorites, setFavorites] = useState([]);

    useFocusEffect(
        useCallback(() => {
            loadFavorites();
        }, [])
    );

    const loadFavorites = async () => {
        const data = await getFavorites();
        setFavorites(data);
    };

    const renderItem = ({ item }) => (
        <CropCard
            crop={item}
            onPress={() => navigation.navigate('Details', { crop: item })}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Favorites</Text>
            </View>
            {favorites.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>No favorites yet.</Text>
                </View>
            ) : (
                <FlatList
                    data={favorites}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.list}
                    showsVerticalScrollIndicator={false}
                />
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {
        paddingHorizontal: SPACING.m,
        paddingTop: SPACING.s,
        paddingBottom: SPACING.m,
    },
    title: {
        fontSize: FONT_SIZE.xxl,
        fontWeight: '800',
        color: COLORS.text,
    },
    list: {
        paddingHorizontal: SPACING.m,
        paddingBottom: SPACING.l,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: FONT_SIZE.m,
        color: COLORS.textSecondary,
    },
});

export default FavoritesScreen;
