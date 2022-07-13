import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import PieChart from '../commons/components/PieChart';

// Components
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';

// Styles
import {FONT_STYLES, MAIN_STYLES} from '../commons/styles/main-styles';
import {COLOR2} from '../commons/styles/colors';

export default ({route}) => {
  return (
    <View style={LOCAL_STYLES.MAIN_CONTAINER}>
      {route.params.type === 'Photos' ? (
        <>
          <Text style={FONT_STYLES.PAGE_TITLE}>Photos</Text>
          <Text style={FONT_STYLES.PAGE_DESCRIPTION}>
            Advertising your whereabouts through photos may already be revealing
            too much information. Never post Visa, Passport, or any such
            identity documents. Providing this information may appear harmless,
            but it can be used to steal identity.
          </Text>
        </>
      ) : route.params.type === 'Stories' ? (
        <>
          <Text style={FONT_STYLES.PAGE_TITLE}>Stories / Status</Text>
          <Text style={FONT_STYLES.PAGE_DESCRIPTION}>
            Avoid posting information that you will not be able to erase from
            the internet. It could potentially harm you in the future, if a
            background check is ever done, for e.g. when pursuing job
            opportunities, politics, etc
          </Text>
        </>
      ) : (
        <>
          <Text style={FONT_STYLES.PAGE_TITLE}>Friend Requests</Text>
          <Text style={FONT_STYLES.PAGE_DESCRIPTION}>
            Avoid accepting friend requests from unknown people, to protect
            yourselves from becoming victims of cyberbullying, stalking.
          </Text>
        </>
      )}
      <PieChart
        data={route.params.data.map(item => ({
          activity: item.category,
          score: item.value,
          onPress: () => {},
        }))}
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