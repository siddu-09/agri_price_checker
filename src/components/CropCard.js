import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SPACING, FONT_SIZE, SHADOWS } from '../constants/theme';

const CropCard = ({ crop, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={{ uri: crop.image }} style={styles.image} resizeMode="contain" />
            <View style={styles.details}>
                <Text style={styles.name}>{crop.name}</Text>
                <Text style={styles.market}>{crop.market}</Text>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.price}>₹{crop.price}</Text>
                <Text style={styles.unit}>/kg</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: COLORS.card,
        borderRadius: 12,
        padding: SPACING.m,
        marginBottom: SPACING.s,
        alignItems: 'center',
        ...SHADOWS.small,
    },
    image: {
        width: 50,
        height: 50,
        marginRight: SPACING.m,
    },
    details: {
        flex: 1,
    },
    name: {
        fontSize: FONT_SIZE.m,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: SPACING.xs,
    },
    market: {
        fontSize: FONT_SIZE.s,
        color: COLORS.textSecondary,
    },
    priceContainer: {
        alignItems: 'flex-end',
    },
    price: {
        fontSize: FONT_SIZE.l,
        fontWeight: '700',
        color: COLORS.primary,
    },
    unit: {
        fontSize: FONT_SIZE.s,
        color: COLORS.textSecondary,
    },
});

export default CropCard;
