import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, FONT_SIZE, SHADOWS } from '../constants/theme';
import { addFavorite, removeFavorite, isFavorite } from '../utils/Storage';

const DetailsScreen = ({ route, navigation }) => {
    const { crop } = route.params;
    const [favorited, setFavorited] = useState(false);

    useEffect(() => {
        checkFavoriteStatus();
    }, []);

    const checkFavoriteStatus = async () => {
        const status = await isFavorite(crop.id);
        setFavorited(status);
    };

    const toggleFavorite = async () => {
        if (favorited) {
            await removeFavorite(crop.id);
            setFavorited(false);
        } else {
            await addFavorite(crop);
            setFavorited(true);
            Alert.alert('Success', 'Added to favorites');
        }
    };

    return (
        <SafeAreaView style={styles.container} edges={['bottom']}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: crop.image }} style={styles.image} resizeMode="contain" />
                </View>

                <View style={styles.detailsContainer}>
                    <View style={styles.headerRow}>
                        <View>
                            <Text style={styles.name}>{crop.name}</Text>
                            <Text style={styles.category}>{crop.category}</Text>
                        </View>
                        <TouchableOpacity onPress={toggleFavorite} style={styles.favButton}>
                            <Ionicons
                                name={favorited ? "heart" : "heart-outline"}
                                size={28}
                                color={favorited ? COLORS.error : COLORS.textSecondary}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.priceCard}>
                        <Text style={styles.priceLabel}>Current Price</Text>
                        <View style={styles.priceRow}>
                            <Text style={styles.price}>₹{crop.price}</Text>
                            <Text style={styles.unit}>/kg</Text>
                        </View>
                        <Text style={styles.market}>{crop.market}</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Price Trend (Last 7 Days)</Text>
                        <View style={styles.trendPlaceholder}>
                            <Text style={styles.trendText}>Chart placeholder</Text>
                            <View style={styles.barContainer}>
                                {[40, 60, 35, 80, 50, 70, 90].map((h, i) => (
                                    <View key={i} style={[styles.bar, { height: h, backgroundColor: COLORS.secondary }]} />
                                ))}
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color={COLORS.text} />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    scrollContent: {
        paddingBottom: SPACING.xl,
    },
    imageContainer: {
        height: 300,
        backgroundColor: COLORS.card,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        ...SHADOWS.medium,
        marginBottom: SPACING.m,
    },
    image: {
        width: 200,
        height: 200,
    },
    detailsContainer: {
        paddingHorizontal: SPACING.l,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: SPACING.l,
    },
    name: {
        fontSize: FONT_SIZE.xxl,
        fontWeight: '800',
        color: COLORS.text,
    },
    category: {
        fontSize: FONT_SIZE.m,
        color: COLORS.textSecondary,
        marginTop: SPACING.xs,
    },
    favButton: {
        padding: SPACING.s,
        backgroundColor: COLORS.card,
        borderRadius: 50,
        ...SHADOWS.small,
    },
    priceCard: {
        backgroundColor: COLORS.primary,
        borderRadius: 20,
        padding: SPACING.l,
        marginBottom: SPACING.l,
        ...SHADOWS.medium,
    },
    priceLabel: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: FONT_SIZE.s,
        marginBottom: SPACING.xs,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    price: {
        fontSize: 48,
        fontWeight: '800',
        color: '#fff',
    },
    unit: {
        fontSize: FONT_SIZE.m,
        color: 'rgba(255,255,255,0.8)',
        marginLeft: SPACING.xs,
    },
    market: {
        color: 'rgba(255,255,255,0.9)',
        fontSize: FONT_SIZE.m,
        marginTop: SPACING.s,
        fontWeight: '600',
    },
    section: {
        marginBottom: SPACING.l,
    },
    sectionTitle: {
        fontSize: FONT_SIZE.l,
        fontWeight: '700',
        color: COLORS.text,
        marginBottom: SPACING.m,
    },
    trendPlaceholder: {
        backgroundColor: COLORS.card,
        borderRadius: 16,
        padding: SPACING.m,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.small,
    },
    trendText: {
        color: COLORS.textSecondary,
        marginBottom: SPACING.m,
    },
    barContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        height: 80,
        width: '100%',
        justifyContent: 'space-around',
    },
    bar: {
        width: 20,
        borderRadius: 4,
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: SPACING.m,
        backgroundColor: COLORS.card,
        padding: SPACING.s,
        borderRadius: 50,
        ...SHADOWS.small,
    },
});

export default DetailsScreen;
