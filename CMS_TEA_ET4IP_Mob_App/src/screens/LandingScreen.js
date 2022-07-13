import React, {useEffect, useState } from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {MAIN_STYLES} from '../commons/styles/main-styles';

import {
  HollowButton,
  SmallButton,
  SolidButton,
} from '../commons/components/Buttons'; 
import {COLOR1, COLOR2, COLOR3, COLOR4, COLOR5} from '../commons/styles/colors';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import SelectionButtons from '../commons/components/SelectionButtons';
import PrivacyBadge from '../commons/components/PrivacyBadge';  

export default ({navigation, route}) => {
  const [state, setState] = useState({
    month: 'March',
  });

  const updateMonth = month => {
    setState(prev => ({
      ...prev,
      month,
    }));
  };  
  return (
    <View style={LOCAL_STYLES.MAIN_CONTAINER}>
      <Text style={LOCAL_STYLES.WELCOME_TEXT}>
        {'Welcome to the ET4IP tool!'}
      </Text>
      <Text
        style={[
          LOCAL_STYLES.WELCOME_TEXT,
          {
            marginBottom: 50,
          },
        ]}>
        {"Let's learn something about privacy."}
      </Text>
      <SolidButton
        text="Make a Post"
        onPress={() => {
          navigation.navigate('MakePostScreen', {
            locationValue: route.params[state.month].GraphInfo[0].value,
          });
        }}
      />
      <SolidButton
        text="Check your Privacy Data-Traces"
        onPress={() => {
          navigation.navigate('OverviewScreen', route.params.March);
        }}
      />

<SelectionButtons
        buttonList={Object.keys(route.params).map(item => ({
          text: item,
          onPress: () => {
            updateMonth(item);
          },
        }))}
      />
      <PrivacyBadge />
    </View>
  );
};

const LOCAL_STYLES = StyleSheet.create({
  MAIN_CONTAINER: {
    flex: 1,
    ...MAIN_STYLES.CENTER_CONTENT,
    backgroundColor: COLOR2,
  },
  WELCOME_TEXT: {
    paddingHorizontal: widthPercentageToDP('3%'),
    fontSize: widthPercentageToDP('7%'),
    textAlign: 'center',
    color: COLOR4,
    fontWeight: 'bold',
  },
  LIST_STYLE: {
    flex: 1,
    flexDirection: 'row',
  },
});