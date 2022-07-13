import React from 'react';
import {StyleSheet, View} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {VictoryBar, VictoryChart, Background} from 'victory-native';
import {CustomVictoryTheme} from '../helpers/VictoryTheme';
import {COLOR1, COLOR2, COLOR3, COLOR4, COLOR5} from '../styles/colors';

export default ({data, withThreshold}) => {
  return (
    <View style={styles.container}>
      <VictoryChart
        style={{
          axisLabel: {fill: COLOR1},
          background: {fill: withThreshold ? '#f00' : undefined},
        }}
        width={widthPercentageToDP('100%')}
        theme={CustomVictoryTheme}
        backgroundComponent={
          withThreshold ? <Background y={'50%'} height={2} /> : undefined
        }>
        <VictoryBar
          style={{
            data: {
              fill: ({data}) => COLOR1,
            },
          }}
          data={data}
          x="activity"
          y="score"
          events={[
            {
              target: 'data',
              eventHandlers: {
                onPressIn: () => {
                  return [
                    {
                      target: 'data',
                      mutation: props => {
                        props.datum.onPress();
                      },
                    },
                  ];
                },
              },
            },
          ]}
        />
      </VictoryChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});