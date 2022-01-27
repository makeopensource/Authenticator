import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { PropTypes } from 'prop-types';
import { useSettings } from '../settings-provider';

export default function Text({ style, children }) {
  const [settings] = useSettings();
  const defaultSize = 12;

  let flatStyle = { ...StyleSheet.flatten(style) };
  flatStyle = Object.assign(flatStyle, {
    color: settings.fontColor,
    fontFamily: settings.fontFamily,
    fontSize: settings.fontScale * (flatStyle.fontSize ?? defaultSize),
  });

  return (
    <RNText style={flatStyle}>{children}</RNText>
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
