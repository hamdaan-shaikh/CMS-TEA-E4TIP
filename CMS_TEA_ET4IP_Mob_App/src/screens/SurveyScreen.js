import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {SolidButton} from '../commons/components/Buttons';
import {NumberInput} from '../commons/components/CustomInput';
import {FONT_STYLES} from '../commons/styles/main-styles';
import {COLOR2} from '../commons/styles/colors';

const SurveyItem = ({
    value,
    onChange,
    lastFormElement,
    placeholder,
    question,
  }) => {
  return (
    <View style={LOCAL_STYLES.ITEM_CONTAINER}>
      <Text style={LOCAL_STYLES.ITEM_TITLE}>{question}</Text>
      <NumberInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onNext={() => {}}
        inputRef={null}
        lastFormElement={lastFormElement}
      />
    </View>
  );
};

export default ({navigation}) => {
  const [state, setState] = useState({
    firstInput: '',
    secondInput: '',
    thirdInput: '',
    fourthInput: '',
    fifthInput: '',
  });

  const onChangeFirst = firstInput => {
    setState(prev => ({
      ...prev,
      firstInput,
    }));
  };

  const onChangeSecond = secondInput => {
    setState(prev => ({
      ...prev,
      secondInput,
    }));
  };

  const onChangeThird = thirdInput => {
    setState(prev => ({
      ...prev,
      thirdInput,
    }));
  };


  const onChangeFourth = fourthInput => {
    setState(prev => ({
      ...prev,
      fourthInput,
    }));
  };

  const onChangeFifth = fifthInput => {
    setState(prev => ({
      ...prev,
      fifthInput,
    }));
  };

  const onSubmit = () => {
    navigation.goBack();
  };
    ``
  return (
    <View style={LOCAL_STYLES.MAIN_CONTAINER}>
      <Text style={FONT_STYLES.PAGE_TITLE}>Survey</Text>
      <SurveyItem
        question="First question?"
        value={state.firstInput}
        onChange={onChangeFirst}
        placeholder={'Answer first'}
        lastFormElement={false}
      />
      <SurveyItem
        question="Second question?"
        value={state.secondInput}
        onChange={onChangeSecond}
        placeholder={'Answer second'}
        lastFormElement={false}
      />
      <SurveyItem
        question="Third question?"
        value={state.thirdInput}
        onChange={onChangeThird}
        placeholder={'Answer third'}
        lastFormElement={false}
      />
      <SurveyItem
        question="Fourth question?"
        value={state.fourthInput}
        onChange={onChangeFourth}
        placeholder={'Answer fourth'}
        lastFormElement={false}
      />
      <SurveyItem
        question="Fifth question?"
        value={state.fifthInput}
        onChange={onChangeFifth}
        placeholder={'Answer fifth'}
        lastFormElement={true}
      />
      <SolidButton
        text="Submit"
        onPress={() => {
            onSubmit();
        }}
      />
      <SolidButton
        text="Go back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

const LOCAL_STYLES = StyleSheet.create({
  MAIN_CONTAINER: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLOR2,
  },

  ITEM_CONTAINER: {},
  ITEM_TITLE: {
    color: '#333',
    fontSize: 20,
  },
});