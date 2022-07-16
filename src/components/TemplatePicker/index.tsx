import React, {FC} from 'react';
import {StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import RNPickerSelect, {PickerSelectProps} from 'react-native-picker-select';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  BLACK,
  WHITE,
  CHECK_GREY,
  WHITE_OPACITY15,
  BACKGROUND,
  ERROR_RED,
} from '../../consts/COLOURS';
import {SCREEN_WIDTH} from '../../utils/CONSTS';
import TemplateText from '../TemplateText';
import {IS_ANDROID} from '../../consts/LAYOUT';

interface PickerProps extends PickerSelectProps {
  placeholder?: string;
  pickerStyle?: ViewStyle;
  pickerContainerStyle?: ViewStyle;
  // onValueChange: () => void;
  // PickerItem: {
  //   label: string;
  //   value: string | number;
  // };
  topLabel?: string;
  lableColor?: string;
  labelTextStyle?: TextStyle;
  error?: string;
}
const Picker: FC<PickerProps> = ({
  placeholder,
  pickerStyle,
  pickerContainerStyle,
  onValueChange,
  // PickerItem,
  topLabel,
  items,
  lableColor = WHITE,
  labelTextStyle,
  error,
  ...props
}) => {
  return (
    <View>
      <View>
        {topLabel && (
          <TemplateText
            color={lableColor}
            style={[styles.topLabel, labelTextStyle]}>
            {topLabel}
          </TemplateText>
        )}
      </View>
      <View
        style={[
          styles.pickerContainerView,
          error && styles.textInputError,
          pickerContainerStyle,
        ]}>
        <RNPickerSelect
          placeholder={{label: placeholder, value: ''}}
          onValueChange={value => onValueChange(value)}
          items={items}
          style={{...pickerSelectStyles, ...pickerStyle}}
          {...props}
          Icon={() =>
            !IS_ANDROID && (
              <Entypo name="chevron-down" size={20} color={CHECK_GREY} />
            )
          }
        />
      </View>
    </View>
  );
};
export default Picker;

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingHorizontal: 5,
    // paddingRight: 30,
    lineHeight: 17,
    fontFamily: 'Helvetica Neue',
    color: WHITE,
    fontWeight: 'normal',
    fontStyle: 'normal',
    marginLeft: 2,
    // backgroundColor: 'red',
  },
  inputAndroid: {
    color: WHITE,
    marginLeft: -6,
    paddingVertical: 20,
    paddingRight: 30,
    fontSize: 16,
  },
  iconContainer: {
    marginRight: 5,
  },
  placeholder: {
    color: CHECK_GREY,
    fontSize: 14,
    lineHeight: 17,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
});
const styles = StyleSheet.create({
  textInputError: {
    backgroundColor: BACKGROUND,
    borderColor: ERROR_RED,
    borderWidth: 1,
    borderRadius: 3,
    marginTop: 5,
    color: WHITE,
    fontSize: 18,
    minHeight: 45,
    paddingLeft: 7,
  },
  pickerContainerView: {
    justifyContent: 'center',
    height: 45,
    marginVertical: 10,
    width: '100%',
    borderRadius: 3,
    backgroundColor: WHITE_OPACITY15,
  },
  pickerStyle: {
    width: '100%',
    borderRadius: 3,
    height: '100%',
  },
  inputIOS: {
    fontSize: 34,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 8,
    color: BLACK,
    backgroundColor: 'red',
  },
  inputAndroid: {
    color: BLACK,
    marginLeft: 5,
    paddingVertical: 20,
    paddingRight: 30,
  },
  topLabel: {
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 20,
    marginTop: 10,
  },
});
