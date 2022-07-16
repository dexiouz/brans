import React from 'react';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from '../../../components/Button';
import TemplateTextInput from '../../../components/TemplateTextInput';
import Picker from '../../../components/TemplatePicker/';
import {StyleSheet} from 'react-native';
import {validationSchema} from './valdationSchema';
import FormikErrors from '../../../components/FormikError';
import {initialValues} from './initialValues';
import {NavigationProps} from '../../../utils/types';
export const userTypes = [
  {label: 'Customer', value: 'customer'},
  {label: 'Service Provider', value: 'serviceProvider'},
];

const SignUp: React.FC<NavigationProps> = ({navigation}) => {
  console.log();
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}
      enableOnAndroid>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={value => navigation.navigate('CreateService')}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <>
            <Picker
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
              name="phoneOrEmail"
              blurOnSubmit={false}
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              value={values.phoneOrEmail}
              onChangeText={handleChange('phoneOrEmail')}
              onBlur={handleBlur('phoneOrEmail')}
              error={
                touched.phoneOrEmail && errors.phoneOrEmail
                  ? errors.phoneOrEmail
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
              touched={touched.phoneOrEmail || null}
              errors={errors.phoneOrEmail || null}
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

            <Button mt={20} onPress={handleSubmit}>
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
  contentContainerStyle: {
    flex: 1,
    paddingTop: 20,
  },
});
