import {ScrollView, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import Box from '../../../components/Box';
import TemplateText from '../../../components/TemplateText';
import ServiceImage from '../../../components/ServiceImage/ServiceImage';
import {Title} from '../../../components/header/screenOptions';
import {SPACE_LARGE, SPACE_SMALL, WRAPPER_MARGIN} from '../../../consts/LAYOUT';
import {WHITE} from '../../../consts/COLOURS';
import {WHITE_OPACITY80} from '../../../consts/COLOURS';
import NewBookingCard from '../../../components/Cards/NewBookingCard';
import Button from '../../../components/Button';
import {BookItemsContext} from '../../../context/context';
import TemplateIcon from '../../../components/TemplateIcon';

const createOrder = [
  {
    category: 'Trousers',
    ironing: 100,
    washing: 200,
    washingIroning: 300,
  },
  {
    category: 'Shirts',
    ironing: 400,
    washing: 500,
    washingIroning: 600,
  },
  {
    category: 'duvee',
    ironing: 700,
    washing: 800,
    washingIroning: 900,
  },
  {
    category: 'duvee1',
    ironing: 700,
    washing: 800,
    washingIroning: 900,
  },
  {
    category: 'duvee2',
    ironing: 700,
    washing: 800,
    washingIroning: 900,
  },
];
const PlaceOrder = ({navigation}) => {
  const {arr, bookItems} = useContext(BookItemsContext);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Title title="Laundry A" />,
      headerRight: () => (
        <Box right={9} top={4} onPress={() => navigation.navigate('Cart')}>
          <TemplateIcon
            iconFamily="Feather"
            name="shopping-cart"
            size={26}
            color={WHITE}
            style={{right: 11}}
          />
          <Box
            top={-14}
            left={12}
            absolute
            width={23}
            height={23}
            center
            backgroundColor="red"
            borderRadius={15}>
            <TemplateText white size={11}>
              {bookItems.length}
            </TemplateText>
          </Box>
        </Box>
      ),
    });
  }, [navigation, bookItems]);

  console.log('BOOK', JSON.stringify(bookItems, null, 2));
  const handleSubmit = () => {
    console.log('arruuuuu', JSON.stringify(arr, null, 2));
    console.log(arr);
  };
  return (
    <Box flex>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={styles.contentContainerStyle}>
        <ServiceImage hide />
        <Box />
        <TemplateText color={WHITE_OPACITY80} center mt={SPACE_LARGE}>
          No. 52 chi street jikwoyi , Abuja, Nigeria.
        </TemplateText>
        <Box pAll={SPACE_SMALL}>
          <Title title="Catalogue" />
          <Box flex>
            {createOrder.map((item, index) => (
              <NewBookingCard item={item} index={index} />
            ))}
          </Box>
        </Box>
      </ScrollView>
      <Button
        onPress={() => navigation.navigate('Cart')}
        width="70%"
        center
        bottom={25}
        absolute
        round={6}
        mt={WRAPPER_MARGIN}>
        Proceed to Cart
      </Button>
    </Box>
  );
};

export default PlaceOrder;

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: WRAPPER_MARGIN * 3,
  },
  checkBox: {
    width: 20,
    height: 20,
  },
});
