import React from 'react';
import {STANDARD_HEADER_APP} from '../../../components/header/screenOptions';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookingDetails from '../../../screens/Customer/Bookings/BookDetails';
import Bookings from '../../../screens/Customer/Bookings/Bookings';
const {Navigator, Screen} = createNativeStackNavigator();

const BookingsStack = () => (
  <Navigator screenOptions={STANDARD_HEADER_APP}>
    <Screen name="Bookings" component={Bookings} />
    <Screen name="BookingDetails" component={BookingDetails} />
  </Navigator>
);

export default BookingsStack;
