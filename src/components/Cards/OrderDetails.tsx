import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {WRAPPER_MARGIN} from '../../consts/LAYOUT';
import Box from '../Box';
import TemplateText from '../TemplateText';
import CardBase from './CardBase';
import {WHITE_OPACITY80} from '../../consts/COLOURS';

interface Props {}
const BookingDetailsCard: React.FC<Props> = () => {
  return (
    <CardBase height={80} ph={10}>
      <Box width="40%" hCenter>
        <TemplateText size={16} color={WHITE_OPACITY80}>
          Trousers(jeans, chinos, plain)
        </TemplateText>
      </Box>
      <Box width="20%" hCenter>
        <TemplateText size={16} color={WHITE_OPACITY80}>
          Iron
        </TemplateText>
      </Box>
      <Box width="20%" hCenter>
        <TemplateText size={16} color={WHITE_OPACITY80}>
          3
        </TemplateText>
      </Box>
      <Box width="20%" hCenter>
        <TemplateText size={16} color={WHITE_OPACITY80}>
          1000000
        </TemplateText>
      </Box>
    </CardBase>
  );
};

export default BookingDetailsCard;
