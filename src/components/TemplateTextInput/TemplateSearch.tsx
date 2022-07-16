import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import TemplateIcon from '../TemplateIcon';
import {NavigationProps} from '../../utils/types';
import TemplateTextInput from '../TemplateTextInput';
import {SPACE_XSMALL, SCREEN_WIDTH, RADIUS_SMALL} from '../../consts/LAYOUT';
import Box from '../Box';
import {
  WHITE,
  WHITE_OPACITY60,
  BLACK,
  CARD_BACKGROUND,
} from '../../consts/COLOURS';
const TemplateSearch = () => {
  const [searchText, setSearchText] = React.useState('');
  console.log();

  return (
    <Box row width={SCREEN_WIDTH * 0.9} mt={SPACE_XSMALL} selfCenter>
      <Box
        flex={0.15}
        center
        backgroundColor={BLACK}
        height={45}
        borderTopLeftRadius={RADIUS_SMALL}
        borderBottomLeftRadius={RADIUS_SMALL}>
        <TemplateIcon
          iconFamily="AntDesign"
          name="search1"
          size={20}
          color={WHITE}
          label={undefined}
          onPress={undefined}
          padding={undefined}
          style={undefined}
        />
      </Box>
      <Box flex={0.85}>
        <TemplateTextInput
          value={searchText}
          onChangeText={text => setSearchText(text)}
          style={styles.searchTextInput}
          placeholder="Search..."
          labelWrapperStyle={{marginBottom: 0}}
          placeholderTextColor={WHITE_OPACITY60}
        />
      </Box>
    </Box>
  );
};

export default TemplateSearch;

const styles = StyleSheet.create({
  searchTextInput: {
    height: 45,
    backgroundColor: CARD_BACKGROUND,
    borderTopRightRadius: RADIUS_SMALL,
    borderBottomRightRadius: RADIUS_SMALL,
    paddingHorizontal: SPACE_XSMALL * 2,
    color: WHITE,
  },
});
