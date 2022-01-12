import React from 'react';
import PropTypes from 'prop-types';
import HomeIcon from '../assets/navigation_icons/home.png';
import SettingsIcon from '../assets/navigation_icons/settings.png';
import PlusIcon from '../assets/navigation_icons/plus-circle.png';
import IconButton from './icon-button';

function SettingsButton({ navigation, params }) {
  return <IconButton onPress={() => navigation.navigate('settings', params)} img={SettingsIcon} />;
}

function NewButton({ navigation, params }) {
  return <IconButton onPress={() => navigation.navigate('new', params)} img={PlusIcon} />;
}

function HomeButton({ navigation, params }) {
  return <IconButton onPress={() => navigation.navigate('application-list', params)} img={HomeIcon} />;
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
