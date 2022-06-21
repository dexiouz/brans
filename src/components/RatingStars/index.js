import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../../consts/COLORS';

const ProgressLine = ({totalStars, currentStars, size = 35, setStar}) => {
  const lineArr = [];

  const StaroIcon = ({color}) => (
    <AntDesign name="staro" size={size} color={color} />
  );
  const StarIcon = ({color}) => (
    <AntDesign name="star" size={size} color={color} />
  );

  for (let i = 0; i < totalStars; i += 1) {
    if (i < currentStars) {
      lineArr.push(<StarIcon color={COLORS.PRIMARY} />);
    } else {
      lineArr.push(<StaroIcon color={COLORS.PRIMARY_OPACITY80} />);
    }
  }

  return (
    <View style={styles.container}>
      {lineArr.map((line, i) => (
        <TouchableOpacity
          onPress={() => setStar(i + 1)}
          style={{marginRight: 5}}>
          {line}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  activeLine: {
    flex: 1,
    backgroundColor: COLORS.SECONDARY_ACCENT,
    marginHorizontal: 2,
    borderRadius: 1.5,
  },
  inactiveLine: {
    flex: 1,
    backgroundColor: COLORS.SECONDARY_ACCENT,
    marginHorizontal: 2,
    borderRadius: 1.5,
  },
});

export default ProgressLine;
