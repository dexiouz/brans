import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import TemplateText from '../TemplateText';
import {BACKGROUND_DARK} from '../../consts/COLOURS';
import {WRAPPER_MARGIN} from '../../consts/LAYOUT';
import RatingStars from '../../components/RatingStars/';
import Box from '../Box';
import CardBase from './CardBase';
interface Props {
  onPress?: () => void | undefined;
}
const ServiceProviderCard: FC<Props> = ({onPress}) => {
  const navigation = useNavigation();
  return (
    <CardBase onPress={() => navigation.navigate('PlaceOrder')}>
      <Box style={styles.imageContainer}>
        <TemplateText white bold>
          LA
        </TemplateText>
      </Box>
      <Box pAll={WRAPPER_MARGIN / 2} spaceBetween>
        <TemplateText white bold>
          Laundry A
        </TemplateText>
        <Box width="86%">
          <TemplateText>No52 chi street phase 2 jikwoyi. Abuja</TemplateText>
        </Box>
        <Box row>
          <RatingStars
            totalStars={5}
            currentStars={4}
            setStar={() => {}}
            size={15}
          />
          <TemplateText>(52)</TemplateText>
        </Box>
      </Box>
    </CardBase>
  );
};

export default ServiceProviderCard;

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
