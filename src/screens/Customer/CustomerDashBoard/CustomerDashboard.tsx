import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TemplateText from '../../../components/TemplateText';
import {NavigationProps} from '../../../utils/types';
import TemplateTouchable from '../../../components/TemplateTouchable';
import {WHITE} from '../../../consts/COLOURS';
import {WRAPPER_MARGIN} from '../../../consts/LAYOUT';
import Box from '../../../components/Box';
const CustomerDashboard: FC<NavigationProps> = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TemplateTouchable
          style={{marginRight: WRAPPER_MARGIN}}
          onPress={() => navigation.goBack()}>
          <Ionicons name="settings-outline" color={WHITE} size={24} />
        </TemplateTouchable>
      ),
    });
  }, [navigation]);
  return (
    <Box flex hCenter vCenter>
      <TemplateText>Dashboard</TemplateText>
    </Box>
  );
};

export default CustomerDashboard;

const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
    paddingTop: 20,
  },
});
