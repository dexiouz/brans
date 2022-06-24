import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {STANDARD_HEADER_APP} from '../../../components/header/screenOptions';
import CustomerBottomTabs from './CustomerBottomTabs';
import BookingDetails from '../../../screens/Customer/Bookings/BookDetails';
const {Navigator, Screen} = createNativeStackNavigator();

const CustomerStackScreen = () => (
  <Navigator screenOptions={{headerShown: false}}>
    <Screen
      name="CustomerBottomTabs"
      component={CustomerBottomTabs}
      options={{headerShown: false}}
    />
    {/* <Screen
      name="BookingDetails"
      component={BookingDetails}
      // options={{...STANDARD_HEADER_APP}}
    /> */}
  </Navigator>
);

export default CustomerStackScreen;
