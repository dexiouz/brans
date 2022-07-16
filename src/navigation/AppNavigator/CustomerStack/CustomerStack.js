import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {STANDARD_HEADER_APP} from '../../../components/header/screenOptions';
import CustomerBottomTabs from './CustomerBottomTabs';
import BookingDetails from '../../../screens/Customer/Bookings/BookDetails';
import CustomerSettings from '../../../screens/Customer/CustomerSettings/CustomerSettings';
import RateService from '../../../screens/Customer/Bookings/RateService';
import PlaceOrder from '../../../screens/Customer/Book/PlaceOrder';
import Cart from '../../../screens/Customer/Book/Cart';

const {Navigator, Screen} = createNativeStackNavigator();
const CustomerStackScreen = () => (
  <Navigator>
    <Screen
      name="CustomerBottomTabs"
      component={CustomerBottomTabs}
      options={{headerShown: false}}
    />
    <Screen
      name="BookingDetails"
      component={BookingDetails}
      options={() => ({
        ...STANDARD_HEADER_APP,
      })}
    />
    <Screen
      name="CustomerSettings"
      component={CustomerSettings}
      options={() => ({
        ...STANDARD_HEADER_APP,
      })}
    />
    <Screen
      name="RateService"
      component={RateService}
      options={() => ({
        ...STANDARD_HEADER_APP,
      })}
    />
    <Screen
      name="PlaceOrder"
      component={PlaceOrder}
      options={() => ({
        ...STANDARD_HEADER_APP,
      })}
    />
    <Screen
      name="Cart"
      component={Cart}
      options={() => ({
        ...STANDARD_HEADER_APP,
      })}
    />
  </Navigator>
);

export default CustomerStackScreen;
