import React from 'react';
import PropTypes from 'prop-types';
import SvgButton from './svg-button';
import { GearSvg, PlusSvg, HomeSvg } from './svgs';

function SettingsButton({ navigation, params }) {
  return <SvgButton onPress={() => navigation.navigate('settings', params)} svg={GearSvg()} />;
}

function NewButton({ navigation, params }) {
  return <SvgButton onPress={() => navigation.navigate('new', params)} svg={PlusSvg()} />;
}

function HomeButton({ navigation, params }) {
  return <SvgButton onPress={() => navigation.navigate('application-list', params)} svg={HomeSvg()} />;
}

const navigationButtonPropTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  params: PropTypes.object,
};

const navigationButtonDefaultProps = {
  params: {},
};

SettingsButton.propTypes = navigationButtonPropTypes;
SettingsButton.defaultProps = navigationButtonDefaultProps;
NewButton.propTypes = navigationButtonPropTypes;
NewButton.defaultProps = navigationButtonDefaultProps;
HomeButton.propTypes = navigationButtonPropTypes;
HomeButton.defaultProps = navigationButtonDefaultProps;

export {
  SettingsButton,
  NewButton,
  HomeButton,
};
