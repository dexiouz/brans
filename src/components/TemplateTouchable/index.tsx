import React from 'react';
import {GestureResponderEvent, TouchableOpacity, ViewStyle} from 'react-native';
import {BoxProps} from '../Box';

interface Props extends BoxProps {
  children: React.ReactNode;
  onPress?: () => void;
  activeOpacity?: number;
  disabled?: boolean;
  style?: ViewStyle | ViewStyle[] | null;
}

const TemplateTouchable: React.FC<Props> = ({
  children,
  onPress,
  activeOpacity,
  disabled,
  style,
  ...restProps
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      {...restProps}
      style={style}
      activeOpacity={disabled ? 0.6 : activeOpacity}>
      {children}
    </TouchableOpacity>
  );
};

TemplateTouchable.defaultProps = {
  onPress: undefined,
  activeOpacity: 1,
  disabled: false,
  style: null,
};

export default TemplateTouchable;
