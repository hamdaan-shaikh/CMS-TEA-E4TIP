import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {VictoryBar, VictoryChart, Background} from 'victory-native';
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

export default ({data, withThreshold}) => {
  return (
    <View style={styles.container}>
      <VictoryChart
        style={{
          axisLabel: {fill: COLOR1},
          background: {fill: withThreshold ? '#f00' : undefined},
        }}
        height={heightPercentageToDP('35%')}
        width={widthPercentageToDP('100%')}
        theme={CustomVictoryTheme}
        backgroundComponent={
          withThreshold ? <Background y={'47%'} height={2} /> : undefined
        }>
        <VictoryBar
          style={{
            data: {
              fill: ({data, index}) => {
                if (index === 0) {
                  return GRAPH_COLOR1;
                }
                if (index === 1) {
                  return GRAPH_COLOR2;
                }
                if (index === 2) {
                  return GRAPH_COLOR3;
                }
                if (index === 3) {
                  return GRAPH_COLOR4;
                }
                if (index === 4) {
                  return GRAPH_COLOR5;
                }
              },
            },
          }}
          data={data}
          x="activity"
          y="score"
          domainPadding={{
            x: 20,
          }}
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