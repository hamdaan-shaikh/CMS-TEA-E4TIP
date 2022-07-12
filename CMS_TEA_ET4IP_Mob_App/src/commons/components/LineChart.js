import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {VictoryLine, VictoryChart, VictoryTheme} from 'victory-native';
import {CustomVictoryTheme} from '../helpers/VictoryTheme';
import {COLOR1, COLOR2, COLOR3, COLOR4, COLOR5} from '../styles/colors';

export default ({data}) => {
  return (
    <View style={styles.container}>
      <VictoryChart
        style={{
          axisLabel: {fill: COLOR1},
        }}
        width={widthPercentageToDP('100%')}
        theme={VictoryTheme.material}>
        {Object.keys(data[0].traces).map(item => (
          <VictoryLine
            data={data.map(currentMonth => ({
              x: currentMonth.month,
              y: currentMonth.traces[item],
            }))}
          />
        ))}
      </VictoryChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR2,
  },
});