import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TemplateText from '../../../components/TemplateText';
import {WRAPPER_MARGIN} from '../../../consts/LAYOUT';
import {WHITE} from '../../../consts/COLOURS';
import {NavigationProps} from '../../../utils/types';
import TemplateTouchable from '../../../components/TemplateTouchable';
const BookingDetails: FC<NavigationProps> = ({navigation}) => {
  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <TemplateTouchable
  //         style={{marginRight: WRAPPER_MARGIN}}
  //         onPress={() => navigation.goBack()}>
  //         <Ionicons name="settings-outline" color={WHITE} size={24} />
  //       </TemplateTouchable>
  //     ),
  //   });
  // }, [navigation]);
  return <TemplateText>Boookings Detailssssss</TemplateText>;
};

export default BookingDetails;

const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
    paddingTop: 20,
  },
});
