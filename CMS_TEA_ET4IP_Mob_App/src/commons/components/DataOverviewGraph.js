
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default () => {
  return (
    <View style={LOCAL_STYLES.MAIN_CONTAINER}>
      <></>
    </View>
  );
};

const LOCAL_STYLES = StyleSheet.create({
  MAIN_CONTAINER: {
    width: 200,
    height: 200,
    backgroundColor: '#333',
    borderRadius: 10,
  },
});