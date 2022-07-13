import React from 'react';
import {StyleSheet, View} from 'react-native';

import {widthPercentageToDP} from 'react-native-responsive-screen';
import {
  VictoryScatter,
  VictoryChart,
  VictoryTheme,
  VictoryLabel,
} from 'victory-native';
import {
  COLOR1,
  COLOR2,
  GRAPH_COLOR1,
  GRAPH_COLOR2,
  GRAPH_COLOR3,
  GRAPH_COLOR4,
  GRAPH_COLOR5,
} from '../styles/colors';

export default ({data}) => {
  return (
    <View style={styles.container}>
      <VictoryScatter
          data={data}
          x="activity"
          y="score"
          bubbleProperty="amount"
          maxBubbleSize={25}
          minBubbleSize={5}
          labels={({datum}) => datum.text}
          labelComponent={<VictoryLabel dy={-30} />}
          style={{
            labels: {
              fontSize: 14,
            },
            data: {
              fill: ({datum}) =>
                datum.text === 'Shopping'
                  ? GRAPH_COLOR1
                  : datum.text === 'Festival/Concert'
                  ? GRAPH_COLOR2
                  : datum.text === 'Videos'
                  ? GRAPH_COLOR3
                  : datum.text === 'News/Articles'
                  ? GRAPH_COLOR4
                  : datum.text === 'Food/Recipe'
                  ? GRAPH_COLOR5
                  : '#f0f',
            },
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