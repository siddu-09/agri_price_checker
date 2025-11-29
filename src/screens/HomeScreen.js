import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native';
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

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={COLORS.primary} />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Agri Price Checker</Text>
                <Text style={styles.subtitle}>Latest market rates</Text>
            </View>
            <View style={styles.content}>
                <SearchBar value={searchQuery} onChangeText={handleSearch} />
                <FlatList
                    data={filteredCrops}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.list}
                    showsVerticalScrollIndicator={false}
                />
            </View>
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
        paddingHorizontal: SPACING.m,
        paddingTop: SPACING.s,
        paddingBottom: SPACING.m,
    },
    title: {
        fontSize: FONT_SIZE.xxl,
        fontWeight: '800',
        color: COLORS.text,
    },
    subtitle: {
        fontSize: FONT_SIZE.m,
        color: COLORS.textSecondary,
        marginTop: SPACING.xs,
    },
    content: {
        flex: 1,
        paddingHorizontal: SPACING.m,
    },
    list: {
        paddingBottom: SPACING.l,
    },
});

export default HomeScreen;
