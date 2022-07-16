/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import App from './App';
import {name as appName} from './app.json';
import Route from './src/navigation';
const Brans = () => (
  <SafeAreaProvider>
    <Route />
  </SafeAreaProvider>
);

AppRegistry.registerComponent(appName, () => Brans);
