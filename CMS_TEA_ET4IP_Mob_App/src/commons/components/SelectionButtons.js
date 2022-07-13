import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, FlatList} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {COLOR1, COLOR3, COLOR4, COLOR5} from '../styles/colors';
import {MAIN_STYLES} from '../styles/main-styles';
import {SmallButton} from './Buttons';

const SingleButton = ({text, onPress, active}) => {
  return (
    <SmallButton
      text={text}
      onPress={onPress}
      style={[
        {
          marginHorizontal: widthPercentageToDP('1%'),
        },
        active ? LOCAL_STYLES.ACTIVE_BUTTON_STYLE : undefined,
      ]}
    />
  );
};

// Button list should be a list of objects: { text, onPress }
export default ({buttonList}) => {
  const [state, setState] = useState({
    currIndex: 0,
  });

  return (
    <FlatList
      style={{
        flexGrow: 0,
      }}
      contentContainerStyle={LOCAL_STYLES.MAIN_CONTAINER}
      data={buttonList}
      horizontal
      renderItem={({item, index}) => (
        <SingleButton
          text={item.text}
          onPress={() => {
            setState(prev => ({
              ...prev,
              currIndex: index,
            }));
            item.onPress();
          }}
          active={state.currIndex === index}
        />
      )}
    />
  );
};

const LOCAL_STYLES = StyleSheet.create({
  MAIN_CONTAINER: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 20,
  },
  FLATLIST_CONTAINER: {
  height: 200,
  },
  ACTIVE_BUTTON_STYLE: {
    backgroundColor: COLOR5,
  },
});