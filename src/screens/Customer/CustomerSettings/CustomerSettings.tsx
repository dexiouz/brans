import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {StyleSheet, StatusBar} from 'react-native';
import {Formik} from 'formik';
import {WRAPPER_MARGIN} from '../../../consts/LAYOUT';
import Box from '../../../components/Box';
import {NavigationProps} from '../../../utils/types';
import {Title} from '../../../components/header/screenOptions';
import ServiceImage from '../../../components/ServiceImage/ServiceImage';
import {BACKGROUND} from '../../../consts/COLOURS';
import TemplateText from '../../../components/TemplateText';
import TemplateTextInput from '../../../components/TemplateTextInput';
import FormikErrors from '../../../components/FormikError';
import Button from '../../../components/Button';
import {validationSchema} from './validationSchema';

const CustomerSettings: React.FC<NavigationProps> = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Title title="Settings" />,
    });
  }, [navigation]);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={BACKGROUND}
      />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        enableOnAndroid>
        <Formik
          initialValues={{
            oldPassword: '',
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
            <Box>
              <ServiceImage />
              <Box center mt={WRAPPER_MARGIN + 10}>
                <Title title="Chibuike Vincent" />
                <TemplateText size={13}>
                  chibuike-vincent@gmail.com
                </TemplateText>
              </Box>
              <Box ph={WRAPPER_MARGIN} pt={WRAPPER_MARGIN}>
                <Title
                  containerStyle={{marginBottom: 10}}
                  title="Change Password"
                />
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
                  touched={touched.oldPassword || null}
                  errors={errors.oldPassword || null}
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
              </Box>
            </Box>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </>
  );
};

export default CustomerSettings;

const styles = StyleSheet.create({});
