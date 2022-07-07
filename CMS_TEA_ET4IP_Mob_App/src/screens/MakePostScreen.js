import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {FONT_STYLES} from '../commons/styles/main-styles';

export default ({navigation}) => {
  return (
    <View style={LOCAL_STYLES.MAIN_CONTAINER}>
      <Text style={FONT_STYLES.PAGE_TITLE}>Make a Post</Text>
      <Button title="Enter Post Text" onPress={() => {}} />
      <Button
        title="Share Location"
        onPress={() => {
          navigation.navigate('PredictionScreen');
        }}
      />
      <Button title="Upload Photo" onPress={() => {}} />
      <Button title="Tag a Friend" onPress={() => {}} />
    </View>
  );
};

const LOCAL_STYLES = StyleSheet.create({
  MAIN_CONTAINER: {
    flex: 1,
  },
});