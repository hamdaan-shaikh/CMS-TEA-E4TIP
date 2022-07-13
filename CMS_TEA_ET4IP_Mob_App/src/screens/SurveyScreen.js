import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {SolidButton} from '../commons/components/Buttons';
import {NumberInput} from '../commons/components/CustomInput';
import {PopupModal} from '../commons/components/PopupModal';
import VictoryOverview from '../commons/components/VictoryOverview';
import {FONT_STYLES} from '../commons/styles/main-styles';
import {COLOR2, COLOR5} from '../commons/styles/colors';

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
    modalVisible: false,
  });

  const toggleModal = modalVisible => {
    setState(prev => ({
      ...prev,
      modalVisible,
    }));
  };

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
    toggleModal(true);
  };
    ``
  return (
    <View style={LOCAL_STYLES.MAIN_CONTAINER}>
      <Text style={FONT_STYLES.PAGE_TITLE}>Survey</Text>
      <SurveyItem
        question="How many locations/check-ins have you shared last month?"
        value={state.firstInput}
        onChange={onChangeFirst}
        placeholder={'Answer here...'}
        lastFormElement={false}
      />
      <SurveyItem
        question="How many photos have you shared last month?"
        value={state.secondInput}
        onChange={onChangeSecond}
        placeholder={'Answer here...'}
        lastFormElement={false}
      />
      <SurveyItem
        question="How many posts/stories have you shared last month?"
        value={state.thirdInput}
        onChange={onChangeThird}
        placeholder={'Answer here...'}
        lastFormElement={false}
      />
      <SurveyItem
        question="ow many friend requests/tags have you made/accepted last month?"
        value={state.fourthInput}
        onChange={onChangeFourth}
        placeholder={'Answer here...'}
        lastFormElement={false}
      />
      <SurveyItem
        question="How many times have you searched for something / clicked a link in the last month?"
        value={state.fifthInput}
        onChange={onChangeFifth}
        placeholder={'Answer here...'}
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
      <PopupModal
        visible={state.modalVisible}
        closeModal={() => {
          toggleModal(false);
        }}>
        <View style={LOCAL_STYLES.MODAL_CONTAINER}>
          <Text
            style={[
              FONT_STYLES.PAGE_TITLE,
              {
                marginTop: 50,
              },
            ]}>
            Privacy Overview from Survey
          </Text>
          <VictoryOverview
            data={[
              {
                activity: 'Location',
                score: +state.firstInput,
                onPress: () => {},
              },
              {
                activity: 'Photos',
                score: +state.secondInput,
                onPress: () => {},
              },
              {
                activity: 'Stories',
                score: +state.thirdInput,
                onPress: () => {},
              },
              {
                activity: 'Friend Request',
                score: +state.fourthInput,
                onPress: () => {},
              },
              {
                activity: 'Browsing',
                score: +state.fifthInput,
                onPress: () => {},
              },
            ]}
          />
        </View>
      </PopupModal>
    </View>
  );
};

const LOCAL_STYLES = StyleSheet.create({
  MAIN_CONTAINER: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLOR2,
  },
  
  MODAL_CONTAINER: {
    borderRadius: 10,
    padding: 10,
  },

  ITEM_CONTAINER: {
    marginTop: 10,
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  ITEM_TITLE: {
    color: 'COLOR5',
    fontSize: 15,
    textAlign: 'center',
  },
});