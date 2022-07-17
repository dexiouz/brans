/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { useMutation, useApolloClient } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../context/authContext';
import { SIGN_IN, SIGN_UP, CHANGE_PASSWORD, LOGOUT } from '../graphql/mutations';

const useAuth = () => {
    const client = useApolloClient();
    const { signIn, signOut } = useContext(AuthContext);
    const [register, { loading: signUpLoading }] = useMutation(SIGN_UP);
    const [login, { loading: signInLoading }] = useMutation(SIGN_IN);
    const [changePassword, { loading: changePasswordLoading }] = useMutation(CHANGE_PASSWORD);
    const [logout, { loading: logOutLoading }] = useMutation(LOGOUT);
    const [validationError, setValidationError] = useState(null);

    const loading = signInLoading || signUpLoading || logOutLoading || changePasswordLoading;

    const handleSignIn = async ({ emailOrPhone, password }) => {
        const data = {
            emailOrPhone,
            password,
        };

        try {
            const response = await login({
                variables: {
                    data,
                },
            });
            if (response) {
                console.log('response', response);
                const token = response?.data?.login?.token;
                await signIn(token, emailOrPhone);
            }
        } catch (error) {
            console.log('graphql signIn error', error);
            setValidationError(error?.toString());
        }
    };


    const handleSignUp = async ({
        userType,
        emailOrPhone,
        password,
        confirmPassword,
    }) => {
        const data = {
            userType,
            emailOrPhone,
            password,
            confirmPassword,
        };

        try {
            const response = await register({
                variables: {
                    data,
                },
            });
            if (response) {
                console.log('response', response);
                const token = response?.data?.signUp?.token;
                await signIn(token, emailOrPhone);
            }
        } catch (error) {
            console.log('graphql signUp error', error);
            setValidationError(error?.toString());
        }
    };

    const handleChangePassword = async ({ password, oldPassword }) => {
        const data = {
            newPassword: password,
            currentPassword: oldPassword,
        };
        try {
            const response = await changePassword({
                variables: {
                    data,
                },
            });
            if (response) {
                console.log('response', response);
            }
        } catch (error) {
            console.log('graphql change password error', error);
            setValidationError(error?.toString());
        }
    };

    const handleSignOut = async () => {
        const handleClearAsyncStorage = async () => {
            const asyncStorageKeys = await AsyncStorage.getAllKeys();
            if (asyncStorageKeys.length > 0) {
                await AsyncStorage.multiRemove(asyncStorageKeys);
            }
        };
        try {
            // await logout();
            await client.clearStore();
            await handleClearAsyncStorage();
            await signOut();
        } catch (error) {
            await handleClearAsyncStorage();
            // setValidationError(error?.toString());
            console.log('graphql sign out error', error);
        }
    };
    return {
        loading,
        validationError,
        handleSignIn,
        handleSignUp,
        handleSignOut,
        handleChangePassword,
    };
};

export default useAuth;

const styles = StyleSheet.create({});
