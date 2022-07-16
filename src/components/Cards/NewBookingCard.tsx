import {StyleSheet} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import CheckBox from '@react-native-community/checkbox';
import Box from '../Box';
import TemplateText from '../TemplateText';
import {SCREEN_WIDTH} from '../../consts/LAYOUT';
import {PRIMARY} from '../../consts/COLOURS';
import {CARD_BACKGROUND} from '../../consts/COLOURS';
import TableHeader from '../TableHeader';
import ListCard from './ListCard';
import Button from '../Button';
import SmallButton from '../Button/SmallButton';
import {BookItemsContext} from '../../context/context';
import {TouchableOpacity} from 'react-native';
import TemplatePicker from '../TemplatePicker';
export const serviceType = [
  {label: 'Wash', value: 'wash'},
  {label: 'Iron', value: 'iron'},
  {label: 'W/Iron', value: 'wIron'},
];

const header = [
  {
    title: 'Type',
    width: '33%',
    style: {
      //   backgroundColor: 'red',
    },
  },
  {
    title: 'Quantity',
    width: '33%',
    style: {
      //   backgroundColor: 'blue',
      alignItems: 'center',
    },
  },
  {
    title: 'Amount',
    width: '33%',
    style: {
      //   backgroundColor: 'green',
      alignItems: 'center',
    },
  },
];
// const arr = [];
const NewBookingCard = ({
  item,
  index,
  onPress,
  customQuantity,
  buttonTitle,
}) => {
  const [type, setType] = useState('');
  const [quantity, setQuantity] = useState(customQuantity || 0);
  const [amount, setAmount] = useState(200);

  const {arr, bookItems, setBookItems} = useContext(BookItemsContext);
  const {category, washing, ironing, washingIroning} = item;

  const keys = Object.keys(item);

  const handleAddToCart = () => {
    if (onPress) {
      return onPress();
    }
    console.log({category, type, quantity});
    const cartObj = {
      category,
      type,
      quantity,
      amount: quantity * amount,
    };
    if (!quantity || !type) {
      console.log('emptyyyy', JSON.stringify(arr, null, 2));
      return;
    }
    arr.push(cartObj);
    setBookItems(prev => [...prev, cartObj]);
    setQuantity(0);
    console.log('added', JSON.stringify(arr, null, 2));
  };

  const disabled = !quantity || !type;
  return (
    <Box
      minHeight={40}
      width="100%"
      backgroundColor={CARD_BACKGROUND}
      borderRadius={12}
      ph={12}
      pv={15}
      pb={20}
      mt={20}>
      <Box row vCenter width={SCREEN_WIDTH * 0.8}>
        <TemplateText color={PRIMARY}>{index + 1}</TemplateText>
        <TemplateText ml={10} size={18} bold white>
          {category}
        </TemplateText>
      </Box>
      <>
        <TableHeader header={header} />
        <ListCard
          type={type}
          setType={setType}
          amount={amount}
          serviceType={serviceType}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </>
      <TouchableOpacity
        disabled={disabled}
        style={[styles.smallBtn, disabled && {backgroundColor: 'grey'}]}
        onPress={handleAddToCart}>
        <TemplateText>{buttonTitle || 'Add to Basket'}</TemplateText>
      </TouchableOpacity>
    </Box>
  );
};

export default NewBookingCard;

const styles = StyleSheet.create({
  checkBox: {
    width: 20,
    height: 20,
  },
  smallBtn: {
    alignSelf: 'flex-end',
    backgroundColor: PRIMARY,
    minWidth: 100,
    top: 10,
    paddingVertical: 7,
    paddingHorizontal: 7,
    alignItems: 'center',
    borderRadius: 10,
  },
});
