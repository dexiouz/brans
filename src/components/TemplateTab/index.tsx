/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {BACKGROUND, WHITE, PRIMARY} from '../../consts/COLOURS';
import Box from '../../components/Box';
import {WRAPPER_MARGIN} from '../../consts/LAYOUT';
const {Navigator, Screen} = createMaterialTopTabNavigator();

interface Props {
  label: string;
  component: React.ComponentType<React.ElementType>;
  screens: {
    map(arg0: (screen: Props) => JSX.Element): React.ReactNode;
    component: React.ElementType;
    label: string;
  };
}

const TemplateTab: FC<Props> = ({screens}) => {
  return (
    <Navigator
      initialRouteName="SignIn"
      screenOptions={{
        tabBarActiveTintColor: WHITE,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarItemStyle: styles.tabBarItemStyle,
        tabBarStyle: styles.tabBarStyle,
        tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
      }}
      sceneContainerStyle={styles.navigator}>
      {screens.map((screen: Props) => (
        <Screen
          name={screen?.label}
          component={screen?.component}
          options={{
            tabBarLabel: screen?.label,
          }}
        />
      ))}
    </Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    fontSize: 15,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  tabBarItemStyle: {
    borderBottomWidth: 2,
    borderColor: 'transparent',
  },
  tabBarStyle: {
    backgroundColor: BACKGROUND,
    width: '90%',
    alignSelf: 'center',
    elevation: 0,
  },
  tabBarIndicatorStyle: {
    backgroundColor: PRIMARY,
    width: '30%',
    alignItems: 'center',
    marginLeft: WRAPPER_MARGIN * 2,
  },
  navigator: {
    paddingHorizontal: WRAPPER_MARGIN,
  },
});

export default TemplateTab;
