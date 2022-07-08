import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

// Components
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
import DataOverviewGraph from '../commons/components/DataOverviewGraph';
import PopupModal from '../commons/components/PopupModal';
import PrivacyBadge from '../commons/components/PrivacyBadge';

// Styles
import {MAIN_STYLES} from '../commons/styles/main-styles';

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
      <DataOverviewGraph />
      <View style={LOCAL_STYLES.BUTTON_CONTAINER}>
      <Button
          title="User"
          onPress={() => {
            toggleModal(true);
          }}
        />
        <Button title="Take" onPress={() => {}} />
        <Button
          title="Predictable Behaviour"
          onPress={() => {
            navigation.navigate('PredictionScreen');
          }}
        />
      </View>
      <PrivacyBadge />
      <PopupModal
        visible={state.modalVisible}
        closeModal={() => {
          toggleModal(false);
        }}
      />
    </View>
  );
};

const LOCAL_STYLES = StyleSheet.create({
    
  MAIN_CONTAINER: {
    flex: 1,
    ...MAIN_STYLES.CENTER_CONTENT,
  },

  BUTTON_CONTAINER: {
    flexDirection: 'row',
  },

});