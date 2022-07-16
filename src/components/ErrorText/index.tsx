import {StyleSheet} from 'react-native';
import React, {FC} from 'react';
import TemplateText from '../TemplateText';
import {ERROR_RED, WHITE_OPACITY80} from '../../consts/COLOURS';
import {SCREEN_WIDTH} from '../../consts/LAYOUT';

interface Props {
  errors: string;
}
const ErrorText: FC<Props> = ({errors}) => {
  return (
    <TemplateText
      mb={5}
      center
      color={ERROR_RED}
      style={styles.validationMessage}>
      {errors}
    </TemplateText>
  );
};

export default ErrorText;
const styles = StyleSheet.create({
  validationMessage: {
    color: WHITE_OPACITY80,
    textAlign: 'center',
    width: SCREEN_WIDTH * 0.9,
    alignSelf: 'center',
    fontSize: 14,
  },
});
