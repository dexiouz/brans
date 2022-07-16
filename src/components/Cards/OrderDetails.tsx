import React, {useState} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {WRAPPER_MARGIN, RADIUS_SMALL} from '../../consts/LAYOUT';
import Box from '../Box';
import TemplateText from '../TemplateText';
import CardBase from './CardBase';
import {WHITE_OPACITY80, PRIMARY, CARD_BACKGROUND} from '../../consts/COLOURS';
// import {styles} from '../../consts/SHADOW';

interface Props {
  style: ViewStyle;
}
const BookingDetailsCard: React.FC<Props> = ({style}) => {
  return (
    <View style={[styles.card, style]}>
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
      <TemplateText
        size={10}
        color={PRIMARY}
        style={{position: 'absolute', left: 2, top: 20}}>
        {16}
      </TemplateText>
    </View>
  );
};

export default BookingDetailsCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: CARD_BACKGROUND,
    borderRadius: RADIUS_SMALL,
    marginTop: WRAPPER_MARGIN / 2,
    minHeight: 50,
    padding: 10,
  },
});
