import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {STANDARD_HEADER_APP} from '../../../components/header/screenOptions';
import ServiceProviderDashboard from '../../../screens/ServiceProvider/ServiceProviderDashboard/ServiceProviderDashboard';
import Catalogue from '../../../screens/ServiceProvider/Catalogue/Catalogue';
import Wallet from '../../../screens/ServiceProvider/Wallet/Wallet';
import {BACKGROUND, WHITE} from '../../../consts/COLOURS';
import {IS_LARGE_SCREEN, IS_ANDROID} from '../../../consts/LAYOUT';
const {Navigator, Screen} = createBottomTabNavigator();

const ServiceProviderBottomTabs = () => (
  <Navigator
    screenOptions={{
      ...STANDARD_HEADER_APP,
      tabBarActiveTintColor: WHITE,
      tabBarStyle: styles.tabBarStyle,
    }}>
    <Screen
      name="ServiceProviderDashboard"
      component={ServiceProviderDashboard}
      options={{
        tabBarLabel: 'Dashboard',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Screen
      name="Catalogue"
      component={Catalogue}
      options={{
        tabBarLabel: 'Catalogue',
        tabBarIcon: ({color, size}) => (
          <AntDesign name="plus" color={color} size={size} />
        ),
      }}
    />
    <Screen
      name="Wallet"
      component={Wallet}
      options={{
        tabBarLabel: 'Wallet',
        tabBarIcon: ({color, size}) => (
          <AntDesign name="switcher" color={color} size={size} />
        ),
      }}
    />
  </Navigator>
);

export default ServiceProviderBottomTabs;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: BACKGROUND,
    height: IS_LARGE_SCREEN && !IS_ANDROID ? 90 : 65,
    paddingTop: IS_LARGE_SCREEN && !IS_ANDROID ? 10 : 0,
  },
});
