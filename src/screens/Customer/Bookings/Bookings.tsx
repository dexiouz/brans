import React, {FC} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import TemplateText from '../../../components/TemplateText';
import Box from '../../../components/Box';
import {NavigationProps} from '../../../utils/types';
import BookingCard from '../../../components/Cards/BookingCard';
import {WRAPPER_MARGIN} from '../../../consts/LAYOUT';
import TemplateTab from '../../../components/TemplateTab';
import Recent from './Recent';
import All from './All';
import {Title} from '../../../components/header/screenOptions';
import useHeader from '../../../hooks/useHeader';
const Bookings: FC<NavigationProps> = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Title title="Bookings" />,
    });
  }, [navigation]);
  const screens = [
    {
      component: Recent,
      label: 'Recent',
    },
    {
      component: All,
      label: 'All',
    },
  ];
  console.log();
  return <TemplateTab screens={screens} />;
};

export default Bookings;

const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
  },
});
