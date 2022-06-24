import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Box from '../Box';
import {SPACE_XSMALL} from '../../consts/LAYOUT';
import {ACCENT, WHITE} from '../../consts/COLOURS';
import {hp} from '../../utils/getResponsiveSize';
import TemplateText from '../TemplateText';

interface Props {
  error: string;
  block?: boolean; // take up all space of the parent container
}

const ErrorComponent: React.FC<Props> = ({error, block}) => (
  <Box row mt={hp(SPACE_XSMALL)}>
    <Box mt={hp(1)}>
      <MaterialIcon name="error-outline" color={ACCENT} size={hp(15)} />
    </Box>
    <Box flex={block}>
      <TemplateText size={hp(12)} ml={hp(5)} color={`${WHITE}B3`}>
        {error}
      </TemplateText>
    </Box>
  </Box>
);

ErrorComponent.defaultProps = {
  block: false,
};

export default ErrorComponent;
