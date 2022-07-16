import React from 'react';
import { StyleSheet } from 'react-native';
import Box from '../Box';
import TemplateText from '../TemplateText';
import { SPACE_MEDIUM } from '../../consts/LAYOUT';
import TemplatePicker from '../TemplatePicker';
import { BACKGROUND } from '../../consts/COLOURS';
import TemplateTextInput from '../TemplateTextInput';

const ListCard = ({
  amount,
  type,
  setType,
  serviceType,
  quantity,
  setQuantity,
}) => {
  return (
    <Box
      row
      mt={5}
      pl={10}
      pv={SPACE_MEDIUM - 5}
      borderRadius={8}
      backgroundColor={BACKGROUND}>
      <Box width="33%" hCenter>
        <TemplatePicker
          items={serviceType}
          placeholder="Select..."
          value={type}
          onValueChange={value => setType(value)}
        />
      </Box>

      <Box width="30%" hCenter left={16}>
        <TemplateTextInput
          name="name"
          autoCapitalize="words"
          placeholder={quantity.toString() || 0}
          value={quantity}
          inputStyle={{ height: 41 }}
          keyboardType="number-pad"
          onChangeText={value => setQuantity(value)}
        />
      </Box>
      <Box width="36%" center>
        <TemplateText size={16}>{amount * quantity}</TemplateText>
      </Box>
    </Box>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  checkBox: {
    width: 20,
    height: 20,
  },
});

{
  /* <Box absolute right={-15} top={10}>
        <SmallButton width={60}>Add</SmallButton>
      </Box> */
}
