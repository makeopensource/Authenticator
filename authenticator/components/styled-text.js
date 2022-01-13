import React from 'react';
import { Text as RNText } from 'react-native';
import { PropTypes } from 'prop-types';
import { useSettings } from '../settings-provider';

export default function Text({ style, children }) {
  const [settings] = useSettings();
  const settingsStyle = {
    color: settings.fontColor,
  };

  return (
    <RNText style={[settingsStyle, style]}>{children}</RNText>
  );
}

Text.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object,
    ])),
  ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};
Text.defaultProps = {
  style: null,
  children: null,
};
