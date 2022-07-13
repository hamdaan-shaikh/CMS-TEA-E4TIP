import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

// Components
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';

// Styles
import {MAIN_STYLES} from '../styles/main-styles';
import {COLOR1, COLOR2, COLOR3, COLOR4, COLOR5} from '../styles/colors';

export const NumberInput = ({
  placeholder,
  onChange,
  onNext,
  value,
  inputRef,
  lastFormElement,
}) => {
  return (
    <View style={LOCAL_STYLES.STANDARD_TEXT_INPUT_CONTAINER}>
      <TextInput
        style={LOCAL_STYLES.NUMBER_INPUT_CONTAINER}
        autoCompleteType={'tel'}
        autoCorrect={false}
        keyboardType={'phone-pad'}
        maxLength={30}
        textContentType={'telephoneNumber'}
        placeholderTextColor={'#888'}
        placeholder={placeholder}
        value={value}
        allowFontScaling={false}
        onChangeText={onChange}
        onSubmitEditing={onNext}
        ref={inputRef}
        blurOnSubmit={lastFormElement === true}
        returnKeyType={lastFormElement ? 'send' : 'next'}
      />
    </View>
  );
};

export const MultilineInput = ({
  value,
  onChange,
  onNext,
  inputRef,
  placeholder,
}) => {
  return (
    <View style={LOCAL_STYLES.STANDARD_MULTILINE_TEXT_INPUT_CONTAINER}>
      <TextInput
        style={LOCAL_STYLES.STANDARD_MULTILINE_TEXT_INPUT}
        multiline={true}
        maxLength={400}
        value={value}
        onChangeText={onChange}
        allowFontScaling={false}
        onSubmitEditing={onNext}
        ref={inputRef}
        blurOnSubmit={true}
        returnKeyType={'send'}
        placeholder={placeholder}
        textAlignVertical="top"
        placeholderTextColor={COLOR4}
      />
    </View>
  );
};

const LOCAL_STYLES = StyleSheet.create({
  MAIN_CONTAINER: {
    flex: 1,
  },
  NUMBER_INPUT_CONTAINER: {
    color: 'COLOR4',
    flex: 1,
    backgroundColor: 'COLOR3',
    height: '100%',
    paddingHorizontal: WP('4%'),
  },
  STANDARD_TEXT_INPUT_CONTAINER: {
    overflow: 'hidden',
    flexDirection: 'row',
    width: WP('90%'),
    height: WP('12%'),
    borderRadius: WP('4%'),
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0)',
    backgroundColor: COLOR3,
    ...MAIN_STYLES.CENTER_CONTENT,
  },
  STANDARD_MULTILINE_TEXT_INPUT_CONTAINER: {
    paddingHorizontal: WP('5%'),
    color: '#333',
    backgroundColor: '#fff',
    borderRadius: WP('3%'),
    width: WP('90%'),
    minHeight: WP('30%'),
  },
  STANDARD_MULTILINE_TEXT_INPUT: {
    color: COLOR5,
    width: '100%',
    minHeight: WP('30%'),
  },
});