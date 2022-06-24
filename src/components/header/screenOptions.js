import React from 'react';
import {Dimensions} from 'react-native';
import {BACKGROUND, PRIMARY, WHITE, HEADER} from '../../consts/COLOURS';
import {IS_LARGE_SCREEN, IS_ANDROID} from '../../consts/LAYOUT';
import TemplateText from '../TemplateText';

const headerStyleApp = {
  backgroundColor: BACKGROUND,
  shadowColor: 'transparent',
  height: IS_LARGE_SCREEN && !IS_ANDROID ? 105 : 70,
};
const headerStyleAuth = {
  backgroundColor: HEADER,
  shadowColor: 'transparent',
  height: IS_LARGE_SCREEN && !IS_ANDROID ? 105 : 70,
};
const headerTitleStyle = {
  textAlign: 'center',
};
export const STANDARD_HEADER_AUTH = {
  headerBackTitleVisible: false,
  headerTintColor: WHITE,
  headerStyle: headerStyleAuth,
  headerTitle: () => <Title title="brans" />,
  headerTitleAlign: 'center',
  headerTitleStyle: headerTitleStyle,
  cardStyle: {backgroundColor: 'red'},
};

export const STANDARD_HEADER_APP = {
  headerBackTitleVisible: false,
  headerTintColor: WHITE,
  headerTitle: () => <Title title="brans" />,
  headerStyle: headerStyleApp,
  headerTitleAlign: 'center',
  headerTitleStyle: headerTitleStyle,
  cardStyle: {backgroundColor: BACKGROUND},
};

export const Title = ({title}) => (
  <TemplateText color={WHITE} bold size={18}>
    {title}
  </TemplateText>
);

export default {
  STANDARD_HEADER_AUTH,
  STANDARD_HEADER_APP,
};
