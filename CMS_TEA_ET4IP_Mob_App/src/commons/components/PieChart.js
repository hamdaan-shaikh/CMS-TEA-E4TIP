import React from 'react';
import {StyleSheet, View} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {VictoryPie, VictoryChart, VictoryTheme} from 'victory-native';

export default ({data, type}) => {
  return (
    <View style={styles.container}>
      <VictoryPie
        data={data}
        x="activity"
        y="score"
        colorScale={
          type === 'Photos'
            ? ['#e17f93', '#9e5967', '#71404a', '#43262c', '#2d191d']
            : type === 'Stories'
            ? ['#bee5b0', '#98b78d', '#72896a', '#4c5c46', '#262e23']
            : ['#fbbb62', '#c9964e', '#97703b', '#644b27', '#322514']
        }
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