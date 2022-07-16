/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';
import {SCREEN_WIDTH} from './src/components/header/screenOptions';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {BACKGROUND, DAVY_GREY} from './src/consts/COLOURS';
import Button from './src/components/Button';
import TemplateTextInput from './src/components/TemplateTextInput';
import TemplateText from './src/components/TemplateText';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Checkbox from './src/components/CheckBox';
import Picker from './src/components/TemplatePicker';

export const schoolYearList = [
  {label: 'Freshman', value: 'Freshman'},
  {label: 'Sophomore', value: 'Sophomore'},
  {label: 'Junior', value: 'Junior'},
  {label: 'Senior', value: 'Senior'},
];
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [searchValue, setSearchValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [schoolYear, setSchoolYear] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Checkbox />
      <View style={styles.container}>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.contentContainerStyle}
          showsVerticalScrollIndicator={false}
          enableOnAndroid>
          <Formik
            initialValues={{name: '', email: '', school: ''}}
            validationSchema={Yup.object({
              name: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Please add your name'),
              school: Yup.string().required('Required'),
              email: Yup.string()
                .email('Invalid email address')
                .required('Enter your email'),
            })}
            onSubmit={values => console.log({values})}>
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
                  currentValue={'Hello'}
                  topLabel="School year"
                  PickerItem={schoolYearList}
                  placeholder="Select year"
                  value={values.school}
                  onValueChange={handleChange('school')}
                  error={touched.school && errors.school ? errors.school : null}
                />
                <TemplateTextInput
                  hasLabel
                  name="name"
                  labelText="First Name"
                  autoCapitalize="words"
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  error={touched.name && errors.name ? errors.name : null}
                />

                <TemplateTextInput
                  hasLabel
                  labelText="Email"
                  name="email"
                  blurOnSubmit={false}
                  returnKeyType="next"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  autoCorrect={false}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  error={touched.email && errors.email ? errors.email : null}
                />
                <Button primary style={{marginTop: 20}} onPress={handleSubmit}>
                  Submit
                </Button>
              </>
            )}
          </Formik>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
    // paddingHorizontal: 20,
  },
  textInputContainer: {
    alignSelf: 'center',
    width: SCREEN_WIDTH * 0.9,
    marginBottom: 10,
    color: 'white',
  },
  textInput: {
    height: 40,
    width: '100%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
});

export default App;
