/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import TemplateTab from '../../components/TemplateTab';
import Box from '../../components/Box';
import SignIn from './SignIn';
import SignUp from './SignUp';

const screens = [
  {
    component: SignIn,
    label: 'Signin',
  },
  {
    component: SignUp,
    label: 'Signup',
  },
];
const App = () => {
  return (
    <Box flex pt={20}>
      <TemplateTab screens={screens} />
    </Box>
  );
};

export default App;
