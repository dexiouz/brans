import React from 'react';
import {Dimensions, View, StyleSheet, Text} from 'react-native';
import COLORS from '../../consts/COLORS';
import {LARGE_SCREEN} from '../../utils/CONSTS';
import {IS_ANDROID} from '../../utils/CONSTS';

export const {width: SCREEN_WIDTH, heigh: SCREEN_HEIGHT} =
  Dimensions.get('screen');

export const STANDARD_HEADER_AUTH = {
  headerBackTitleVisible: false,
  headerTintColor: COLORS.WHITE,
  headerStyle: styles.headerStyleAuth,
  headerTitleAlign: 'center',
  headerTitleStyle: styles.headerTitleStyle,
  cardStyle: {backgroundColor: COLORS.BACKGROUND},
};

export const STANDARD_HEADER_APP = {
  headerBackTitleVisible: false,
  headerTintColor: COLORS.WHITE,
  headerTitle: () => (
    <View style={{marginVertical: 10}}>
      <Text>brans</Text>
    </View>
  ),
  headerStyle: styles.headerStyleApp,
  headerTitleAlign: 'center',
  headerTitleStyle: styles.headerTitleStyle,
  cardStyle: {backgroundColor: COLORS.BACKGROUND},
};

export default {
  STANDARD_HEADER_AUTH,
  STANDARD_HEADER_APP,
};

const styles = StyleSheet.create({
  headerStyleApp: {
    backgroundColor: COLORS.BACKGROUND,
    shadowColor: 'transparent',
    height: LARGE_SCREEN && !IS_ANDROID ? 105 : 70,
  },
  headerStyleAuth: {
    backgroundColor: COLORS.HEADER,
    shadowColor: 'transparent',
    height: LARGE_SCREEN && !IS_ANDROID ? 105 : 70,
  },
  headerTitleStyle: {
    fontSize: 18,
    fontWeight: '800',
  },
});
