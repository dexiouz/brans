import React from 'react';
import {StyleSheet, Platform} from 'react-native';
import {Formik} from 'formik';
import {ScrollView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from '../../../components/Button';
import TemplateTextInput from '../../../components/TemplateTextInput';
import {validationSchema} from './validationSchema';
import {WRAPPER_MARGIN, SCREEN_HEIGHT} from '../../../consts/LAYOUT';
import Box from '../../../components/Box';
import {
  LIGHT_GREY,
  DAVY_GREY,
  BACKGROUND,
  WHITE_OPACITY15,
  CARD_BACKGROUND,
  WHITE,
} from '../../../consts/COLOURS';
import {NavigationProps} from '../../../utils/types';
import useHeader from '../../../hooks/useHeader';
import {initialValues} from './initialValues';
import FormikErrors from '../../../components/FormikError';
import ServiceImage from '../../../components/ServiceImage/ServiceImage';
import {Title} from '../../../components/header/screenOptions';
const size = 80;
const CreateService: React.FC<NavigationProps> = ({navigation}) => {
  // useHeader('Create your service');
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Title title="Create your service" />,
    });
  }, [navigation]);
  return (
    <ScrollView
      style={{flex: 1}}
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        enableOnAndroid>
        <>
          <ServiceImage />
          {/* <Box
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
          </Box> */}
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
                    multiline
                    value={values.aboutBrand}
                    inputStyle={styles.textArea}
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
  textArea: {
    ...Platform.select({
      android: {
        height: SCREEN_HEIGHT * 0.12,
      },
      ios: {
        height: SCREEN_HEIGHT * 0.14,
      },
    }),
    paddingHorizontal: 20,
    paddingTop: 20,
    fontSize: 16,
    backgroundColor: WHITE_OPACITY15,
    borderRadius: 5,
    // margin: 20,
    textAlignVertical: 'top',
    color: WHITE,
  },
});
