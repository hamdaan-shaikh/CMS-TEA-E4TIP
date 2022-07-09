import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {MAIN_STYLES} from '../commons/styles/main-styles';

import {
  HollowButton,
  SmallButton,
  SolidButton,
} from '../commons/components/Buttons'; 
import {COLOR2} from '../commons/styles/colors';

export default ({navigation}) => {
  return (
    <View style={LOCAL_STYLES.MAIN_CONTAINER}>
      <SolidButton
        text="Make a Post"
        onPress={() => {
          navigation.navigate('MakePostScreen');
        }}
      />
      <HollowButton
        text="Check your Privacy Data-Traces"
        onPress={() => {
          navigation.navigate('OverviewScreen');
        }}
      />

      <FlatList
        contentContainerStyle={LOCAL_STYLES.LIST_STYLE}
        data={[1, 2, 3]}
        renderItem={({item}) => (
          <SmallButton title={item.toString()} onPress={() => console.log(item)} />
        )}
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
    flexDirection: 'row',
  },
});