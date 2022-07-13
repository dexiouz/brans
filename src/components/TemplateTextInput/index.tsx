import React, {
  useState,
  FC,
  ReactChildren,
  ReactChild,
  MutableRefObject,
} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  ViewStyle,
  TextStyle,
  TextInputProps,
} from 'react-native';
import TemplateText from '../TemplateText';
import {
  BACKGROUND,
  WHITE,
  WHITE_OPACITY15,
  WHITE_OPACITY10,
  WHITE_OPACITY80,
  WHITE_OPACITY60,
  WHITE_OPACITY40,
  ERROR_RED,
} from '../../consts/COLOURS';
import TemplateIcon from '../TemplateIcon/';
import {BORDER_MEDIUM} from '../../consts/LAYOUT';
import {SCREEN_WIDTH} from '../../consts/LAYOUT';

type labelIcon = {
  family?: string;
  name?: string;
  size?: number;
  color?: string;
};
interface TemplateTextInputProps extends TextInputProps {
  semiBold?: boolean;
  bold?: boolean;
  focus?: boolean;
  labelText?: string;
  lableColor?: string;
  labelIcon?: labelIcon;
  hasLabel?: boolean;
  inputStyle?: ViewStyle;
  labelTextStyle?: TextStyle;
  children?: ReactChildren | ReactChild | null;
  containerStyle?: ViewStyle | ViewStyle[] | null;
  inputContainerStyle?: ViewStyle | ViewStyle[] | null;
  label?: string | null;
  labelStyle?: TextStyle | TextStyle[] | null;
  restProps?: TextInputProps | null;
  error?: string | null;
  type?: string;
  name?: string;
  refField?: MutableRefObject<any> | null;
  cancel?: boolean;
  onCancelPress?: (() => void) | null;
}
const TemplateTextInput: FC<TemplateTextInputProps> = ({
  containerStyle = {},
  hasLabel = false,
  labelText,
  lableColor = WHITE,
  children,
  inputStyle,
  error,
  name,
  labelIcon,
  labelWrapperStyle,
  labelTextStyle,
  ...restProps
}) => {
  const [thisOneFocus, setThisOneFocus] = useState(false);

  let textInputStyle = styles.textInput;
  if (thisOneFocus) {
    textInputStyle = styles.textInputFocus;
  }
  if (error) {
    textInputStyle = styles.textInputError;
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.labelChilderenWrapper}>
        <View style={[styles.labelWrapper, labelWrapperStyle]}>
          {labelIcon && (
            <View style={{paddingRight: 10}}>
              <TemplateIcon
                iconFamily={labelIcon.family}
                name={labelIcon.name}
                size={labelIcon.size}
                color={lableColor}
              />
            </View>
          )}
          {hasLabel && (
            <TemplateText
              color={lableColor}
              style={[styles.labelText, labelTextStyle]}>
              {labelText}
            </TemplateText>
          )}
        </View>
        <View>{children}</View>
      </View>

      <TextInput
        placeholderTextColor={WHITE_OPACITY80}
        name={name}
        style={[
          {
            // fontFamily,
            color: WHITE,
            marginBottom: 10,
          },
          {...textInputStyle, ...inputStyle},
          restProps.style && restProps.style,
        ]}
        {...restProps}
        onFocus={() => setThisOneFocus(true)}
        onBlur={() => setThisOneFocus(false)}
      />
      {/* {error && (
        <TemplateText center color={ERROR_RED} style={styles.validationMessage}>
          {error}
        </TemplateText>
      )} */}
    </View>
  );
};

export default TemplateTextInput;
const styles = StyleSheet.create({
  container: {
    // alignSelf: 'center',
    // width: SCREEN_WIDTH * 0.9,
  },
  labelText: {
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 20,
  },
  textInput: {
    backgroundColor: WHITE_OPACITY15,
    borderRadius: BORDER_MEDIUM,
    color: WHITE,
    fontSize: 16,
    height: 45,
    paddingLeft: 7,
  },
  textInputFocus: {
    backgroundColor: WHITE_OPACITY10,
    borderRadius: BORDER_MEDIUM,
    borderWidth: StyleSheet.hairlineWidth,
    color: WHITE,
    fontSize: 16,
    height: 45,
    paddingLeft: 7,
  },
  textInputError: {
    backgroundColor: BACKGROUND,
    borderColor: ERROR_RED,
    borderWidth: 1,
    borderRadius: 3,
    height: 45,
    paddingLeft: 7,
  },
  labelWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 2,
    marginBottom: 7,
  },
  labelChilderenWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  validationMessage: {
    color: WHITE_OPACITY80,
    textAlign: 'center',
    width: SCREEN_WIDTH * 0.9,
    alignSelf: 'center',
    fontSize: 13,
  },
});
