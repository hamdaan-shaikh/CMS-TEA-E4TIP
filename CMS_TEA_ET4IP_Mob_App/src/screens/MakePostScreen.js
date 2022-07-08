import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import CenterModal from '../commons/components/CenterModal';
import {FONT_STYLES} from '../commons/styles/main-styles';

export default ({navigation}) => {
  const [state, setState] = useState({
    modalVisible: false,
  });

  const toggleModal = modalVisible => {
    setState(prev => ({
      ...prev,
      modalVisible,
    }));
  };
  
  return (
    <View style={LOCAL_STYLES.MAIN_CONTAINER}>
      <Text style={FONT_STYLES.PAGE_TITLE}>Make a Post</Text>
      <Button title="Enter Post Text" onPress={() => {}} />
      <Button
        title="Share Location"
        onPress={() => {
          toggleModal(true);
        }}
      />
      <Button title="Upload Photo" onPress={() => {}} />
      <Button title="Tag a Friend" onPress={() => {}} />
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
          You have already shared it __ times this month
        </Text>
      </CenterModal>
    </View>
  );
};

const LOCAL_STYLES = StyleSheet.create({
  MAIN_CONTAINER: {
    flex: 1,
  },
  MODAL_TEXT: {
    color: '#333',
    fontSize: 18,
    textAlign: 'center',
  },
});