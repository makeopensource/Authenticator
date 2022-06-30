import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import { useSettings } from '../settings-provider';

export default function SvgButton({ onPress, svg }) {
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      style={{ margin: 10, }}
    >
      {svg}
    </TouchableWithoutFeedback>
  );
}

SvgButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  svg: PropTypes.node.isRequired,
};
