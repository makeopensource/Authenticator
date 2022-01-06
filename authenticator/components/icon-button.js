import React from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

export default function IconButton({ onPress, img, style = {} }) {
  // const test = <View style/>;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Image source={img} style={[{ height: 25, width: 25, margin: 10 }, style]} />
    </TouchableWithoutFeedback>
  );
}

IconButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  img: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};

IconButton.defaultProps = {
  style: {},
};
