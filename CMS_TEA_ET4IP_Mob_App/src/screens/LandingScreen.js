import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import {MAIN_STYLES} from '../commons/styles/main-styles';

export default ({navigation}) => {
  return (
    <View style={LOCAL_STYLES.MAIN_CONTAINER}>
      <Button
        title="Check your Privacy Data-Traces"
        onPress={() => {
          navigation.navigate('OverviewScreen');
        }}
      />

      <FlatList
        data={[1, 2, 3]}
        renderItem={({item}) => (
          <Button title={item.toString()} onPress={() => console.log(item)} />
        )}
      />
    </View>
  );
};

const LOCAL_STYLES = StyleSheet.create({
  MAIN_CONTAINER: {
    flex: 1,
    ...MAIN_STYLES.CENTER_CONTENT,
  },
});