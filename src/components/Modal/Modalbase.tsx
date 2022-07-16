import React from 'react';
import {StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';

interface ModalBaseProps {
  closeOnPress?: () => {} | boolean | null;
  visible?: boolean;
  children?: React.ElementType | React.ReactNode;
}
const ModalBase: React.FC<ModalBaseProps> = ({
  closeOnPress,
  visible,
  children,
  ...restProps
}) => (
  <Modal
    isVisible={visible}
    transparent
    onSwipeComplete={closeOnPress}
    onBackdropPress={closeOnPress}
    style={styles.modal}
    {...restProps}>
    {children}
  </Modal>
);

ModalBase.propTypes = {
  closeOnPress: PropTypes.func,
  visible: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

ModalBase.defaultProps = {
  closeOnPress: null,
  visible: false,
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    margin: 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
    // backgroundColor: 'red',
  },
});

export default ModalBase;
