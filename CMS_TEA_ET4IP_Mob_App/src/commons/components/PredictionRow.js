import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {COLOR1, COLOR3, COLOR4, COLOR5} from '../styles/colors';

export default ({text, onPress}) => {
  return (
    <Pressable style={LOCAL_STYLES.MAIN_CONTAINER} onPress={onPress}>
      <Text style={LOCAL_STYLES.PREDICTION_TEXT}>{text}</Text>
    </Pressable>
  );
};

const LOCAL_STYLES = StyleSheet.create({
  MAIN_CONTAINER: {
    alignSelf: 'center',
    width: '90%',
    paddingVertical: widthPercentageToDP('6%'),
    paddingHorizontal: widthPercentageToDP('3%'),
    borderRadius: 10,
    backgroundColor: '#ddd',
    marginTop: widthPercentageToDP('4%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  PREDICTION_TEXT: {
    flex: 1,
    fontSize: widthPercentageToDP('5%'),
    color: COLOR5,
  },
});