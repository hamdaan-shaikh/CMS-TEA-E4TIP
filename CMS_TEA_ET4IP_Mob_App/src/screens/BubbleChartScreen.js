import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import BubbleChart from '../commons/components/BubbleChart';

// Components
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';

// Styles
import {FONT_STYLES, MAIN_STYLES} from '../commons/styles/main-styles';
import {COLOR2} from '../commons/styles/colors';

export default props => {
  return (
    <View style={LOCAL_STYLES.MAIN_CONTAINER}>
      <Text style={FONT_STYLES.PAGE_TITLE}>Browsing</Text>
      <Text style={FONT_STYLES.PAGE_DESCRIPTION}>
        Avoid clicking those random click-baits. Third-party apps can capture
        and misuse your private information. It can be used to scam you or serve
        you unnecessary ads. Best choice is to browse in incognito mode.
      </Text>
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
    backgroundColor: COLOR2,
  },
});