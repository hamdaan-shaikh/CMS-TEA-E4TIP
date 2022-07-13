import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import CenterModal from '../commons/components/CenterModal';
import {FONT_STYLES} from '../commons/styles/main-styles';
import {SmallButton, SolidButton} from '../commons/components/Buttons';
import {COLOR2} from '../commons/styles/colors';
import {MultilineInput} from '../commons/components/CustomInput';

const threshold = 10;

export default ({navigation, route}) => {
  const [state, setState] = useState({
    modalVisible: false,
    postText: '',
  });

  const toggleModal = modalVisible => {
    if (route.params.locationValue > threshold) {
      setState(prev => ({
        ...prev,
        modalVisible,
      }));
    }
  };
  
  const onChangeText = postText => {
    setState(prev => ({
      ...prev,
      postText,
    }));
  };

  return (
    <View style={LOCAL_STYLES.MAIN_CONTAINER}>
      <Text style={FONT_STYLES.PAGE_TITLE}>Make a Post</Text>
      <MultilineInput
        value={state.postText}
        onChange={onChangeText}
        onNext={() => {}}
        inputRef={null}
        placeholder="Say something here..."
      />
      <SolidButton
        text="Share Location"
        onPress={() => {
          toggleModal(true);
        }}
      />
      <SolidButton text="Upload Photo" onPress={() => {}} />
      <SolidButton text="Tag a Friend" onPress={() => {}} />
      <CenterModal
        visible={state.modalVisible}
        closeModal={() => {
          toggleModal(false);
        }}
        onPressConfirm={() => {
          navigation.navigate('PredictionScreen');
        }}
        cancelText="No">
        <Text style={LOCAL_STYLES.MODAL_TEXT}>
          Are you sure you would like to share your location?
        </Text>
        <Text style={LOCAL_STYLES.MODAL_TEXT}>
          {`You have already shared it ${route.params.locationValue} times this month`}
        </Text>
      </CenterModal>
    </View>
  );
};

const LOCAL_STYLES = StyleSheet.create({
  MAIN_CONTAINER: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLOR2,
  },
  MODAL_TEXT: {
    color: '#333',
    fontSize: 18,
    textAlign: 'center',
  },
});