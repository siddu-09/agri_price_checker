import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getCrops } from '../utils/DataManager';
import CropCard from '../components/CropCard';
import SearchBar from '../components/SearchBar';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

const HomeScreen = ({ navigation }) => {
    const [crops, setCrops] = useState([]);
    const [filteredCrops, setFilteredCrops] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const data = await getCrops();
            setCrops(data);
            setFilteredCrops(data);
        } catch (error) {
            console.error('HomeScreen Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (text) => {
        setSearchQuery(text);
        if (text) {
            const filtered = crops.filter((crop) =>
                crop.name.toLowerCase().includes(text.toLowerCase()) ||
                crop.category.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredCrops(filtered);
        } else {
            setFilteredCrops(crops);
        }
    };

    const renderItem = ({ item }) => (
        <CropCard
            crop={item}
            onPress={() => navigation.navigate('Details', { crop: item })}
        />
    );

    const getDateString = () => {
        const date = new Date();
        return date.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' });
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={COLORS.primary} />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
            <View style={styles.header}>
                <View>
                    <Text style={styles.date}>{getDateString()}</Text>
                    <Text style={styles.title}>Market Rates</Text>
                </View>
                {/* Placeholder for Profile/Settings icon or weather widget */}
            </View>

            <View style={styles.searchContainer}>
                <SearchBar value={searchQuery} onChangeText={handleSearch} />
            </View>

            <FlatList
                data={filteredCrops}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.background,
    },
    header: {
        paddingHorizontal: SPACING.l,
        paddingTop: SPACING.s,
        paddingBottom: SPACING.m,
    },
    date: {
        fontSize: FONT_SIZE.s,
        color: COLORS.textSecondary, // Use the new Cool Gray
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 4,
    },
    title: {
        fontSize: FONT_SIZE.xxl,
        fontWeight: '800',
        color: COLORS.text, // Dark Slate
    },
    searchContainer: {
        paddingHorizontal: SPACING.l,
        marginBottom: SPACING.m,
    },
    list: {
        paddingHorizontal: SPACING.l,
        paddingBottom: SPACING.xxl,
    },
});

export default HomeScreen;
