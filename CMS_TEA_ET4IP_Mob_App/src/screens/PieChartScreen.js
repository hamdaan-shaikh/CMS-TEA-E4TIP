import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import PieChart from '../commons/components/PieChart';

// Components
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';

// Styles
import {FONT_STYLES, MAIN_STYLES} from '../commons/styles/main-styles';
import {COLOR2} from '../commons/styles/colors';

export default props => {
  return (
    <View style={LOCAL_STYLES.MAIN_CONTAINER}>
      <Text style={FONT_STYLES.PAGE_TITLE}>Pie Chart Screen</Text>
      <PieChart
        data={[
          {activity: 'None', score: 193, onPress: () => {}},
          {activity: 'Null', score: 100, onPress: () => {}},
        ]}
      />
    </View>
  );
};

const LOCAL_STYLES = StyleSheet.create({
  MAIN_CONTAINER: {
    flex: 1,
    ...MAIN_STYLES.CENTER_CONTENT,
    backgroundColor: COLOR2,
  },
});