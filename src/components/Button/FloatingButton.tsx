import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TemplateText from '../TemplateText';
import Box from '../Box';
import {PRIMARY, PRIMARY_DARK} from '../../consts/COLOURS';
interface Props {
  onPressFunc?: () => void;
  icon?: string;
  bgColor?: string;
  iconColor?: string;
  iconSize?: number;
  title?: string;
}

const gradientColors = [PRIMARY, PRIMARY_DARK];
const FloatingButton: React.FC<Props> = ({
  onPressFunc,
  icon,
  bgColor,
  iconColor,
  iconSize,
  title,
}) => (
  <Box style={styles.container}>
    <Box
      vGradient
      gradientColors={gradientColors}
      borderRadius={150}
      style={{...styles.add_btn, backgroundColor: bgColor || '#f8bd17'}}>
      <TouchableNativeFeedback
        background={
          Platform.OS === 'android' || Platform.OS === 'ios'
            ? TouchableNativeFeedback.Ripple('#F6F6F6', true)
            : TouchableNativeFeedback.SelectableBackground()
        }
        onPress={onPressFunc}>
        <Box style={styles.float}>
          {icon ? (
            icon
          ) : (
            <Ionicons
              name="ios-add"
              color={iconColor || '#000'}
              size={iconSize || 36}
            />
          )}
        </Box>
      </TouchableNativeFeedback>
    </Box>
    {title && <TemplateText>{title}</TemplateText>}
  </Box>
);

export default FloatingButton;
const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    position: 'absolute',
    bottom: 20,
    right: 2,
    width: 120,
    height: 90,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  add_btn: {
    width: 70,
    height: 70,
    borderRadius: 50,
    // backgroundColor: '#f8bd17',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
  },
  float: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
