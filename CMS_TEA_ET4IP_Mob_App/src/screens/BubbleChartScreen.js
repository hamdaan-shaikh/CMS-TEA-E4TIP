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
          {
            activity: 1,
            score: 200,
            amount: 15,
            text: 'Shopping',
            onPress: () => {},
          },
          {
            activity: 2,
            score: 300,
            amount: 20,
            text: 'Festival/Concert',
            onPress: () => {},
          },
          {
            activity: 2.5,
            score: 100,
            amount: 20,
            text: 'Videos',
            onPress: () => {},
          },
          {
            activity: 3.5,
            score: 240,
            amount: 14,
            text: 'News/Articles',
            onPress: () => {},
          },
          {
            activity: 4,
            score: 100,
            amount: 10,
            text: 'Food/Recipe',
            onPress: () => {},
          },
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