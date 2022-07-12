import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import CorrespondinTracesRow from '../commons/components/CorrespondingTracesRow';
import PredictionRow from '../commons/components/PredictionRow';
import {COLOR2} from '../commons/styles/colors';
import {FONT_STYLES} from '../commons/styles/main-styles';

export default ({route}) => {
  return (
    <View style={LOCAL_STYLES.MAIN_CONTAINER}>  
      <Text style={FONT_STYLES.PAGE_TITLE}>Detailed Data trace info:</Text>
      <PredictionRow onPress={() => {}} text = {route.params.text} />
      <FlatList
        contentContainerStyle={LOCAL_STYLES.LIST_CONTAINER}
        data={route.params.data}
        renderItem={({item}) => <CorrespondingTracesRow text={item}/>}
      />
    </View>
  );
};

const LOCAL_STYLES = StyleSheet.create({
  MAIN_CONTAINER: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLOR2,
  },
  LIST_CONTAINER: {
    width: 400,
  },
});