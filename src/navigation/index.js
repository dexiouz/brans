import React, { useReducer, useMemo, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStackScreen from './AuthNavigator';
import AppNavigator from './AppNavigator/AppNavigator';
import { BACKGROUND } from '../consts/COLOURS';
import Loader from '../components/Loader';
import { AuthContext } from '../context/authContext';

const AppStack = createNativeStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: BACKGROUND,
  },
};
const initialAuthState = {
  isLoading: true,
  userEmailOrPhoneOrPhone: null,
  userToken: null,
};

const Route = () => {
  const authReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userEmailOrPhone: action.emailOrPhone,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userEmailOrPhone: null,
          userToken: null,
          isLoading: false,
        };
    }
  };

  const [authState, dispatch] = useReducer(authReducer, initialAuthState);
  const authContext = useMemo(
    () => ({
      signIn: async (token, emailOrPhone) => {
        try {
          await AsyncStorage.setItem('token', token);
          dispatch({ type: 'LOGIN', emailOrPhone, token });
        } catch (e) {
          console.log('error in signIn', e);
        }
      },
      signOut: async () => {
        dispatch({ type: 'LOGOUT' });
      },
    }),
    [],
  );

  const retrieveToken = async () => {
    let userToken = null;
    try {
      userToken = await AsyncStorage.getItem('token');
      console.log('userToken', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    } catch (error) {
      console.log('error retrieving token', error);
    }
  };

  useEffect(() => {
    retrieveToken();
  }, []);

  if (authState.isLoading) {
    return <Loader />;
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer theme={navTheme}>
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
          {authState.userToken ? (
            <AppStack.Screen component={AppNavigator} name="AppNavigator" />
          ) : (
            <AppStack.Screen
              name="AuthStackScreen"
              component={AuthStackScreen}
            />
          )}
        </AppStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default Route;
