import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {MAIN_STYLES} from '../styles/main-styles';

import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
import {COLOR1, COLOR2, COLOR3, COLOR4, COLOR5} from '../styles/colors';

export const SolidButton = ({text, onPress, style}) => (
  <Pressable style={[LOCAL_STYLES.BUTTON_CONTAINER, style]} onPress={onPress}>
    <Text style={LOCAL_STYLES.BUTTON_TEXT}>{text}</Text>
  </Pressable>
);
export const SmallButton = ({text, onPress, style}) => (
  <Pressable
    style={[LOCAL_STYLES.SMALL_BUTTON_CONTAINER, style]}
    onPress={onPress}>
    <Text style={LOCAL_STYLES.BUTTON_TEXT}>{text}</Text>
  </Pressable>
);

export const HollowButton = ({text, onPress, style}) => (
  <Pressable
    style={[LOCAL_STYLES.HOLLOW_BUTTON_CONTAINER, style]}
    onPress={onPress}>
    <Text style={LOCAL_STYLES.HOLLOW_BUTTON_TEXT}>{text}</Text>
  </Pressable>
);

const LOCAL_STYLES = StyleSheet.create({
  MAIN_CONTAINER: {
    flex: 1,
  },
  BUTTON_CONTAINER: {
    marginTop: WP('3%'),
    height: WP('15%'),
    width: WP('65%'),
    backgroundColor: 'COLOR1',
    borderRadius: 100,
    ...MAIN_STYLES.CENTER_CONTENT,
  },
  SMALL_BUTTON_CONTAINER: {
    marginTop: WP('3%'),
    height: WP('15%'),
    width: WP('20%'),
    backgroundColor: 'COLOR1',
    borderRadius: 100,
    ...MAIN_STYLES.CENTER_CONTENT,
  },
  BUTTON_TEXT: {
    fontSize: WP('4.5%'),
    color: 'COLOR2',
    textAlign: 'center',
  },
  HOLLOW_BUTTON_CONTAINER: {
    marginTop: WP('3%'),
    height: WP('15%'),
    width: WP('65%'),
    borderColor: 'COLOR5',
    borderWidth: 2,
    borderRadius: 100,
    ...MAIN_STYLES.CENTER_CONTENT,
  },
  HOLLOW_BUTTON_TEXT: {
    fontSize: WP('4.5%'),
    color: 'COLOR5',
    textAlign: 'center',
  },
});