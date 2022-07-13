import {StyleSheet, Platform, View} from 'react-native';
import React, {useState, useLayoutEffect} from 'react';
import useHeader from '../../../hooks/useHeader';
import Box from '../../../components/Box';
import TemplateText from '../../../components/TemplateText';
import RatingStars from '../../../components/RatingStars';
import {Title} from '../../../components/header/screenOptions';
import {WRAPPER_MARGIN} from '../../../consts/LAYOUT';
import TemplateTextInput from '../../../components/TemplateTextInput';
import {SCREEN_HEIGHT} from '../../../consts/LAYOUT';
import {WHITE_OPACITY15, WHITE} from '../../../consts/COLOURS';
import Button from '../../../components/Button';
import {NavigationProps} from '../../../utils/types';
import {WHITE_OPACITY80} from '../../../consts/COLOURS';
import SmallButton from '../../../components/Button/SmallButton';
const RateService: React.FC<NavigationProps> = ({navigation}) => {
  const [star, setStar] = useState(null);
  const [text, setText] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <SmallButton width={90}>Post</SmallButton>,
      headerTitle: () => <TemplateText />,
    });
  }, [navigation]);
  return (
    <Box flex pAll={WRAPPER_MARGIN}>
      <Title containerStyle={{marginBottom: 20}} title="Rate Laundry A" />
      <RatingStars
        totalStars={5}
        currentStars={star}
        setStar={setStar}
        size={35}
        spaceBetween
        mb={20}
      />

      <TemplateTextInput
        name="aboutBrand"
        blurOnSubmit={false}
        returnKeyType="next"
        autoCapitalize="none"
        autoCorrect={false}
        multiline
        placeholder="What was your experience like..."
        value={text}
        inputStyle={styles.textArea}
        onChangeText={(value: string) => setText(value)}
        autoFocus
      />
      <Box mb={WRAPPER_MARGIN}>
        <TemplateText size={17} white>
          Chidera Ugwuanyi
        </TemplateText>
        <Box row vCenter mv={WRAPPER_MARGIN / 2 - 4}>
          <RatingStars
            totalStars={5}
            currentStars={3}
            setStar={() => {}}
            size={12}
          />
          <TemplateText ml={12}>26/06/2022</TemplateText>
        </Box>
        <TemplateText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </TemplateText>
      </Box>
      <Box mb={WRAPPER_MARGIN}>
        <TemplateText size={17} white>
          Chidera Ugwuanyi
        </TemplateText>
        <Box row vCenter mv={WRAPPER_MARGIN / 2 - 4}>
          <RatingStars
            totalStars={5}
            currentStars={3}
            setStar={() => {}}
            size={12}
          />
          <TemplateText ml={12}>26/06/2022</TemplateText>
        </Box>
        <TemplateText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </TemplateText>
      </Box>
    </Box>
  );
};

export default RateService;

const styles = StyleSheet.create({
  textArea: {
    ...Platform.select({
      android: {
        height: SCREEN_HEIGHT * 0.12,
      },
      ios: {
        height: SCREEN_HEIGHT * 0.14,
      },
    }),
    paddingHorizontal: 20,
    fontSize: 16,
    backgroundColor: WHITE_OPACITY15,
    borderRadius: 5,
    textAlignVertical: 'top',
    color: WHITE,
  },
});
