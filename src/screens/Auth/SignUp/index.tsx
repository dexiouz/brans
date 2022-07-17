import React from 'react';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from '../../../components/Button';
import TemplateTextInput from '../../../components/TemplateTextInput';
import TemplatePicker from '../../../components/TemplatePicker/';
import {StyleSheet} from 'react-native';
import {validationSchema} from './valdationSchema';
import FormikErrors from '../../../components/FormikError';
import {initialValues} from './initialValues';
import {NavigationProps} from '../../../utils/types';
import useAuth from '../../../hooks/useAuth';
import {RADIUS_XSMALL} from '../../../consts/LAYOUT';
export const userTypes = [
  {label: 'Customer', value: 'customer'},
  {label: 'Service Provider', value: 'serviceProvider'},
];

const SignUp: React.FC<NavigationProps> = ({navigation}) => {
  const {handleSignUp, loading, validationError} = useAuth();
  return (
    <KeyboardAwareScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      enableOnAndroid>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => handleSignUp(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <>
            <TemplatePicker
              topLabel="How do you want to use brans"
              items={userTypes}
              placeholder="Select..."
              value={values.userType}
              onValueChange={handleChange('userType')}
              error={touched.userType && errors.userType ? errors.userType : ''}
            />

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
                  : ''
              }
            />
            <TemplateTextInput
              hasLabel
              labelText="Password"
              name="password"
              blurOnSubmit={false}
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              value={values.password}
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={touched.password && errors.password ? errors.password : ''}
            />
            <TemplateTextInput
              hasLabel
              labelText="Confirm Password"
              name="confirmPassword"
              blurOnSubmit={false}
              returnKeyType="done"
              autoCapitalize="none"
              autoCorrect={false}
              value={values.confirmPassword}
              secureTextEntry
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              error={
                touched.confirmPassword && errors.confirmPassword
                  ? errors.confirmPassword
                  : ''
              }
            />
            <FormikErrors
              touched={touched.emailOrPhone || null}
              errors={errors.emailOrPhone || null}
            />
            <FormikErrors
              touched={touched.userType || null}
              errors={errors.userType || null}
            />
            <FormikErrors
              touched={touched.password || null}
              errors={errors.password || null}
            />
            <FormikErrors
              touched={touched.confirmPassword || null}
              errors={errors.confirmPassword || null}
            />
            <FormikErrors
              touched={validationError || null}
              errors={validationError || null}
            />

            <Button
              mt={20}
              radius={RADIUS_XSMALL}
              onPress={handleSubmit}
              loading={loading}
              disabled={loading}>
              Sign up
            </Button>
          </>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});
