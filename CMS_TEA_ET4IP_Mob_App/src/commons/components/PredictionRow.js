import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

export default props => {
  return (
    <Pressable style={LOCAL_STYLES.MAIN_CONTAINER} onPress={props.onPress}>
      <></>
    </Pressable>
  );
};

const LOCAL_STYLES = StyleSheet.create({
  MAIN_CONTAINER: {
    alignSelf: 'center',
    width: '90%',
    height: 100,
    borderRadius: 10,
    backgroundColor: '#ddd',
    marginTop: 10,
  },
});