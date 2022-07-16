import React from 'react';
import {StyleSheet} from 'react-native';
import {Formik} from 'formik';
import {ScrollView} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from '../../../components/Button';
import TemplateTextInput from '../../../components/TemplateTextInput';
import ErrorText from '../../../components/ErrorText';
import {validationSchema} from './validationSchema';
import {WRAPPER_MARGIN} from '../../../consts/LAYOUT';
import Box from '../../../components/Box';
import {LIGHT_GREY, DAVY_GREY, BACKGROUND} from '../../../consts/COLOURS';
import {NavigationProps} from '../../../utils/types';
import useHeader from '../../../hooks/useGoBack';
import {initialValues} from './initialValues';
import FormikErrors from '../../../components/FormikError';

const size = 80;
const CreateService: React.FC<NavigationProps> = () => {
  useHeader('Create your service');
  return (
    <ScrollView
      style={{flex: 1}}
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        enableOnAndroid>
        <>
          <Box
            height={150}
            backgroundColor={LIGHT_GREY}
            mb={WRAPPER_MARGIN}
            row
            center>
            <EvilIcons name="image" size={130} color={DAVY_GREY} />
            <Box
              absolute
              width={size}
              height={size}
              borderWidth={1}
              borderColor={BACKGROUND}
              backgroundColor={LIGHT_GREY}
              bottom={-45}
              borderRadius={150}
            />
          </Box>
          <Box ph={WRAPPER_MARGIN} flex={6} mt={WRAPPER_MARGIN}>
            <Formik
              initialValues={initialValues}
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
                    labelText="Service Name"
                    name="serviceName"
                    blurOnSubmit={false}
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={values.serviceName}
                    onChangeText={handleChange('serviceName')}
                    onBlur={handleBlur('serviceName')}
                    error={
                      touched.serviceName && errors.serviceName
                        ? errors.serviceName
                        : null
                    }
                  />
                  <TemplateTextInput
                    hasLabel
                    labelText="Country"
                    name="country"
                    blurOnSubmit={false}
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={values.country}
                    onChangeText={handleChange('country')}
                    onBlur={handleBlur('country')}
                    error={
                      touched.country && errors.country ? errors.country : null
                    }
                  />

                  <TemplateTextInput
                    hasLabel
                    labelText="State"
                    name="state"
                    blurOnSubmit={false}
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={values.state}
                    onChangeText={handleChange('state')}
                    onBlur={handleBlur('state')}
                    error={touched.state && errors.state ? errors.state : null}
                  />
                  <TemplateTextInput
                    hasLabel
                    labelText="Nearest Junction or Landmark"
                    name="landMark"
                    blurOnSubmit={false}
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={values.landMark}
                    onChangeText={handleChange('landMark')}
                    onBlur={handleBlur('landMark')}
                    error={
                      touched.landMark && errors.landMark
                        ? errors.landMark
                        : null
                    }
                  />
                  <TemplateTextInput
                    hasLabel
                    labelText="Street"
                    name="street"
                    blurOnSubmit={false}
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={values.street}
                    onChangeText={handleChange('street')}
                    onBlur={handleBlur('street')}
                    error={
                      touched.street && errors.street ? errors.street : null
                    }
                  />

                  <TemplateTextInput
                    hasLabel
                    labelText="About your brand"
                    name="aboutBrand"
                    blurOnSubmit={false}
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={values.aboutBrand}
                    onChangeText={handleChange('aboutBrand')}
                    onBlur={handleBlur('aboutBrand')}
                    error={
                      touched.aboutBrand && errors.aboutBrand
                        ? errors.aboutBrand
                        : null
                    }
                  />
                  <FormikErrors
                    touched={touched.serviceName || null}
                    errors={errors.serviceName || null}
                  />
                  <FormikErrors
                    touched={touched.country || null}
                    errors={errors.country || null}
                  />

                  <FormikErrors
                    touched={touched.state || null}
                    errors={errors.state || null}
                  />
                  <FormikErrors
                    touched={touched.city || null}
                    errors={errors.city || null}
                  />

                  <FormikErrors
                    touched={touched.landMark || null}
                    errors={errors.landMark || null}
                  />

                  <FormikErrors
                    touched={touched.street || null}
                    errors={errors.street || null}
                  />
                  <FormikErrors
                    touched={touched.aboutBrand || null}
                    errors={errors.aboutBrand || null}
                  />

                  <Button mt={20} onPress={handleSubmit}>
                    Finish
                  </Button>
                </>
              )}
            </Formik>
          </Box>
        </>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};

export default CreateService;

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: WRAPPER_MARGIN,
  },
});
