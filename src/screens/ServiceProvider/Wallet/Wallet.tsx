import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import TemplateText from '../../../components/TemplateText';
import {NavigationProps} from '../../../utils/types';

const Wallet: FC<NavigationProps> = ({navigation}) => {
  console.log();
  return <TemplateText>Boook</TemplateText>;
};

export default Wallet;

const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
    paddingTop: 20,
  },
});
