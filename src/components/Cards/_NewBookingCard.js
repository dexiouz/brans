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
const NewBookingCard = ({item, index}) => {
  const {arr, bookItems, setBookItems} = useContext(BookItemsContext);
  const {category, washing, ironing, washingIroning} = item;

  const keys = Object.keys(item);

  //   console.log(ironing, keys, JSON.stringify(item, null, 2));
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  //   Washing
  //   const [washingAmount, setWashingAmount] = useState(washing);
  const [washingQuantity, setWashingQuantity] = useState(0);
  const handleAddWashingQuantity = () => {
    setWashingQuantity(prev => prev + 1);
  };
  const handleMinusWashingQuantity = () => {
    if (washingQuantity <= 0) {
      return;
    }
    setWashingQuantity(prev => prev - 1);
  };

  // Ironing
  const [ironingQuantity, setIroningQuantity] = useState(0);
  const handleAddIroningQuantity = () => {
    setIroningQuantity(prev => prev + 1);
  };
  const handleMinusIroningQuantity = () => {
    if (ironingQuantity <= 0) {
      return;
    }
    setIroningQuantity(prev => prev - 1);
  };

  //   W/Ironing
  const [washIronQuantity, setWashIronQuantity] = useState(0);
  const handleAddWashIronQuantity = () => {
    setWashIronQuantity(prev => prev + 1);
  };
  const handleMinusWashIronQuantity = () => {
    if (washIronQuantity <= 0) {
      return;
    }
    setWashIronQuantity(prev => prev - 1);
  };

  const latestWashing = {
    toggleCheckBox,
    category: category,
    type: keys[2],
    quantity: washingQuantity,
    amount: washing * washingQuantity,
  };
  const latestWashingIroning = {
    toggleCheckBox,
    category: category,
    type: keys[3],
    quantity: washIronQuantity,
    amount: washingIroning * washIronQuantity,
  };
  const latestIron = {
    toggleCheckBox,
    category: category,
    type: keys[1],
    quantity: ironingQuantity,
    amount: ironing * ironingQuantity,
  };
  const handlePush = () => {
    const f = bookItems.filter(item => item !== null);
    const filterOut = f.filter(item => item.category !== category);
    if (!filterOut.length) {
      setBookItems([
        ...filterOut,
        latestWashing.quantity ? latestWashing : null,
        latestWashingIroning.quantity ? latestWashingIroning : null,
        latestIron.quantity ? latestIron : null,
      ]);
    } else {
      setBookItems(prev => [
        ...prev,
        latestWashing.quantity ? latestWashing : null,
        latestWashingIroning.quantity ? latestWashingIroning : null,
        latestIron.quantity ? latestIron : null,
      ]);
    }
  };

  console.log('bookItems', JSON.stringify(bookItems, null, 2));

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
      {/* <Box top={6}>
        <TemplateText ml={10} size={15} bold white>
          {category}
        </TemplateText>
      </Box> */}
      {/* <Button onPress={handlePush}>Submit</Button> */}
      <Box row vCenter width={SCREEN_WIDTH * 0.8}>
        <TemplateText color={PRIMARY}>{index + 1}</TemplateText>
        {/* <CheckBox
          style={styles.checkBox}
          tintColors={{
            true: PRIMARY,
          }}
          onCheckColor={PRIMARY}
          onTintColor={PRIMARY}
          boxType="square"
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        /> */}

        <TemplateText ml={10} size={18} bold white>
          {category}
        </TemplateText>
      </Box>
      {/* {toggleCheckBox && ( */}
      <>
        <TableHeader header={header} />
        <ListCard
          type={keys[2]}
          handleMinus={handleMinusWashingQuantity}
          quantity={washingQuantity}
          handleAdd={handleAddWashingQuantity}
          amount={washing}
        />
        <ListCard
          type={keys[1]}
          handleMinus={handleMinusIroningQuantity}
          quantity={ironingQuantity}
          handleAdd={handleAddIroningQuantity}
          amount={ironing}
        />
        <ListCard
          type={keys[3]}
          handleMinus={handleMinusWashIronQuantity}
          quantity={washIronQuantity}
          handleAdd={handleAddWashIronQuantity}
          amount={washingIroning}
        />
      </>
      {/* )} */}
      {/* {toggleCheckBox && ( */}
      <TouchableOpacity
        style={{
          alignSelf: 'flex-end',
          backgroundColor: PRIMARY,
          width: 90,
          top: 10,
          padding: 5,
          alignItems: 'center',
          borderRadius: 10,
        }}
        onPress={handlePush}
        // selfCenter
      >
        <TemplateText>Add</TemplateText>
        {/* <SmallButton borderRadius={10} width={90} onPress={handlePush}>
          Add
        </SmallButton> */}
      </TouchableOpacity>
      {/* )} */}
    </Box>
  );
};

export default NewBookingCard;

const styles = StyleSheet.create({
  checkBox: {
    width: 20,
    height: 20,
  },
});
