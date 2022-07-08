import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {FONT_STYLES} from '../commons/styles/main-styles';

const SurveyItem = props => {
  return (
    <View style={LOCAL_STYLES.ITEM_CONTAINER}>
      <Text style={LOCAL_STYLES.ITEM_TITLE}>{props.question}</Text>
      <TextInput style={{backgroundColor: '#ccc'}} />
    </View>
  );
};

export default ({navigation}) => {
  return (
    <View style={LOCAL_STYLES.MAIN_CONTAINER}>
      <Text style={FONT_STYLES.PAGE_TITLE}>Survey</Text>
      <SurveyItem question="How many locations/check-ins have you shared last month?" />
      <SurveyItem question="How many photos have you shared last month?" />
      <SurveyItem question="How many posts/stories have you shared last month?" />
      <SurveyItem question="How many friend requests have you accepted last month?" />    
      <SurveyItem question="How many times have you searched for something / clicked a link in the last month?" />
      <Button
        title="Submit"
        onPress={() => {
          console.log('Submitted form');
        }}
      />
      <Button
        title="Go back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

const LOCAL_STYLES = StyleSheet.create({
  MAIN_CONTAINER: {
    flex: 1,
  },

  ITEM_CONTAINER: {},
  ITEM_TITLE: {
    color: '#333',
    fontSize: 20,
  },
});