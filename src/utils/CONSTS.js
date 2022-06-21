import {Dimensions, Platform} from 'react-native';

export const IS_ANDROID = Platform.OS === 'android';

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('screen');

export const IS_SMALL_DEVICE = SCREEN_HEIGHT < 800;
export const IS_SHORT_DEVICE = SCREEN_HEIGHT < 700;
export const LARGE_SCREEN = SCREEN_HEIGHT > 800;

export default {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  IS_ANDROID,
  IS_SMALL_DEVICE,
  IS_SHORT_DEVICE,
  LARGE_SCREEN,
};
