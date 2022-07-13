import React, {FC, useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import TemplateText from '../../../components/TemplateText';
import Box from '../../../components/Box';
import {NavigationProps} from '../../../utils/types';
import BookingCard from '../../../components/Cards/BookingCard';
import {WRAPPER_MARGIN, SPACE_LARGE} from '../../../consts/LAYOUT';
import TemplateTab from '../../../components/TemplateTab';
import Favourites from './Favourites';
import All from './All';
import {Title} from '../../../components/header/screenOptions';
import SmallButton from '../../../components/Button/SmallButton';
import SetLocationModal from '../../../components/Modal/SetLocationModal';
import SetManualLocation from '../../../components/Modal/SetManualLocation';
const Book: FC<NavigationProps> = ({navigation}) => {
  const isFocused = useIsFocused();
  const [visible, setVisible] = useState(true);
  const [manualVisible, setManualVisible] = useState(false);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Title title="" />,
      headerRight: () => (
        <SmallButton
          bold
          onPress={() => {
            setVisible(true);
          }}>
          update location
        </SmallButton>
      ),
    });
  }, [navigation]);

  const screens = [
    {
      component: All,
      label: 'All',
    },
    {
      component: Favourites,
      label: 'Favourites',
    },
  ];
  console.log();
  const handleCloseModal = () => setVisible(false);
  const handleClosemanualModal = () => setManualVisible(false);
  return (
    <Box flex>
      <Box alignItems="flex-end" mr={SPACE_LARGE} />
      <TemplateTab screens={screens} />
      <SetLocationModal visible={visible} onClose={handleCloseModal} />
    </Box>
  );
};

export default Book;

const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
  },
});
