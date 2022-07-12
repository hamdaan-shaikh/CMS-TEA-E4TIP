import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import PredictionRow from '../commons/components/PredictionRow';
import {FONT_STYLES} from '../commons/styles/main-styles';
import {COLOR2} from '../commons/styles/colors';

export default ({navigation}) => {
  return (
    <View style={LOCAL_STYLES.MAIN_CONTAINER}>
      <Text style={FONT_STYLES.PAGE_TITLE}>Predictable Behaviours</Text>
      <FlatList
        contentContainerStyle={LOCAL_STYLES.LIST_STYLE}
        data={[0, 1, 2, 3]}
        renderItem={({item}) => (
          <PredictionRow
            text={''}
            onPress={() => {
              navigation.navigate('CorrespondingTracesScreen', {
                predictionText: '',
              });
            }}
          />
        )}
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
  TITLE_TEXT: {
    fontSize: 30,
    color: '#333',
  },
  LIST_STYLE: {
    width: 400,
  },
});