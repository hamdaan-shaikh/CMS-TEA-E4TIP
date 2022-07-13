import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import VictoryOverview from '../commons/components/VictoryOverview';

// Components
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';

// Styles
import {FONT_STYLES, MAIN_STYLES} from '../commons/styles/main-styles';
import {COLOR2} from '../commons/styles/colors';


import MapView, {Marker} from 'react-native-maps';

export default ({route}) => {
  const mapRef = useRef(null);    
  return (
    <View style={LOCAL_STYLES.MAIN_CONTAINER}>
      <Text style={FONT_STYLES.PAGE_TITLE}>Bar Chart Screen</Text>
      <View style={LOCAL_STYLES.MAP_CONTAINER}>
        <MapView
          ref={mapRef}
          onLayout={() => {
            mapRef.current.fitToCoordinates(
              route.params.map(item => ({
                latitude: item.lat,
                longitude: item.lon,
              })),
              {
                edgePadding: {top: 30, right: 30, bottom: 30, left: 30},
              },
            );
          }}
          style={LOCAL_STYLES.MAP_STYLE}>
          {route.params.map(item => (
            <Marker
              coordinate={{
                latitude: item.lat,
                longitude: item.lon,
              }}
            />
          ))}
        </MapView>
      </View>
    </View>
  );
};

const LOCAL_STYLES = StyleSheet.create({
  MAIN_CONTAINER: {
    flex: 1,
    ...MAIN_STYLES.CENTER_CONTENT,
    backgroundColor: COLOR2,
  },
  MAP_CONTAINER: {
    width: WP('100%'),
    height: WP('120%'),
  },
  MAP_STYLE: {
    ...StyleSheet.absoluteFillObject,
  },
});