import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import { useSettings } from '../settings-provider';

export default function SvgButton({ onPress, svg }) {
  const [settings] = useSettings();

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      style={{ margin: 10, transform: [{ scale: settings.fontScale }] }}
    >
      {svg}
    </TouchableWithoutFeedback>
  );
}

SvgButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  svg: PropTypes.node.isRequired,
};
