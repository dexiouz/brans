import {ColorValue, StyleSheet, ViewStyle} from 'react-native';
import Animated from 'react-native-reanimated';
import {BLACK, WHITE} from './COLOURS';

export const styles = StyleSheet.create({
  card: {
    shadowColor: `${BLACK}14`,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    elevation: 3,
  },

  lightCard: {
    shadowColor: `${BLACK}14`,
    shadowOffset: {
      width: -5,
      height: -5,
    },
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  none: {
    shadowColor: undefined,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 0,
    shadowOpacity: 0,
    elevation: 0,
  },
  wrapper: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  flexWrapper: {
    height: '100%',
    width: '100%',
    flex: 1,
    overflow: 'hidden',
  },
  android: {
    elevation: 8,
  },
});

type ShadowType = 'card' | 'none' | 'wrapper' | 'lightCard' | 'android';
type BackgroundColorType =
  | string
  | ColorValue
  | Animated.Node<string | number>
  | false
  | undefined;

// Fix shadow props here!!!!!
// eslint-disable-next-line max-len
export const SHADOW: (
  type: ShadowType,
  backgroundColor: BackgroundColorType,
  restProps?: ViewStyle | Animated.Node<string | number> | undefined,
) => ViewStyle = (type, backgroundColor, restProps = {}) => {
  const style: ViewStyle = styles[type];

  return {
    ...style,
    backgroundColor: backgroundColor || WHITE,
    ...restProps,
  };
};

export default {
  styles,
  SHADOW,
};
