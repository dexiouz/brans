import React, {FC} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Box from '../../../components/Box';
import {NavigationProps} from '../../../utils/types';
import BookingCard from '../../../components/Cards/BookingCard';
import TemplateSearch from '../../../components/TemplateTextInput/TemplateSearch';

const All: FC<NavigationProps> = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Box flex>
        <TemplateSearch />
        <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard />
      </Box>
    </ScrollView>
  );
};

export default All;

const styles = StyleSheet.create({
  container: {flex: 1},
});
