import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import CustomerDashboardStack from './CustomerDashboardStack';
import BookingsStack from './BookingsStack';
import BookStack from './BookStack';
import CartStack from './CartStack';
import { BACKGROUND, WHITE } from '../../../consts/COLOURS';
import { IS_LARGE_SCREEN, IS_ANDROID } from '../../../consts/LAYOUT';
const { Navigator, Screen } = createBottomTabNavigator();

const CustomerTabNavigator = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: WHITE,
      tabBarStyle: styles.tabBarStyle,
    }}>
    <Screen
      name="CustomerDashBoard"
      component={CustomerDashboardStack}
      options={{
        tabBarLabel: 'Dashboard',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Screen
      name="Book"
      component={BookStack}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <Fontisto name="plus-a" color={color} size={size + 7} />
        ),
      }}
    />
    <Screen
      name="Bookings"
      component={BookingsStack}
      options={{
        tabBarLabel: 'Bookings',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="switcher" color={color} size={size - 4} />
        ),
      }}
    />
    <Screen
      name="Cart"
      component={CartStack}
      options={{
        tabBarBadge: 3,
        tabBarLabel: 'Cart',
        tabBarIcon: ({ color, size }) => (
          <Feather name="shopping-cart" color={color} size={size} />
        ),
      }}
    />
  </Navigator>
);

export default CustomerTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: BACKGROUND,
    height: IS_LARGE_SCREEN && !IS_ANDROID ? 90 : 65,
    paddingTop: IS_LARGE_SCREEN && !IS_ANDROID ? 10 : 0,
  },
});
{
  /* <TemplateIcon
            iconFamily="Feather"
            name="shopping-cart"
            size={26}
            color={WHITE}
            style={{right: 11}}
          /> */
}
