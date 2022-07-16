import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import TemplateText from '../TemplateText';
import {BACKGROUND_DARK} from '../../consts/COLOURS';
import {WRAPPER_MARGIN} from '../../consts/LAYOUT';
import Box from '../Box';
import CardBase from './CardBase';
interface Props {
  onPress?: () => void | undefined;
}
const BookingCard: FC<Props> = () => {
  const navigation = useNavigation();
  return (
    <CardBase onPress={() => navigation.navigate('BookingDetails')}>
      <Box style={styles.imageContainer}>
        <TemplateText white bold>
          LA
        </TemplateText>
      </Box>
      <Box pAll={WRAPPER_MARGIN / 2} spaceBetween>
        <TemplateText white bold>
          Laundry A
        </TemplateText>
        <TemplateText>Booked: 17-07-2022</TemplateText>
        <TemplateText>Due: 22-07-2022</TemplateText>
        <TemplateText>Pending</TemplateText>
      </Box>
    </CardBase>
  );
};

export default BookingCard;

const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
    paddingTop: 20,
  },
  imageContainer: {
    backgroundColor: BACKGROUND_DARK,
    height: '100%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
