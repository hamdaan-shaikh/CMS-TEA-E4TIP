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
    alignSelf: 'center',
    width: '80%',
    height: 100,
    borderRadius: 10,
    backgroundColor: '#c9c',
    marginTop: 10,
  },
});