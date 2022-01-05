import React from 'react';
import PropTypes from 'prop-types';
import HomeIcon from '../assets/navigation_icons/home.png';
import SettingsIcon from '../assets/navigation_icons/settings.png';
import PlusIcon from '../assets/navigation_icons/plus-circle.png';
import IconButton from './icon-button';

function SettingsButton({ navigation }) {
  return <IconButton onPress={() => navigation.navigate('settings')} img={SettingsIcon} />;
}

function NewButton({ navigation }) {
  return <IconButton onPress={() => navigation.navigate('new')} img={PlusIcon} />;
}

function HomeButton({ navigation }) {
  return <IconButton onPress={() => navigation.navigate('application-list')} img={HomeIcon} />;
}

const navigationButtonPropTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

SettingsButton.propTypes = navigationButtonPropTypes;
NewButton.propTypes = navigationButtonPropTypes;
HomeButton.propTypes = navigationButtonPropTypes;

export {
  SettingsButton,
  NewButton,
  HomeButton,
};
