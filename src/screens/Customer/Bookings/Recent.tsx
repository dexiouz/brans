import React, {FC} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Box from '../../../components/Box';
import {NavigationProps} from '../../../utils/types';
import BookingCard from '../../../components/Cards/BookingCard';
const Recent: FC<NavigationProps> = () => {
  console.log();
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Box flex>
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

export default Recent;

const styles = StyleSheet.create({
  container: {flex: 1},
});
