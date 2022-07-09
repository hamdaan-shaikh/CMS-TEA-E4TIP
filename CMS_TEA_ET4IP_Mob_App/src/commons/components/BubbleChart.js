import React from 'react';
import {StyleSheet, View} from 'react-native';

import {widthPercentageToDP} from 'react-native-responsive-screen';
import {VictoryScatter, VictoryChart, VictoryTheme} from 'victory-native';

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
    backgroundColor: '#f5fcff',
  },
});