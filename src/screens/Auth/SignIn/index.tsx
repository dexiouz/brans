import React, {FC, useContext, useState} from 'react';
import {Formik} from 'formik';
import {useMutation} from '@apollo/client';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from '../../../components/Button';
import TemplateTextInput from '../../../components/TemplateTextInput';
import {StyleSheet} from 'react-native';
import {validationSchema} from './validationSchema';
import TemplateText from '../../../components/TemplateText';
import {NavigationProps} from '../../../utils/types';
import FormikErrors from '../../../components/FormikError';
import {SIGN_IN} from '../../../graphql/mutations';
import {AuthContext} from '../../../context/authContext';
import useAuth from '../../../hooks/useAuth';
const SignIn: FC<NavigationProps> = ({navigation}) => {
  const {handleSignIn, loading, validationError} = useAuth();

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}
      enableOnAndroid>
      <Formik
        initialValues={{emailOrPhone: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={values => handleSignIn(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <>
            <TemplateTextInput
              hasLabel
              labelText="Phone or Email"
              name="emailOrPhone"
              blurOnSubmit={false}
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              value={values.emailOrPhone}
              onChangeText={handleChange('emailOrPhone')}
              onBlur={handleBlur('emailOrPhone')}
              error={
                touched.emailOrPhone && errors.emailOrPhone
                  ? errors.emailOrPhone
                  : null
              }
            />
            <TemplateTextInput
              hasLabel
              labelText="Password"
              name="password"
              blurOnSubmit={false}
              returnKeyType="done"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={
                touched.password && errors.password ? errors.password : null
              }
            />
            <FormikErrors
              touched={touched.emailOrPhone || null}
              errors={errors.emailOrPhone || null}
            />
            <FormikErrors
              touched={touched.password || null}
              errors={errors.password || null}
            />
            <FormikErrors
              touched={validationError || null}
              errors={validationError || null}
            />
            <Button
              disabled={loading}
              loading={loading}
              round
              mt={20}
              // onPress={() => handleSubmit()}
              >
              Login
            </Button>
            <TemplateText
              size={14}
              center
              mt={10}
              underline
              onPress={() => navigation.navigate('ForgotPassword')}>
              Forgot password
            </TemplateText>
          </>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
    paddingTop: 20,
  },
});
