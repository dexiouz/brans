import React from 'react';
import {STANDARD_HEADER_APP} from '../../../components/header/screenOptions';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Book from '../../../screens/Customer/Book/Book';
const {Navigator, Screen} = createNativeStackNavigator();

const BookStack = () => (
  <Navigator screenOptions={STANDARD_HEADER_APP}>
    <Screen name="Book" component={Book} />
  </Navigator>
);

export default BookStack;
