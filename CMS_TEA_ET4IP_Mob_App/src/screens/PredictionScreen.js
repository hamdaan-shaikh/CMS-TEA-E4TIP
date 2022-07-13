import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import PredictionRow from '../commons/components/PredictionRow';
import {FONT_STYLES} from '../commons/styles/main-styles';
import {COLOR2} from '../commons/styles/colors';

import data from '../commons/data.json';

const sectionedData = data.March.PredictableBehaviors.map(item => ({
  title: item.title,
  items: item.items.reduce((prev, curr) => {
    return [...prev, ...curr.items];
  }, []),
}));

let predictionScoring = data.March.PredictableBehaviors.reduce(
  (prev, curr) => ({
    ...prev,
    [curr.title]: [],
  }),
  {},
);

export default ({navigation, route}) => {
  const [prediction, setPrediction] = useState([]);

  useEffect(() => {
    predictionScoring = data.March.PredictableBehaviors.reduce(
      (prev, curr) => ({
        ...prev,
        [curr.title]: [],
      }),
      {},
    );
    for (let i = 0; i < route.params.userData.length; i++) {
      for (let key in sectionedData) {
        if (sectionedData[key].items.includes(route.params.userData[i])) {
          predictionScoring = {
            ...predictionScoring,
            [sectionedData[key].title]: [
              ...predictionScoring[sectionedData[key].title],
              route.params.userData[i],
            ],
          };
        }
      }
    }

    for (let key in sectionedData) {
      setPrediction(prev => [
        ...prev,
        {
          title:
            sectionedData[key].items[
              Math.floor(Math.random() * sectionedData[key].items.length)
            ],
          section: sectionedData[key].title,
          strength: predictionScoring[sectionedData[key].title],
        },
      ]);
    }
  }, []);

  return (
    <View style={LOCAL_STYLES.MAIN_CONTAINER}>
      <Text style={FONT_STYLES.PAGE_TITLE}>Predictable Behaviours</Text>
      <FlatList
        contentContainerStyle={LOCAL_STYLES.LIST_STYLE}
        data={prediction.filter(item => predictionScoring[item.section].length)}
        renderItem={({item}) => (
          <PredictionRow
          addPrefix
          value={predictionScoring[item.section].length}
            text={item.title}
            onPress={() => {
              navigation.navigate('CorrespondingTracesScreen', {
                predictionText: item.title,
                data: predictionScoring[item.section],
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