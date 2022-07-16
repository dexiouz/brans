import React from 'react';
import {Image, ActivityIndicator} from 'react-native';
import avatar from '../../assets/images/profile.jpeg';

const ImageOrDefault = ({profileAvatar, style, imageLoading}) => {
  return (
    <>
      {imageLoading ? (
        <ActivityIndicator />
      ) : (
        <Image
          source={
            typeof profileAvatar === 'string' ? {uri: profileAvatar} : avatar
          }
          style={style}
        />
      )}
    </>
  );
};

export default ImageOrDefault;
