import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import TraceCategoriesRow from '../commons/components/TraceCategoryRow';
import PredictionRow from '../commons/components/PredictionRow';
import {FONT_STYLES} from '../commons/styles/main-styles';
import {COLOR2} from '../commons/styles/colors';

export default () => {
  return (
    <View style={LOCAL_STYLES.MAIN_CONTAINER}>
      <Text style={FONT_STYLES.PAGE_TITLE}>
        All Data Traces corresponding to:
      </Text>
      <PredictionRow onPress={() => {}} />
      <FlatList
        contentContainerStyle={LOCAL_STYLES.LIST_CONTAINER}
        data={[0, 0, 0]}
        renderItem={({item}) => <TraceCategoriesRow />}
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