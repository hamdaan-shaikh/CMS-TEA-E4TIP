import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import PredictionRow from '../commons/components/PredictionRow';
import {COLOR2} from '../commons/styles/colors';
import {FONT_STYLES} from '../commons/styles/main-styles';

export default ({navigation, route}) => {
  return (
    <View style={LOCAL_STYLES.MAIN_CONTAINER}>
      <Text style={FONT_STYLES.PAGE_TITLE}>Predictable Behaviours</Text>
      <FlatList
        contentContainerStyle={LOCAL_STYLES.LIST_STYLE}
        data={route.params}
        renderItem={({item}) => (
          <PredictionRow
            text={item.title}
            onPress={() => {
              navigation.navigate('CorrespondingTracesScreen', {
                predictionText: item.title,
                data: item.items,
                history: true,
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