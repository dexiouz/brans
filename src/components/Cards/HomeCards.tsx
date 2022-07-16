import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TemplateText from '../TemplateText';
import {NavigationProps} from '../../utils/types';
import {
  DAVY_GREY,
  WHITE,
  CARD_BACKGROUND,
  WHITE_OPACITY80,
  WHITE_OPACITY60,
} from '../../consts/COLOURS';
import {
  WRAPPER_MARGIN,
  RADIUS_SMALL,
  SPACE_SMALL,
  SCREEN_WIDTH,
} from '../../consts/LAYOUT';
import Box from '../Box';
import {Title} from '../header/screenOptions';

const size = SCREEN_WIDTH * 0.31;
interface Props {
  number: string | number;
  title: string;
}
const HomeCards: FC<Props> = ({number, title}) => {
  return (
    <Box
      width={size + 40}
      height={100}
      center
      backgroundColor={CARD_BACKGROUND}
      borderRadius={RADIUS_SMALL}>
      <Title title={number} containerStyle={{marginBottom: SPACE_SMALL}} />
      <TemplateText color={WHITE_OPACITY60} size={16}>
        {title}
      </TemplateText>
    </Box>
  );
};

export default HomeCards;

const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
    paddingTop: 20,
  },
});
