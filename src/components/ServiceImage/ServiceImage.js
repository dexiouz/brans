import React, {useState} from 'react';
import {Image, StyleSheet, Alert} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {WRAPPER_MARGIN} from '../../consts/LAYOUT';
import Box from '../Box';
import {
  LIGHT_GREY,
  DAVY_GREY,
  BACKGROUND,
  WHITE,
  BLACK,
} from '../../consts/COLOURS';
import avatar from '../../assets/images/profile.jpeg';
import ImageOrDefault from './ImageOrDefault';
const size = 70;
const ServiceImage = ({hide}) => {
  const [smallImage, setSmallImage] = useState(null);
  const [largeImage, setLargeImage] = useState(null);

  const selectSmallImage = async () => {
    await ImagePicker.launchImageLibrary(
      {mediaType: 'photo', quality: 1, maxHeight: 178, maxWidth: 178},
      result => {
        if (!result.assets) {
          Alert.alert(result.errorMessage);
          return;
        }
        console.log(result);
        setSmallImage(result.assets[0]?.uri);
      },
    );
  };
  const selectLargeImage = async () => {
    await ImagePicker.launchImageLibrary(
      {mediaType: 'photo', quality: 1, maxHeight: 178, maxWidth: 178},
      result => {
        if (!result.assets) {
          Alert.alert(result.errorMessage);
          return;
        }
        console.log(result);
        setLargeImage(result.assets[0]?.uri);
      },
    );
  };
  return (
    <Box
      height={120}
      backgroundColor={LIGHT_GREY}
      mb={WRAPPER_MARGIN}
      row
      center>
      <ImageOrDefault profileAvatar={largeImage} style={styles.bgImage} />
      {!hide && (
        <Box
          width={25}
          height={25}
          backgroundColor={BLACK}
          center
          absolute
          top={25}
          right={15}
          onPress={selectLargeImage}
          borderRadius={50}>
          <AntDesign name="edit" color={WHITE} size={13} />
        </Box>
      )}

      <Box
        absolute
        width={size}
        height={size}
        onPress={selectSmallImage}
        borderWidth={1}
        borderColor={BACKGROUND}
        backgroundColor={LIGHT_GREY}
        bottom={-32}
        borderRadius={150}>
        <ImageOrDefault profileAvatar={smallImage} style={styles.tinyLogo} />
        {!hide && (
          <Box
            width={25}
            height={25}
            backgroundColor={BLACK}
            center
            absolute
            bottom={-5}
            right={-5}
            borderRadius={50}>
            <AntDesign name="edit" color={WHITE} size={13} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ServiceImage;

const styles = StyleSheet.create({
  tinyLogo: {
    width: size,
    height: size,
    borderRadius: 50,
  },
  bgImage: {
    height: '100%',
    width: '100%',
  },
});
