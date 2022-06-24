import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import TemplateText from '../TemplateText';
import TemplateTouchable from '../TemplateTouchable';
import {
  WHITE_OPACITY80,
  BACKGROUND_DARK,
  DAVY_GREY,
} from '../../consts/COLOURS';
import {WRAPPER_MARGIN} from '../../consts/LAYOUT';
import Box from '../Box';
import CardBase from './CardBase';
interface Props {
  onPress?: () => void | undefined;
}
const RecentBookings: FC<Props> = ({onPress}) => {
  const navigation = useNavigation();
  return (
    <CardBase onPress={() => navigation.navigate('BookingDetails')}>
      <TemplateTouchable style={styles.imageContainer}>
        <TemplateText bold>LA</TemplateText>
      </TemplateTouchable>
      <Box pAll={WRAPPER_MARGIN / 2} spaceBetween>
        <TemplateText bold>Laundry A</TemplateText>
        <TemplateText color={WHITE_OPACITY80}>Booked: 17-07-2022</TemplateText>
        <TemplateText color={WHITE_OPACITY80}>Due: 22-07-2022</TemplateText>
        <TemplateText color={WHITE_OPACITY80}>Pending</TemplateText>
      </Box>
    </CardBase>
  );
};

export default RecentBookings;

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
