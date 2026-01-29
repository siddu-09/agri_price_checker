import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { COLORS, SPACING, FONT_SIZE, SHADOWS } from '../constants/theme';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ value, onChangeText, placeholder = "Search crops..." }) => {
    return (
        <View style={styles.container}>
            <Ionicons name="search" size={20} color={COLORS.textSecondary} style={styles.icon} />
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={COLORS.textSecondary}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.card,
        borderRadius: 30, // Pill shape
        paddingHorizontal: SPACING.m,
        paddingVertical: 12, // Slightly taller
        ...SHADOWS.medium, // Floating effect
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    icon: {
        marginRight: SPACING.s,
    },
    input: {
        flex: 1,
        fontSize: FONT_SIZE.m,
        color: COLORS.text,
    },
});

export default SearchBar;
