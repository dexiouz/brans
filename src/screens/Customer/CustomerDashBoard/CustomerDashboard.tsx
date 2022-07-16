import React, {FC} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationProps} from '../../../utils/types';
import TemplateTouchable from '../../../components/TemplateTouchable';
import {DAVY_GREY, WHITE, PRIMARY} from '../../../consts/COLOURS';
import {WRAPPER_MARGIN} from '../../../consts/LAYOUT';
import Box from '../../../components/Box';
import HomeCards from '../../../components/Cards/HomeCards';
import {Title} from '../../../components/header/screenOptions';
import BookingCard from '../../../components/Cards/BookingCard';
import FloatingButton from '../../../components/Button/FloatingButton';

const CustomerDashboard: FC<NavigationProps> = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TemplateTouchable
          style={{marginRight: WRAPPER_MARGIN}}
          onPress={() => navigation.navigate('CustomerSettings')}>
          <Ionicons name="settings-outline" color={WHITE} size={24} />
        </TemplateTouchable>
      ),
    });
  }, [navigation]);

  return (
    <Box flex>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{padding: WRAPPER_MARGIN}}
        showsVerticalScrollIndicator={false}>
        <Box width="100%" row spaceBetween>
          <HomeCards number={234} title="Points" />
          <HomeCards number={37} title="Bookings" />
        </Box>
        <Box mt={WRAPPER_MARGIN}>
          <Title title="Recent Bookings" />
        </Box>
        <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard />
      </ScrollView>
      <FloatingButton
        bgColor={PRIMARY}
        iconColor={WHITE}
        onPressFunc={() => navigation.navigate('Book')}
        title="Book"
      />
    </Box>
  );
};

export default CustomerDashboard;

const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
    paddingTop: 20,
  },
  imageContainer: {
    backgroundColor: DAVY_GREY,
    height: '100%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
