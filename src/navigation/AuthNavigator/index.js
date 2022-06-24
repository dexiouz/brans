import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const AuthStack = createNativeStackNavigator();
import {STANDARD_HEADER_AUTH} from '../../components/header/screenOptions';
import Auth from '../../screens/Auth';
import CreateService from '../../screens/Auth/CreateService';
import ForgotPassword from '../../screens/Auth/ForgotPassword';
import ResetPassword from '../../screens/Auth/ForgotPassword/ResetPassword';
import ChangePassword from '../../screens/Auth/ChangePassword';

const AuthStackScreen = () => (
  <AuthStack.Navigator
    initialRouteName="Auth"
    screenOptions={STANDARD_HEADER_AUTH}>
    <AuthStack.Screen name="Auth" component={Auth} />
    <AuthStack.Screen name="CreateService" component={CreateService} />
    <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
    <AuthStack.Screen name="ResetPassword" component={ResetPassword} />
    <AuthStack.Screen name="ChangePassword" component={ChangePassword} />
  </AuthStack.Navigator>
);

export default AuthStackScreen;
