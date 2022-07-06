import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screen imports
import LandingScreen from '../screens/LandingScreen';
import OverviewScreen from '../screens/OverviewScreen';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LandingScreen" component={LandingScreen} />
      <Stack.Screen name="OverviewScreen" component={OverviewScreen} />
    </Stack.Navigator>
  );
};