import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, FONT_SIZE, SHADOWS } from '../constants/theme';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming } from 'react-native-reanimated';

const LandingScreen = ({ navigation }) => {
    const scale = useSharedValue(1);

    useEffect(() => {
        scale.value = withRepeat(withTiming(1.05, { duration: 1000 }), -1, true);
    }, []);

    const animatedButtonStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        };
    });

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={[COLORS.primary, '#004D40']}
                style={styles.background}
            />
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.content}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="leaf" size={80} color={COLORS.success} />
                    </View>
                    <Text style={styles.appName}>CropCost</Text>
                    <Text style={styles.subtitle}>Empowering Farmers with Real-Time Market Insights</Text>

                    <View style={styles.spacer} />

                    <Animated.View style={animatedButtonStyle}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate('Main')}
                            activeOpacity={0.9}
                        >
                            <Text style={styles.buttonText}>Get Started</Text>
                            <Ionicons name="arrow-forward" size={24} color="#FFF" />
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        ...StyleSheet.absoluteFillObject,
    },
    safeArea: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: SPACING.xl,
    },
    iconContainer: {
        width: 120,
        height: 120,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: SPACING.l,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.2)',
    },
    appName: {
        fontSize: FONT_SIZE.hero,
        fontWeight: '800',
        color: '#FFFFFF',
        marginBottom: SPACING.s,
        textAlign: 'center',
        letterSpacing: 1,
    },
    subtitle: {
        fontSize: FONT_SIZE.l,
        color: '#E0E0E0',
        textAlign: 'center',
        lineHeight: 28,
        maxWidth: '80%',
    },
    spacer: {
        height: 100,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.accent,
        paddingVertical: SPACING.m,
        paddingHorizontal: SPACING.xl,
        borderRadius: 50,
        ...SHADOWS.large,
        shadowColor: COLORS.accent,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: FONT_SIZE.l,
        fontWeight: '700',
        marginRight: SPACING.s,
    },
});

export default LandingScreen;
