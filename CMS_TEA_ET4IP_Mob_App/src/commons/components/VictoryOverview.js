import React from 'react';
import {StyleSheet, View} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {VictoryBar, VictoryChart, VictoryTheme} from 'victory-native';

const data = [
  {activity: 'Locations', score: 13},
  {activity: 'Photos', score: 16},
  {activity: 'Posts', score: 14},
  {activity: 'Browsing Activity', score: 19},
  {activity: 'Friends Requests', score: 19},
];

export default () => {
  return (
    <View style={styles.container}>
      <VictoryChart
        width={widthPercentageToDP('100%')}
        theme={VictoryTheme.material}>
        <VictoryBar
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
                        console.log(props.datum.activity);
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
    backgroundColor: '#f5fcff',
  },
});