import React from 'react';
import { SectionList, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PropTypes } from 'prop-types';
import Text from '../components/styled-text';
import { useSettings } from '../settings-provider';

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
  const [settings] = useSettings();
  const settingsStyle = {
    backgroundColor: settings.accentColor,
  };

  return (
    <TouchableOpacity onPress={onPress} style={[settingsStyle, styles.settingsButton]}>
      <Text style={styles.settingsButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default function Settings({ navigation }) {
  const accessibility = {
    title: 'Accessibility',
    data: [
      { title: 'Font', onPress: () => console.log('Font') },
      { title: 'Font Size', onPress: () => console.log('Font Size') },
      {
        title: 'Font Color',
        onPress: () => navigation.navigate('color-picker-setting', {
          key: 'fontColor',
          title: 'Font Color',
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
          key: 'primaryColor',
          title: 'Primary Color',
        }),
      },
      {
        title: 'Accent Color',
        onPress: () => navigation.navigate('color-picker-setting', {
          key: 'accentColor',
          title: 'Accent Color',
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
      renderItem={({ item: { title, onPress } }) => (
        <SettingsButton title={title} onPress={onPress} />
      )}
      renderSectionHeader={({ section: { title } }) => (
        <SettingsHeader title={title} />
      )}
    />
  );
}

Settings.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

SettingsHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

SettingsButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
