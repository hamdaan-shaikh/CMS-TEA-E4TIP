import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {
  heightPercentageToDP as HP,
  widthPercentageToDP as WP,
} from 'react-native-responsive-screen';
import {BarChart} from 'react-native-chart-kit';

const chartData = {
  labels: ['Location', 'Clicks', 'Less', 'More'],
  datasets: [
    {
      data: [10, 20, 30, 40],
    },
  ],
};

export default () => {
  return (
    <View style={LOCAL_STYLES.MAIN_CONTAINER}>
      <BarChart
        style={LOCAL_STYLES.GRAPH_STYLE}
        data={chartData}
        width={WP('90%')}
        height={HP('40%')}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {},
        }}
        verticalLabelRotation={30}
      />
    </View>
  );
};

const LOCAL_STYLES = StyleSheet.create({
  MAIN_CONTAINER: {
    backgroundColor: '#333',
    borderRadius: 10,
  },
  GRAPH_STYLE: {
    borderRadius: 10,
  },
});