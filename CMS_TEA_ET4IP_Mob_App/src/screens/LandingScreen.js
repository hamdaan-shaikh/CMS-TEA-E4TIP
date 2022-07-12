import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {MAIN_STYLES} from '../commons/styles/main-styles';

import {
  HollowButton,
  SmallButton,
  SolidButton,
} from '../commons/components/Buttons'; 
import {COLOR2,COLOR3} from '../commons/styles/colors';
import {heightPercentageToDP} from 'react-native-responsive-screen';

export default ({navigation, route}) => {
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
          navigation.navigate('OverviewScreen', route.params.March);
        }}
      />

      <FlatList
        style={{
          maxHeight: heightPercentageToDP('30%'),
        }}
        contentContainerStyle={LOCAL_STYLES.LIST_STYLE}
        data={[1, 2, 3]}
        renderItem={({item}) => (
          <SmallButton
          style={{
            maxHeight: heightPercentageToDP('30%'),
          }}
          title={item.toString()}
          onPress={() => console.log(item)} />
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
    flex: 1,
    flexDirection: 'row',
  },
});