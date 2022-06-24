import React from 'react';
import {STANDARD_HEADER_APP} from '../../../components/header/screenOptions';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookingDetails from '../../../screens/Customer/Bookings/BookDetails';
import CustomerDashboard from '../../../screens/Customer/CustomerDashBoard/CustomerDashboard';
const {Navigator, Screen} = createNativeStackNavigator();

const CustomerDashboardStack = () => (
  <Navigator screenOptions={STANDARD_HEADER_APP}>
    <Screen name="CustomerDashboard" component={CustomerDashboard} />
    {/* <Screen name="BookingDetails" component={BookingDetails} /> */}
  </Navigator>
);

export default CustomerDashboardStack;
