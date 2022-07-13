import React from 'react';
import {STANDARD_HEADER_APP} from '../../../components/header/screenOptions';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomerDashboard from '../../../screens/Customer/CustomerDashBoard/CustomerDashboard';
const {Navigator, Screen} = createNativeStackNavigator();

const CustomerDashboardStack = () => (
  <Navigator screenOptions={STANDARD_HEADER_APP}>
    <Screen name="CustomerDashboard" component={CustomerDashboard} />
  </Navigator>
);

export default CustomerDashboardStack;
