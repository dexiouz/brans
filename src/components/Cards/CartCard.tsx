import {StyleSheet, Alert} from 'react-native';
import React, {useState} from 'react';
import Box from '../../components/Box';
import TemplateText from '../../components/TemplateText';
import BookingDetailsCard from '../../components/Cards/OrderDetails';
import {RADIUS_SMALL, WRAPPER_MARGIN} from '../../consts/LAYOUT';
import {BACKGROUND_DARK} from '../../consts/COLOURS';
import EditOrder from '../Modal/EditOrder';

const CartCard = () => {
  const [visible, setVisible] = useState(false);

  const onClose = () => setVisible(false);

  const createTwoButtonAlert = () =>
    Alert.alert('Delete?', 'Are you sure you want to delete this order?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  return (
    <Box borderRadius={RADIUS_SMALL} mt={WRAPPER_MARGIN / 1.4}>
      <BookingDetailsCard style={styles.bookingCard} />
      <Box
        row
        alignSelf="flex-end"
        width={'40%'}
        pb={5}
        pr={15}
        pl={15}
        spaceBetween
        style={{borderBottomRightRadius: 10, borderBottomLeftRadius: 10}}
        backgroundColor={BACKGROUND_DARK}>
        <TemplateText size={13} onPress={createTwoButtonAlert}>
          Remove
        </TemplateText>
        <TemplateText size={13} onPress={() => setVisible(true)}>
          Edit
        </TemplateText>
      </Box>
      <EditOrder visible={visible} onClose={onClose} />
    </Box>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  bookingCard: {
    marginTop: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
});
