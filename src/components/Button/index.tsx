import React from 'react';
import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {
  PRIMARY,
  PRIMARY_DARK,
  SECONDARY,
  SECONDARY_DARK,
  WHITE,
} from '../../consts/COLOURS';
import {hp} from '../../utils/getResponsiveSize';
import Box from '../Box';
import TemplateText from '../TemplateText';
import Loader from '../Loader';
import {BoxProps} from '../Box';
export interface ButtonProps extends BoxProps {
  disabled?: boolean;
  primary?: boolean;
  secondary?: boolean;
  bold?: boolean;
  semiBold?: boolean;
  transparent?: boolean;
  round?: boolean | number;
  caps?: boolean;
  children?: React.ReactElement | string | null;
  onPress?: () => void;
  style?: ViewStyle | null;
  loading?: boolean;
  textStyle?: TextStyle | null;
  color?: string | null;
  center?: boolean;
  height?: number;
  width?: number | string;
}

const Button: React.FC<ButtonProps> = ({
  disabled,
  primary = true,
  secondary,
  bold,
  semiBold,
  transparent,
  round,
  caps,
  children,
  onPress,
  style,
  loading = true,
  textStyle,
  color,
  center,
  height,
  width,
  ...restProps
}) => {
  let content = children;

  const containerStyle: ViewStyle = {
    alignItems: 'center',
    justifyContent: 'center',
  };
  const buttonTextStyle: TextStyle = {
    flexShrink: 1,
    fontSize: hp(16),
    color: WHITE,
  };

  let gradientColors: string[] = [];

  if (primary) {
    containerStyle.backgroundColor = PRIMARY;
    containerStyle.borderColor = PRIMARY;
    gradientColors = [PRIMARY, PRIMARY_DARK];
  }
  if (secondary) {
    containerStyle.backgroundColor = SECONDARY;
    containerStyle.borderColor = SECONDARY;
    gradientColors = [SECONDARY, SECONDARY_DARK];
  }

  if (color) {
    containerStyle.backgroundColor = color;
    containerStyle.borderColor = color;
  }

  if (transparent) {
    containerStyle.backgroundColor = 'transparent';
    containerStyle.borderColor = 'transparent';
    containerStyle.borderWidth = 0;
  }

  if (caps) {
    buttonTextStyle.textTransform = 'uppercase';
  }

  if (center) {
    containerStyle.alignSelf = 'center';
  }

  if (loading) {
    content = <Loader size="small" />;
  } else if (typeof content === 'string') {
    content = (
      <TemplateText
        semiBold={semiBold}
        bold={bold}
        style={textStyle ? [buttonTextStyle, textStyle] : buttonTextStyle}>
        {children}
      </TemplateText>
    );
  }

  const styleGroup: ViewStyle[] = [containerStyle, styles.container];

  return (
    <Box
      onPress={onPress}
      disabled={disabled || loading}
      style={style ? [...styleGroup, style] : styleGroup}
      vGradient
      gradientColors={gradientColors}
      borderRadius={round ? round : 2}
      opacity={disabled ? 0.6 : 1}
      center={center}
      height={height}
      width={width}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...restProps}>
      {content}
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(50),
  },
});

Button.defaultProps = {
  disabled: false,
  primary: true,
  secondary: false,
  bold: false,
  semiBold: false,
  transparent: false,
  round: false,
  caps: false,
  children: null,
  onPress: () => {},
  style: null,
  loading: false,
  textStyle: null,
  color: null,
  center: false,
  height: hp(50),
  width: '100%',
};

export default Button;
