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
import useHeader from '../../../hooks/useGoBack';
import FormikErrors from '../../../components/FormikError';

export const validationSchema = Yup.object({
  oldPassword: Yup.string()
    .min(6, '- Password must be minimum of 6 characters')
    .required('- Password must be minimum of 6 characters'),
  newPassword: Yup.string()
    .min(6, '- Password must be minimum of 6 characters')
    .required('- Password must be minimum of 6 characters'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('oldPassword'), null], '- Passwords must match')
    .required('- Passwords must match'),
});

const ChangePassword: React.FC<NavigationProps> = ({navigation}) => {
  useHeader('Change Password', false);
  return (
    <Box flex ph={WRAPPER_MARGIN}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        enableOnAndroid>
        <Formik
          initialValues={{
            emailOrPhone: '',
            oldPassword: '',
            newPassword: '',
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
                labelText="Old Password"
                name="oldPassword"
                blurOnSubmit={false}
                returnKeyType="next"
                autoCapitalize="none"
                autoCorrect={false}
                value={values.oldPassword}
                secureTextEntry
                onChangeText={handleChange('oldPassword')}
                onBlur={handleBlur('oldPassword')}
                error={
                  touched.oldPassword && errors.oldPassword
                    ? errors.oldPassword
                    : ''
                }
              />
              <TemplateTextInput
                hasLabel
                labelText="New Password"
                name="newPassword"
                blurOnSubmit={false}
                returnKeyType="next"
                autoCapitalize="none"
                autoCorrect={false}
                value={values.newPassword}
                secureTextEntry
                onChangeText={handleChange('newPassword')}
                onBlur={handleBlur('newPassword')}
                error={
                  touched.newPassword && errors.newPassword
                    ? errors.newPassword
                    : ''
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
                touched={touched.oldPassword || null}
                errors={errors.oldPassword || null}
              />
              <FormikErrors
                touched={touched.newPassword || null}
                errors={errors.newPassword || null}
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

export default ChangePassword;

const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
    paddingTop: 20,
  },
});
