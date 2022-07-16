import React, {FC} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Box from '../../../components/Box';
import {NavigationProps} from '../../../utils/types';
import ServiceProviderCard from '../../../components/Cards/ServiceProviderCard';
const Favourites: FC<NavigationProps> = () => {
  console.log();
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Box flex>
        <ServiceProviderCard />
        <ServiceProviderCard />
        <ServiceProviderCard />
        <ServiceProviderCard />
        <ServiceProviderCard />
        <ServiceProviderCard />
        <ServiceProviderCard />
      </Box>
    </ScrollView>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  container: {flex: 1},
});
