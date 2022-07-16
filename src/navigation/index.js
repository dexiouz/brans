import React from 'react';
import {Linking, Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStackScreen from './AuthNavigator';
import AppNavigator from './AppNavigator/AppNavigator';
import {BACKGROUND} from '../consts/COLOURS';
import Loader from '../components/Loader';
const AppStack = createNativeStackNavigator();

const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: BACKGROUND,
  },
};

const Route = () => {
  const [isReady, setIsReady] = React.useState(__DEV__ ? false : true);
  const [initialState, setInitialState] = React.useState();
  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== 'web' && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }
  if (!isReady) {
    return <Loader />;
  }
  return (
    <NavigationContainer
      // initialState={initialState}
      // onStateChange={state =>
      //   AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
      // }
      theme={navTheme}>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="AppNavigator" component={AppNavigator} />
        <AppStack.Screen name="AuthStackScreen" component={AuthStackScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
