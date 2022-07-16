import React from 'react';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from '../../../components/Button';
import TemplateTextInput from '../../../components/TemplateTextInput';
import {StyleSheet} from 'react-native';
import {validationSchema} from './validationSchema';
import Box from '../../../components/Box';
import {WRAPPER_MARGIN} from '../../../consts/LAYOUT';
import {NavigationProps} from '../../../utils/types';
import useHeader from '../../../hooks/useGoBack';
import FormikErrors from '../../../components/FormikError';

const ForgotPassword: React.FC<NavigationProps> = ({navigation}) => {
  useHeader('Forgot Password', false);
  return (
    <Box flex ph={WRAPPER_MARGIN}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        enableOnAndroid>
        <Formik
          initialValues={{emailOrPhone: ''}}
          validationSchema={validationSchema}
          onSubmit={() => navigation.navigate('ResetPassword')}>
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
                returnKeyType="done"
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
              <FormikErrors
                touched={touched.emailOrPhone || null}
                errors={errors.emailOrPhone || null}
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

export default ForgotPassword;

const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
    paddingTop: 20,
  },
});
