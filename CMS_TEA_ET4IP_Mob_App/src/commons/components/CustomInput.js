import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

// Components
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';

// Styles
import {MAIN_STYLES} from '../styles/main-styles';

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

const LOCAL_STYLES = StyleSheet.create({
  MAIN_CONTAINER: {
    flex: 1,
  },
  NUMBER_INPUT_CONTAINER: {
    color: '#333',
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
    paddingHorizontal: WP('4%'),
  },
  STANDARD_TEXT_INPUT_CONTAINER: {
    overflow: 'hidden',
    flexDirection: 'row',
    width: WP('90%'),
    height: WP('15%'),
    borderRadius: WP('4%'),
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0)',
    backgroundColor: '#ddd',
    ...MAIN_STYLES.CENTER_CONTENT,
  },
});