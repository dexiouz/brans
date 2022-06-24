/* eslint-disable react/jsx-props-no-spreading */
import {View, StyleSheet, ViewStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  NativeSafeAreaViewProps,
} from 'react-native-safe-area-context';
import {IS_ANDROID} from '../../consts/LAYOUT';

interface Props extends PropsWithChildren<NativeSafeAreaViewProps> {
  ios?: boolean;
  style?: ViewStyle | ViewStyle[] | null;
  children?: React.ReactChild | null;
}

const TemplateSafeAreaView: React.FC<Props> = ({
  ios,
  style,
  edges,
  children,
  ...restProps
}) => {
  const SafeView = IS_ANDROID || ios ? SafeAreaView : View;

  return (
    <SafeView edges={edges} style={[styles.container, style]} {...restProps}>
      {children}
    </SafeView>
  );
};

export default TemplateSafeAreaView;

TemplateSafeAreaView.defaultProps = {
  ios: false,
  style: null,
  children: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
