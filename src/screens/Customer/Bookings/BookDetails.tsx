import React, {useState} from 'react';
import {StyleSheet, StatusBar, ScrollView} from 'react-native';
import {SPACE_SMALL, WRAPPER_MARGIN} from '../../../consts/LAYOUT';
import Box from '../../../components/Box';
import {NavigationProps} from '../../../utils/types';
import TemplateText from '../../../components/TemplateText';
import RatingStars from '../../../components/RatingStars/';
import {Title} from '../../../components/header/screenOptions';
import BookingDetailsCard from '../../../components/Cards/OrderDetails';
import Button from '../../../components/Button';
import TableHeader from '../../../components/TableHeader';
import ServiceImage from '../../../components/ServiceImage/ServiceImage';
import {BACKGROUND, WHITE_OPACITY80} from '../../../consts/COLOURS';
import SmallButton from '../../../components/Button/SmallButton';

const header = [
  {
    title: 'Category',
    width: '40%',
    style: {},
  },

  {
    title: 'Type',
    width: '20%',
    style: {
      right: 5,
    },
  },
  {
    title: 'Quantity',
    width: '20%',
    style: {
      right: 20,
    },
  },
  {
    title: 'Amount',
    width: '20%',
    style: {},
  },
];
const BookingDetails: React.FC<NavigationProps> = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Title title="Laundry A" />,
    });
  }, [navigation]);

  const [star, setStar] = useState(5);
  return (
    <Box flex>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={BACKGROUND}
      />

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        <ServiceImage hide />
        <Box flex pAll={WRAPPER_MARGIN} mt={7}>
          <Box absolute top={-15} right={20}>
            <TemplateText color={WHITE_OPACITY80} mt={5}>
              Pending
            </TemplateText>
          </Box>
          <Box absolute top={-15} left={15}>
            <TemplateText color={WHITE_OPACITY80}>Due: 17/06/2022</TemplateText>
            <TemplateText color={WHITE_OPACITY80} mt={4}>
              Booked: 17/06/2022
            </TemplateText>
          </Box>

          <Box center mt={13}>
            <TemplateText color={WHITE_OPACITY80}>
              No. 52 chi street jikwoyi , Abuja, Nigeria.
            </TemplateText>
            <Box row center spaceBetween width="100%" mt={10}>
              <Box row>
                <RatingStars
                  totalStars={5}
                  currentStars={4}
                  setStar={setStar}
                  size={15}
                />
                <TemplateText color={WHITE_OPACITY80} size={16} bold mr={10}>
                  4.5
                </TemplateText>
              </Box>
              <SmallButton onPress={() => navigation.navigate('RateService')}>
                Rate this service
              </SmallButton>
            </Box>
          </Box>

          <Box mt={SPACE_SMALL}>
            <Title title="Orders" />
            <TableHeader header={header} />
            <BookingDetailsCard />
            <BookingDetailsCard />
            <BookingDetailsCard />
            <BookingDetailsCard />
            <BookingDetailsCard />
            <BookingDetailsCard />
            <BookingDetailsCard />
            <BookingDetailsCard />
            <BookingDetailsCard />
          </Box>
        </Box>
      </ScrollView>
      <Button width="70%" center bottom={25} absolute round mt={WRAPPER_MARGIN}>
        Cancel
      </Button>
    </Box>
  );
};

export default BookingDetails;

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: WRAPPER_MARGIN * 3,
  },
  textStyle: {
    fontSize: 14,
  },
  btn: {
    height: 30,
  },
});
