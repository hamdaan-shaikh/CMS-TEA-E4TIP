import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

// Components
import DataOverviewGraph from '../commons/components/DataOverviewGraph';
import PrivacyBadge from '../commons/components/PrivacyBadge';

// Styles
import {MAIN_STYLES} from '../commons/styles/main-styles';

export default ({navigation}) => {
  return (
    <View style={LOCAL_STYLES.MAIN_CONTAINER}>
      <DataOverviewGraph />
      <View style={LOCAL_STYLES.BUTTON_CONTAINER}>
        <Button title="User" onPress={() => {}} />
        <Button title="Take" onPress={() => {}} />
        <Button
          title="Predictable Behaviour"
          onPress={() => {
            navigation.navigate('PredictionScreen');
          }}
        />
      </View>
      <PrivacyBadge />
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