import React, {useEffect, useState } from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {MAIN_STYLES} from '../commons/styles/main-styles';

import {
  HollowButton,
  SmallButton,
  SolidButton,
} from '../commons/components/Buttons'; 
import {COLOR2,COLOR3} from '../commons/styles/colors';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import SelectionButtons from '../commons/components/SelectionButtons';

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
    </View>
  );
};

const LOCAL_STYLES = StyleSheet.create({
  MAIN_CONTAINER: {
    flex: 1,
    ...MAIN_STYLES.CENTER_CONTENT,
    backgroundColor: COLOR2,
  },
  LIST_STYLE: {
    flex: 1,
    flexDirection: 'row',
  },
});