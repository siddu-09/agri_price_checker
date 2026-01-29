import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SPACING, FONT_SIZE, SHADOWS } from '../constants/theme';
import { Ionicons } from '@expo/vector-icons';

const CropCard = ({ crop, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.card}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <View style={styles.imageContainer}>
                <Image source={{ uri: crop.image }} style={styles.image} resizeMode="contain" />
            </View>

            <View style={styles.details}>
                <Text style={styles.name}>{crop.name}</Text>
                <View style={styles.locationRow}>
                    <Ionicons name="location-outline" size={12} color={COLORS.textSecondary} />
                    <Text style={styles.market} numberOfLines={1}>{crop.market}</Text>
                </View>
            </View>

            <View style={styles.priceContainer}>
                <Text style={styles.currency}>₹</Text>
                <Text style={styles.price}>{crop.price}</Text>
                <Text style={styles.unit}>/kg</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: COLORS.card,
        borderRadius: 20,
        padding: SPACING.m,
        marginBottom: SPACING.m,
        alignItems: 'center',
        ...SHADOWS.small,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    imageContainer: {
        width: 60,
        height: 60,
        borderRadius: 15,
        backgroundColor: COLORS.background,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: SPACING.m,
    },
    image: {
        width: 40,
        height: 40,
    },
    details: {
        flex: 1,
        marginRight: SPACING.s,
    },
    name: {
        fontSize: FONT_SIZE.m,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: 4,
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    market: {
        fontSize: FONT_SIZE.s,
        color: COLORS.textSecondary,
        marginLeft: 2,
    },
    priceContainer: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor: COLORS.primary + '10', // 10% opacity hex
        paddingHorizontal: SPACING.m,
        paddingVertical: SPACING.s,
        borderRadius: 12,
    },
    currency: {
        fontSize: 10,
        color: COLORS.primary,
        fontWeight: 'bold',
    },
    price: {
        fontSize: FONT_SIZE.l,
        fontWeight: '800',
        color: COLORS.primary,
        lineHeight: 22,
    },
    unit: {
        fontSize: 10,
        color: COLORS.textSecondary,
    },
});

export default CropCard;
