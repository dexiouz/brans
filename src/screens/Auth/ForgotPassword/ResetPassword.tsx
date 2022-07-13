import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from '../../../components/Button';
import TemplateTextInput from '../../../components/TemplateTextInput';
import {StyleSheet} from 'react-native';
import Box from '../../../components/Box';
import {WRAPPER_MARGIN} from '../../../consts/LAYOUT';
import {NavigationProps} from '../../../utils/types';
import useHeader from '../../../hooks/useHeader';
import FormikErrors from '../../../components/FormikError';

export const validationSchema = Yup.object({
  code: Yup.number()
    // .max(5, '-Maximum of 5 numbers')
    // .min(4, 'Minimum of 4 numbers')
    .required('- Enter the code sent to your phone or email.'),
  password: Yup.string()
    .min(6, '- Password must be minimum of 6 characters.')
    .required('- Password must be minimum of 6 characters.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], '- Passwords must match.')
    .required('- Passwords must match.'),
});

const ResetPassword: React.FC<NavigationProps> = ({navigation}) => {
  useHeader('Reset Password', false);
  return (
    <Box flex ph={WRAPPER_MARGIN}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        enableOnAndroid>
        <Formik
          initialValues={{
            code: '',
            password: '',
            confirmPassword: '',
          }}
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
                labelText="Code"
                name="code"
                blurOnSubmit={false}
                returnKeyType="next"
                autoCapitalize="none"
                keyboardType="number-pad"
                autoCorrect={false}
                value={values.code}
                onChangeText={handleChange('code')}
                onBlur={handleBlur('code')}
                error={touched.code && errors.code ? errors.code : null}
              />
              <TemplateTextInput
                hasLabel
                labelText="New Password"
                name="password"
                blurOnSubmit={false}
                returnKeyType="next"
                autoCapitalize="none"
                autoCorrect={false}
                value={values.password}
                secureTextEntry
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                error={
                  touched.password && errors.password ? errors.password : ''
                }
              />
              <TemplateTextInput
                hasLabel
                labelText="Confirm new password"
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
                touched={touched.code || null}
                errors={errors.code || null}
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
                touched={touched.confirmPassword || null}
                errors={errors.confirmPassword || null}
              />
              <Button mt={20} onPress={handleSubmit}>
                Submit
              </Button>
            </>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </Box>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
    paddingTop: 20,
  },
});
