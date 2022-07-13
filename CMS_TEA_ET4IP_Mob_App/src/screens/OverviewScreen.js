import React, {useRef, useState} from 'react';  
import {View, Text, StyleSheet, Button} from 'react-native';

// Components
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
import DataOverviewGraph from '../commons/components/DataOverviewGraph';
import PopupModal from '../commons/components/PopupModal';
import PrivacyBadge from '../commons/components/PrivacyBadge';
import VictoryOverview from '../commons/components/VictoryOverview';
import LineChart from '../commons/components/LineChart';
import {SmallButton, SolidButton} from '../commons/components/Buttons';

// Styles
import {MAIN_STYLES} from '../commons/styles/main-styles';
import {COLOR2} from '../commons/styles/colors';

export default ({navigation, route}) => {
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
        withThreshold
        data={route.params.GraphInfo.map(item => ({
          activity: item.title,
          score: item.value,
          onPress: () => {
            switch (item.title) {
              case 'Locations':
                navigation.navigate('MapScreen', item.items);
                break;
              case 'Browsing':
                navigation.navigate('BubbleChartScreen');
                break;
              default:

                navigation.navigate('PieChartScreen', {
                  data: item.items,
                  type: item.title,
                });
                break;
            }
          },
        }))}
      />
      <LineChart data={route.params.LineDataTraces} />
      <SolidButton
          style={{
            marginHorizontal: 5,
          }}
          text="Survey"
          onPress={() => {
            navigation.navigate('SurveyScreen');
          }}
        />
      <View style={LOCAL_STYLES.BUTTON_CONTAINER}>
      <SmallButton
          style={{
            marginHorizontal: 5,
          }}
          text="User"
          onPress={() => {
            toggleModal(true);
          }}
        />
        <SmallButton
          text="History"
          style={{
            marginHorizontal: 5,
          }}
          onPress={() => {}}
        />
      </View>
      <SolidButton
          style={{
            marginHorizontal: 5,
          }}
          text="Predictable Behaviour"
          onPress={() => {
            navigation.navigate(
              'PredictionScreen',
              route.params.PredictableBehaviors,
            );
          }}
        />
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