import React, {forwardRef} from 'react';
import {ScrollView, StyleSheet, ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';

const CardCarousel = forwardRef(
  (
    {
      children,
      smallCardWidth,
      cardMargin,
      style,
      contentContainerStyle,
      ...rest
    },
    ref,
  ) => {
    const elementWidth = smallCardWidth + cardMargin;

    return (
      <ScrollView
        horizontal
        decelerationRate={0}
        snapToInterval={elementWidth || 0}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
        style={[styles.container, style]}
        contentContainerStyle={contentContainerStyle}
        ref={ref}
        {...rest}>
        {children}
      </ScrollView>
    );
  },
);

CardCarousel.propTypes = {
  children: PropTypes.node.isRequired,
  smallCardWidth: PropTypes.number,
  cardMargin: PropTypes.number,
  style: ViewPropTypes.style,
  contentContainerStyle: ViewPropTypes.style,
};

CardCarousel.defaultProps = {
  smallCardWidth: null,
  cardMargin: null,
  style: null,
  contentContainerStyle: null,
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 4,
    width: '100%',
  },
});

export default CardCarousel;
