/* eslint-disable max-len */
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  RADIUS_SMALL,
  WRAPPER_MARGIN,
  SPACE_LARGE,
  SPACE_MEDIUM,
  SPACE_SMALL,
  SPACE_XSMALL,
} from '../../consts/LAYOUT';
import Box from '../Box';
import {Title} from '../header/screenOptions';
import ModalBase from './Modalbase';
import Button from '../Button';
import {BACKGROUND} from '../../consts/COLOURS';
import TemplateText from '../TemplateText';
import TemplateTextInput from '../TemplateTextInput';

interface Props {
  visible: boolean;
  onClose: () => boolean | {} | null;
}
const SetLocationModal: React.FC<Props> = ({visible, onClose}) => {
  const [manual, setManual] = useState('');
  return (
    <ModalBase closeOnPress={onClose} visible={visible}>
      <Box style={styles.modalContainer}>
        <Title center title="Please set your location" />
        <Button primary round={8} bold mt={SPACE_MEDIUM}>
          Use current location
        </Button>
        <TemplateText
          size={14}
          center
          mv={SPACE_XSMALL}
          underline
          onPress={onClose}>
          or
        </TemplateText>
        <TemplateTextInput
          name="manual"
          placeholder="Type in your preferred location..."
          blurOnSubmit={false}
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
          value={manual}
          onChangeText={value => setManual(value)}
        />
        <Button
          disabled={!manual}
          round={8}
          bold
          mt={SPACE_XSMALL}
          onPress={() => {}}>
          Submit
        </Button>

        <TemplateText
          size={14}
          center
          mt={SPACE_MEDIUM}
          underline
          onPress={onClose}>
          close
        </TemplateText>
      </Box>
    </ModalBase>
  );
};

export default SetLocationModal;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 2,
    alignItems: 'center',
  },
  modalContainer: {
    padding: WRAPPER_MARGIN,
    width: SCREEN_WIDTH * 0.9,
    backgroundColor: BACKGROUND,
    height: (SCREEN_HEIGHT / 2) * 0.7,
    marginTop: 55,
    marginBottom: 55,
    alignSelf: 'center',
    borderRadius: RADIUS_SMALL,
  },
});
