import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

// Components
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
import DataOverviewGraph from '../commons/components/DataOverviewGraph';
import PopupModal from '../commons/components/PopupModal';
import PrivacyBadge from '../commons/components/PrivacyBadge';
import VictoryOverview from '../commons/components/VictoryOverview';
import {SmallButton, SolidButton} from '../commons/components/Buttons';

// Styles
import {MAIN_STYLES} from '../commons/styles/main-styles';
import {COLOR2} from '../commons/styles/colors';

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
      <VictoryOverview
        data={[
          {
            activity: 'Locations',
            score: 13,
            onPress: () => {
              navigation.navigate('BarChartScreen');
            },
          },
          {
            activity: 'Browsing',
            score: 16,
            onPress: () => {
              navigation.navigate('BubbleChartScreen');
            },
          },
          {
            activity: 'Posts',
            score: 14,
            onPress: () => {
              navigation.navigate('BubbleChartScreen');
            },
          },
          {
            activity: 'Photos',
            score: 19,
            onPress: () => {
              navigation.navigate('PieChartScreen');
            },
          },
          {
            activity: 'Friends',
            score: 19,
            onPress: () => {
              navigation.navigate('PieChartScreen');
            },
          },
        ]}
      />
      <SolidButton
          text="Survey"
          onPress={() => {
            navigation.navigate('SurveyScreen');
          }}
        />
      <View style={LOCAL_STYLES.BUTTON_CONTAINER}>
      <SmallButton
          text="User"
          onPress={() => {
            toggleModal(true);
          }}
        />
        <SolidButton
          text="Predictable Behaviour"
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
    backgroundColor: COLOR2,
  },

  BUTTON_CONTAINER: {
    flexDirection: 'row',
  },

});