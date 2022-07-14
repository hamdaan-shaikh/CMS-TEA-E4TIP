import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {VictoryLine, VictoryChart, VictoryTheme} from 'victory-native';
import {CustomVictoryTheme} from '../helpers/VictoryTheme';
import {
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4,
  COLOR5,
  GRAPH_COLOR1,
  GRAPH_COLOR2,
  GRAPH_COLOR3,
  GRAPH_COLOR4,
  GRAPH_COLOR5,
} from '../styles/colors';

export default ({data}) => {
  return (
    <View style={styles.container}>
      <VictoryChart
        style={{
          axisLabel: {fill: COLOR1},
        }}
        height={heightPercentageToDP('35%')}
        width={widthPercentageToDP('100%')}
        theme={CustomVictoryTheme}>
        {Object.keys(data[0].traces).map((item, index) => (
          <VictoryLine
            style={{
              data: {
                stroke:
                  index === 0
                    ? GRAPH_COLOR1
                    : index === 1
                    ? GRAPH_COLOR2
                    : index === 2
                    ? GRAPH_COLOR3
                    : index === 3
                    ? GRAPH_COLOR4
                    : index === 4
                    ? GRAPH_COLOR5
                    : GRAPH_COLOR1,
              },
            }}
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