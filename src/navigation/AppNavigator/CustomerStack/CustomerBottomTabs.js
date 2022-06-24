import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {STANDARD_HEADER_APP} from '../../../components/header/screenOptions';
import CustomerDashBoard from '../../../screens/Customer/CustomerDashBoard/CustomerDashboard';
import Book from '../../../screens/Customer/Book/Book';
import Bookings from '../../../screens/Customer/Bookings/Bookings';
import {BACKGROUND, WHITE} from '../../../consts/COLOURS';
import {IS_LARGE_SCREEN, IS_ANDROID} from '../../../consts/LAYOUT';
const {Navigator, Screen} = createBottomTabNavigator();

const CustomerTabNavigator = () => (
  <Navigator
    screenOptions={{
      ...STANDARD_HEADER_APP,
      tabBarActiveTintColor: WHITE,
      tabBarStyle: styles.tabBarStyle,
      tabBarShowLabel: false,
    }}>
    <Screen
      name="CustomerDashBoard"
      component={CustomerDashBoard}
      options={{
        tabBarLabel: 'Dashboard',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Screen
      name="Book"
      component={Book}
      options={{
        tabBarLabel: 'Book',
        tabBarIcon: ({color, size}) => (
          <Fontisto name="plus-a" color={color} size={size + 7} />
        ),
      }}
    />
    <Screen
      name="Bookings"
      component={Bookings}
      options={{
        tabBarLabel: 'Bookings',
        tabBarIcon: ({color, size}) => (
          <AntDesign name="switcher" color={color} size={size - 4} />
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
