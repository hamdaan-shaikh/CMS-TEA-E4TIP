
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default () => {
  return (
    <View style={LOCAL_STYLES.MAIN_CONTAINER}>
      <Text style={LOCAL_STYLES.TEXT_STYLE}>Privacy Badge</Text>
      <View style={LOCAL_STYLES.BADGE_CONTAINER} />
    </View>
  );
};

const LOCAL_STYLES = StyleSheet.create({
  MAIN_CONTAINER: {
    alignItems: 'center',
  },
  TEXT_STYLE: {
    color: '#333',
    fontSize: 30,
  },
  BADGE_CONTAINER: {
    width: 100,
    height: 100,
    backgroundColor: '#505',
    borderRadius: 10,
  },
});