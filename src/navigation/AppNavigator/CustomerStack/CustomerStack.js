import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {STANDARD_HEADER_APP} from '../../../components/header/screenOptions';
import CustomerBottomTabs from './CustomerBottomTabs';

const {Navigator, Screen} = createNativeStackNavigator();

const CustomerStackScreen = () => (
  <Navigator screenOptions={(STANDARD_HEADER_APP, {headerShown: false})}>
    <Screen name="CustomerBottomTabs" component={CustomerBottomTabs} />
  </Navigator>
);

export default CustomerStackScreen;
