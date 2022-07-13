import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import FirstPlace from '../../assets/firstPlace.png';
import SecondPlace from '../../assets/secondPlace.png';
import ThirdPlace from '../../assets/thirdPlace.png';

const first = Image.resolveAssetSource(FirstPlace).uri;
const second = Image.resolveAssetSource(SecondPlace).uri;
const third = Image.resolveAssetSource(ThirdPlace).uri;

const getImage = position => {
  if (position === 0) {
    return {uri: first};
  } else if (position === 1) {
    return {uri: second};
  } else if (position === 2) {
    return {uri: third};
  }
  return {uri: undefined};
};

export default ({position}) => {
  return (
    <View style={LOCAL_STYLES.MAIN_CONTAINER}>  
      <Text style={LOCAL_STYLES.TEXT_STYLE}>Privacy Badge</Text>
      <View style={LOCAL_STYLES.BADGE_CONTAINER}>
        <Image source={getImage(position)} style={LOCAL_STYLES.IMAGE_STYLE} />
      </View>
    </View>
  );
};

const LOCAL_STYLES = StyleSheet.create({
  MAIN_CONTAINER: {
    alignItems: 'center',
  },
  TEXT_STYLE: {
    color: '#333',
    fontSize: 30,
  },
  BADGE_CONTAINER: {
    paddingTop: 5,
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  IMAGE_STYLE: {
    resizeMode: 'stretch',
    width: '100%',
    height: '100%',
  },
});