import React from 'react';
import {Dimensions, TextStyle, ViewStyle} from 'react-native';
import {BACKGROUND, PRIMARY, WHITE, HEADER} from '../../consts/COLOURS';
import {IS_LARGE_SCREEN, IS_ANDROID} from '../../consts/LAYOUT';
import Box from '../Box';
import TemplateText from '../TemplateText';
import {BoxProps} from '../../components/Box';

interface Props extends BoxProps {
  title: string;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
}
const headerStyleApp = {
  elevation: 0, // remove shadow on Android
  shadowOpacity: 0, // remove shadow on iOS
  borderBottomWidth: 0, // Just in case.
  backgroundColor: HEADER,
  shadowColor: 'transparent',
  height: IS_LARGE_SCREEN && !IS_ANDROID ? 105 : 70,
};
const headerStyleAuth = {
  backgroundColor: HEADER,
  shadowColor: 'transparent',
  height: IS_LARGE_SCREEN && !IS_ANDROID ? 105 : 70,
};

export const STANDARD_HEADER_AUTH = {
  headerBackTitleVisible: false,
  headerTintColor: WHITE,
  headerStyle: headerStyleAuth,
  headerTitle: () => <Title title="brans" />,
  headerTitleAlign: 'center',
};

export const STANDARD_HEADER_APP = {
  headerBackTitleVisible: false,
  headerTintColor: WHITE,
  headerTitle: () => <Title title="brans" />,
  headerStyle: headerStyleApp,
  headerTitleAlign: 'center',
};

export const Title: React.FC<Props> = ({
  title,
  textStyle,
  containerStyle,
  ...restProps
}) => (
  <Box style={containerStyle} {...restProps}>
    <TemplateText color={WHITE} bold size={18} style={textStyle}>
      {title}
    </TemplateText>
  </Box>
);

export default {
  STANDARD_HEADER_AUTH,
  STANDARD_HEADER_APP,
};
