import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {COLOR1, COLOR3, COLOR4, COLOR5} from '../styles/colors';

export default ({text, onPress, value, addPrefix}) => {
  return (
    <Pressable style={LOCAL_STYLES.MAIN_CONTAINER} onPress={onPress}>
      <Text style={LOCAL_STYLES.PREDICTION_TEXT}>
        {addPrefix ? `You will ${text}` : text}
      </Text>
      {value !== undefined ? (
        <Text style={LOCAL_STYLES.VALUE_TEXT}>{`Level ${value}`}</Text>
      ) : null}
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
    alignItems: 'center',
  },
  PREDICTION_TEXT: {
    textAlign: 'center',
    fontSize: 15,
    color: COLOR5,
  },
  VALUE_TEXT: {
    flex: 1,
    paddingTop: 4,
    fontSize: 12,
    color: COLOR1,
  },
});