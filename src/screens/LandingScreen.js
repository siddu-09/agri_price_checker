import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SPACING, FONT_SIZE, SHADOWS } from '../constants/theme';

const LandingScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.appName}>CropCost</Text>
                <Text style={styles.subtitle}>Your Agricultural Price Guide</Text>
                
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('Main')}
                >
                    <Text style={styles.buttonText}>Explore Crops</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: SPACING.xl,
    },
    appName: {
        fontSize: 48,
        fontWeight: 'bold',
        color: COLORS.primary,
        marginBottom: SPACING.md,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: FONT_SIZE.l,
        color: COLORS.textSecondary,
        marginBottom: SPACING.xl * 3,
        textAlign: 'center',
    },
    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: SPACING.m + SPACING.s,
        paddingHorizontal: SPACING.xl + SPACING.l,
        borderRadius: 12,
        ...SHADOWS.medium,
        minWidth: 200,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: FONT_SIZE.l,
        fontWeight: '600',
        textAlign: 'center',
    },
});

export default LandingScreen;
