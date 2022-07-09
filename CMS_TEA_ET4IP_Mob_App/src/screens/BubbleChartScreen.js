import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import BubbleChart from '../commons/components/BubbleChart';

// Components
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';

// Styles
import {FONT_STYLES, MAIN_STYLES} from '../commons/styles/main-styles';

export default props => {
  return (
    <View style={LOCAL_STYLES.MAIN_CONTAINER}>
      <Text style={FONT_STYLES.PAGE_TITLE}>Bubble Chart Screen</Text>
      <BubbleChart
        data={[
          {activity: 'None', score: 19000, onPress: () => {}},
          {activity: 'Null', score: 1, onPress: () => {}},
        ]}
      />
    </View>
  );
};

const LOCAL_STYLES = StyleSheet.create({
  MAIN_CONTAINER: {
    flex: 1,
    ...MAIN_STYLES.CENTER_CONTENT,
  },
});