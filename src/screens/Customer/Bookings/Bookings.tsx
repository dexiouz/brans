import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import TemplateText from '../../../components/TemplateText';
import {NavigationProps} from '../../../utils/types';

const Bookings: FC<NavigationProps> = ({navigation}) => {
  console.log();
  return <TemplateText>Boookings</TemplateText>;
};

export default Bookings;

const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
    paddingTop: 20,
  },
});
