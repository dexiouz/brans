import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStackScreen from './AuthNavigator';
import AppNavigator from './AppNavigator/AppNavigator';
import {BACKGROUND} from '../consts/COLOURS';
const AppStack = createNativeStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: BACKGROUND,
  },
};

const Route = () => (
  <NavigationContainer theme={navTheme}>
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      {/* <AppStack.Screen name="AppNavigator" component={AppNavigator} /> */}
      <AppStack.Screen name="AuthStackScreen" component={AuthStackScreen} />
    </AppStack.Navigator>
  </NavigationContainer>
);

export default Route;
