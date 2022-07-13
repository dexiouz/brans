import React, {FC} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Box from '../../../components/Box';
import {NavigationProps} from '../../../utils/types';
import BookingCard from '../../../components/Cards/BookingCard';
import TemplateSearch from '../../../components/TemplateTextInput/TemplateSearch';
import ServiceProviderCard from '../../../components/Cards/ServiceProviderCard';
import TemplateText from '../../../components/TemplateText';
import {Title} from '../../../components/header/screenOptions';
import {SPACE_LARGE, SPACE_MEDIUM, SPACE_SMALL} from '../../../consts/LAYOUT';
import SmallButton from '../../../components/Button/SmallButton';
const All: FC<NavigationProps> = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Box flex>
        <TemplateSearch />
        <Title mt={SPACE_LARGE} title="Results based on your location" />
        <ServiceProviderCard />
        <ServiceProviderCard />
        <ServiceProviderCard />
        <ServiceProviderCard />
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

export default All;

const styles = StyleSheet.create({
  container: {flex: 1},
});
