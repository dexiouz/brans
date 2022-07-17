import {ScrollView, StyleSheet} from 'react-native';
import React, {useLayoutEffect} from 'react';
import Box from '../../../components/Box';
import TemplateText from '../../../components/TemplateText';
import TableHeader from '../../../components/TableHeader';
import BookingDetailsCard from '../../../components/Cards/OrderDetails';
import {Title} from '../../../components/header/screenOptions';
import {
  RADIUS_SMALL,
  SPACE_SMALL,
  WRAPPER_MARGIN,
} from '../../../consts/LAYOUT';
import {BACKGROUND_DARK, CARD_BACKGROUND} from '../../../consts/COLOURS';
import CartCard from '../../../components/Cards/CartCard';

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

const Cart = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: <Title title="Cart" />,
    });
  }, []);
  return (
    <ScrollView contentContainerStyle={{flex: 1, padding: WRAPPER_MARGIN}}>
      <TableHeader header={header} />
      <CartCard />
      <CartCard />
      <CartCard />
      <CartCard />
    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({});
