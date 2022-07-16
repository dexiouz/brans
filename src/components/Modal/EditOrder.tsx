/* eslint-disable max-len */
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  RADIUS_SMALL,
  WRAPPER_MARGIN,
} from '../../consts/LAYOUT';
import Box from '../Box';
import ModalBase from './Modalbase';
import NewBookingCard from '../Cards/NewBookingCard';

interface Props {
  visible: boolean;
  onClose: () => boolean | {} | null;
}

const item = [
  {
    category: 'Trousers',
    ironing: 100,
    washing: 200,
    washingIroning: 300,
  },
];

const EditOrder: React.FC<Props> = ({visible, onClose}) => {
  const onPress = () => {
    onClose();
  };
  return (
    <ModalBase closeOnPress={onClose} visible={visible}>
      <Box style={styles.modalContainer}>
        <NewBookingCard
          item={item}
          index={0}
          onPress={onPress}
          customQuantity={3}
          buttonTitle="Done"
        />
      </Box>
    </ModalBase>
  );
};

export default EditOrder;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 2,
    alignItems: 'center',
  },
  modalContainer: {
    padding: WRAPPER_MARGIN,
    width: SCREEN_WIDTH * 0.9,
    height: (SCREEN_HEIGHT / 2) * 0.7,
    marginTop: 55,
    marginBottom: 55,
    alignSelf: 'center',
    borderRadius: RADIUS_SMALL,
  },
});
