import {StyleSheet} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Box from '../Box';
import {wp, hp} from '../../utils/getResponsiveSize';
import {CHECK_GREY, PRIMARY_GRADIENT, WHITE} from '../../consts/COLOURS';
import TemplateIcon from '../TemplateIcon';

import {SPACE_LARGE} from '../../consts/LAYOUT';
import TemplateText from '../TemplateText';
interface Props {
  //   checked: boolean;
  onChange: () => void;
  label?: string | null;
}
const checked = true;
const Checkbox: React.FC<Props> = ({onChange, label}) => (
  <Box row onPress={onChange} style={styles.container} pv={hp(8)}>
    <Box
      height={wp(SPACE_LARGE)}
      width={wp(SPACE_LARGE)}
      borderRadius={hp(4)}
      borderWidth={!checked ? 1 : 0}
      borderColor={CHECK_GREY}
      vGradient={checked}
      //   gradientColors={PRIMARY_GRADIENT}
      center>
      {!!checked && (
        <TemplateIcon
          iconFamily={AntDesign}
          name="check"
          size={16}
          color={'red'}
        />
      )}
    </Box>
    {!!label && (
      <TemplateText ml={wp(10)} size={hp(14)}>
        {label}
      </TemplateText>
    )}
  </Box>
);

Checkbox.defaultProps = {
  label: null,
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'baseline', // make container wraps content
  },
});

export default Checkbox;
