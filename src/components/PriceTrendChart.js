import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { COLORS, FONT_SIZE } from '../constants/theme';

const PriceTrendChart = ({ data }) => {
    if (!data || data.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.noDataText}>No trend data available</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <LineChart
                data={data}
                color={COLORS.primary}
                thickness={3}
                dataPointsColor={COLORS.secondary}
                startFillColor={COLORS.primary}
                endFillColor={COLORS.primary}
                startOpacity={0.2}
                endOpacity={0.0}
                areaChart
                curved
                hideDataPoints={false}
                dataPointsRadius={4}
                width={Dimensions.get('window').width - 80} // Adjusting for padding
                height={200}
                spacing={40}
                initialSpacing={20}
                yAxisTextStyle={{ color: COLORS.textSecondary, fontSize: 10 }}
                xAxisLabelTextStyle={{ color: COLORS.textSecondary, fontSize: 10 }}
                yAxisColor={COLORS.border}
                xAxisColor={COLORS.border}
                rulesColor={COLORS.border}
                rulesType="solid"
                showVerticalLines={false}
                pointerConfig={{
                    pointerStripHeight: 160,
                    pointerStripColor: 'lightgray',
                    pointerStripWidth: 2,
                    pointerColor: 'lightgray',
                    radius: 6,
                    pointerLabelWidth: 100,
                    pointerLabelHeight: 90,
                    activatePointersOnLongPress: false,
                    autoAdjustPointerLabelPosition: false,
                    pointerLabelComponent: items => {
                        return (
                            <View
                                style={{
                                    height: 90,
                                    width: 100,
                                    justifyContent: 'center',
                                    marginTop: -30,
                                    marginLeft: -40,
                                }}>
                                <Text style={{ color: COLORS.text, fontSize: 14, marginBottom: 6, textAlign: 'center' }}>
                                    {items[0].date}
                                </Text>

                                <View style={{ paddingHorizontal: 14, paddingVertical: 6, borderRadius: 16, backgroundColor: 'white' }}>
                                    <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
                                        {'₹' + items[0].value}
                                    </Text>
                                </View>
                            </View>
                        );
                    },
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.card,
        paddingVertical: 20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    noDataText: {
        color: COLORS.textSecondary,
        fontSize: FONT_SIZE.m,
    },
});

export default PriceTrendChart;
