import React from 'react';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {WHITE} from '../consts/COLOURS';
import TemplateTouchable from '../components/TemplateTouchable';
import {Title} from '../components/header/screenOptions';
import {NavigationProps} from '../utils/types';

interface Props extends NavigationProps {
  headerTitle?: string;
}

const useHeader = (headerTitle: string) => {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TemplateTouchable onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" color={WHITE} size={24} />
        </TemplateTouchable>
      ),
      headerTitle: () =>
        headerTitle ? <Title title={headerTitle} /> : <Title title="brans" />,
    });
  }, [navigation, headerTitle]);
  return;
};

export default useHeader;
