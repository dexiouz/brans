import React from 'react';
import { STANDARD_HEADER_APP } from '../../../components/header/screenOptions';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../../../screens/Customer/Book/Cart';
const { Navigator, Screen } = createNativeStackNavigator();

const CartStack = () => (
    <Navigator screenOptions={STANDARD_HEADER_APP}>
        <Screen name="Cart" component={Cart} />
    </Navigator>
);

export default CartStack;
