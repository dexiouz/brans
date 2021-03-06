import React, {Children, FC} from 'react';
import {StyleSheet} from 'react-native';
import TemplateText from '../TemplateText';
import {NavigationProps} from '../../utils/types';
import TemplateTouchable from '../TemplateTouchable';
import {
  DAVY_GREY,
  WHITE,
  CARD_BACKGROUND,
  BACKGROUND_DARK,
} from '../../consts/COLOURS';
import {WRAPPER_MARGIN, RADIUS_SMALL, SPACE_SMALL} from '../../consts/LAYOUT';
import Box from '../Box';

interface Props {
  children?: React.ReactNode;
  onPress?: () => void | undefined;
}
const CardBase: FC<Props> = ({onPress, children, height, ...restProps}) => {
  return (
    <Box
      onPress={onPress}
      backgroundColor={CARD_BACKGROUND}
      height={height || 110}
      minHeight={40}
      borderRadius={RADIUS_SMALL}
      row
      mt={WRAPPER_MARGIN / 2}
      overflow="hidden"
      {...restProps}>
      {children}
    </Box>
  );
};

export default CardBase;
