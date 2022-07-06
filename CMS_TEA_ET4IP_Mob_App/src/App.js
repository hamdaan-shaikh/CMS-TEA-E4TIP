/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';

import AppStack from './navigation/MainAppStack';

const App = () => {
  return (
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
  );
};

export default App;