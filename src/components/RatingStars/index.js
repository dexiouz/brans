import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {PRIMARY, PRIMARY_DARK} from '../../consts/COLOURS';
import Box from '../Box';
const RatingStars = ({
  totalStars,
  currentStars,
  size = 35,
  setStar,
  ...restProps
}) => {
  const lineArr = [];

  const StaroIcon = ({color}) => (
    <AntDesign name="staro" size={size} color={color} />
  );
  const StarIcon = ({color}) => (
    <AntDesign name="star" size={size} color={color} />
  );

  for (let i = 0; i < totalStars; i += 1) {
    if (i < currentStars) {
      lineArr.push(<StarIcon color={PRIMARY} />);
    } else {
      lineArr.push(<StaroIcon color={PRIMARY_DARK} />);
    }
  }

  return (
    <Box row {...restProps}>
      {lineArr.map((line, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => setStar(i + 1)}
          style={{marginRight: 5}}>
          {line}
        </TouchableOpacity>
      ))}
    </Box>
  );
};

const styles = StyleSheet.create({
  activeLine: {
    flex: 1,
    backgroundColor: 'red',
    marginHorizontal: 2,
    borderRadius: 1.5,
  },
  inactiveLine: {
    flex: 1,
    backgroundColor: 'grey',
    marginHorizontal: 2,
    borderRadius: 1.5,
  },
});

export default RatingStars;
