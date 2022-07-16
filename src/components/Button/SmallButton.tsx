import React, {Children} from 'react';
import {StyleSheet} from 'react-native';
import {WRAPPER_MARGIN} from '../../consts/LAYOUT';
import Button from '../../components/Button';
import {ButtonProps} from '../../components/Button';

const SmallButton: React.FC<ButtonProps> = ({
  width,
  borderRadius,
  onPress,
  children,
  right,
  left,
  style,
}) => {
  return (
    <Button
      right={right}
      left={left}
      onPress={onPress}
      textStyle={styles.textStyle}
      width={width || 130}
      borderRadius={borderRadius || 20}
      style={{...styles.btn, ...style}}>
      {children}
    </Button>
  );
};

export default SmallButton;

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
