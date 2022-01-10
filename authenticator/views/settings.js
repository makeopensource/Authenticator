import React, { useState, useEffect } from 'react';
import { SectionList, Text, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { PropTypes } from 'prop-types';

const styles = StyleSheet.create({
  settings: {
    margin: 10,
  },
  settingsHeader: {
    fontSize: 24,
    marginBottom: 5,
  },
  settingsButton: {
    marginBottom: 1,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  settingsButtonText: {
    fontSize: 16,
    padding: 8,
  },
});

function SettingsHeader({ title }) {
  return (
    <Text style={styles.settingsHeader}>{title}</Text>
  );
}

function SettingsButton({ title, onPress }) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor="lightgray" style={styles.settingsButton}>
      <Text style={styles.settingsButtonText}>{title}</Text>
    </TouchableHighlight>
  );
}

export default function Settings({ navigation, route }) {
  const colors = {
    font: useState('#000000'),
    primary: useState('#F2F2F2'),
    accent: useState('#FFFFFF'),
  };

  // Load from persistent storage in useEffect hook here

  useEffect(() => {
    if (route.params?.color && route.params?.colorId) {
      // Set state for appropriate color
      const { color, colorId } = route.params;
      colors[colorId][1](color);

      // Save to persistent storage here
    }
  });

  const accessibility = {
    title: 'Accessibility',
    data: [
      { title: 'Font', onPress: () => console.log('Font') },
      { title: 'Font Size', onPress: () => console.log('Font Size') },
      {
        title: 'Font Color',
        onPress: () => navigation.navigate('color-picker-setting', {
          title: 'Font Color',
          id: 'font',
          currentColor: colors.font[0],
        }),
      },
    ],
  };

  const customization = {
    title: 'Customization',
    data: [
      {
        title: 'Primary Color',
        onPress: () => navigation.navigate('color-picker-setting', {
          title: 'Primary Color',
          id: 'primary',
          currentColor: colors.primary[0],
        }),
      },
      {
        title: 'Accent Color',
        onPress: () => navigation.navigate('color-picker-setting', {
          title: 'Accent Color',
          id: 'accent',
          currentColor: colors.accent[0],
        }),
      },
    ],
  };

  const information = {
    title: 'Information',
    data: [
      { title: 'User Guide', onPress: () => console.log('User Guide') },
      { title: 'Privacy Policy', onPress: () => console.log('Privacy Policy') },
    ],
  };

  const sections = [
    accessibility,
    customization,
    information,
  ];

  return (
    <SectionList
      style={styles.settings}
      sections={sections}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => SettingsButton(item)}
      renderSectionHeader={({ section }) => SettingsHeader(section)}
    />
  );
}

Settings.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      color: PropTypes.string,
      colorId: PropTypes.string,
    }),
  }).isRequired,
};

SettingsHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

SettingsButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
