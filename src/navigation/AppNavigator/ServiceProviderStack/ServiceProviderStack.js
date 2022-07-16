import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {STANDARD_HEADER_APP} from '../../../components/header/screenOptions';
import ServiceProviderBottomTabs from './ServiceProviderBottomTabs';

const {Navigator, Screen} = createNativeStackNavigator();

const ServiceProviderStack = () => (
  <Navigator screenOptions={(STANDARD_HEADER_APP, {headerShown: false})}>
    <Screen
      name="ServiceProviderBottomTabs"
      component={ServiceProviderBottomTabs}
    />
  </Navigator>
);

export default ServiceProviderStack;
