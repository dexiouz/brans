import React, {FC} from 'react';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from '../../../components/Button';
import TemplateTextInput from '../../../components/TemplateTextInput';
import {StyleSheet} from 'react-native';
import {validationSchema} from './validationSchema';
import TemplateText from '../../../components/TemplateText';
import {NavigationProps} from '../../../utils/types';
import FormikErrors from '../../../components/FormikError';

const SignIn: FC<NavigationProps> = ({navigation}) => {
  console.log();
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}
      enableOnAndroid>
      <Formik
        initialValues={{emailOrPhone: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={() => {}}>
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
            <Button round mt={20} onPress={handleSubmit}>
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
