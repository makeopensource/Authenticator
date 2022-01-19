import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PropTypes } from 'prop-types';
import RNPickerSelect from 'react-native-picker-select';
import Text from '../components/styled-text';
import { useSettings } from '../settings-provider';

const styles = StyleSheet.create({
  container: {
    margin: 30,
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
  },
  chevron: {
    backgroundColor: 'transparent',
    borderTopWidth: 10,
    borderRightWidth: 10,
    borderRightColor: 'transparent',
    borderLeftWidth: 10,
    borderLeftColor: 'transparent',
    width: 0,
    height: 0,
  },
});

function Chevron(color) {
  return (
    <View style={[styles.chevron, { borderTopColor: color }]} />
  );
}

export default function DropdownSetting({ route }) {
  const { key, title, items } = route.params;
  const [settings, updateSettings] = useSettings();
  const setting = settings[key];

  const sharedStyles = {
    fontSize: 24,
    fontFamily: settings.fontFamily,
    color: settings.fontColor,
    backgroundColor: settings.accentColor,
    margin: 30,
    paddingVertical: 15,
    paddingLeft: 10,
    paddingRight: 30,
    borderRadius: 15,
  };

  const pickerStyles = StyleSheet.create({
    inputIOS: sharedStyles,
    inputAndroid: sharedStyles,
    inputWeb: sharedStyles,
    iconContainer: { top: 58, right: 35 },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <RNPickerSelect
        placeholder={{}}
        items={items}
        value={setting}
        onValueChange={(value) => updateSettings({ [key]: value })}
        style={pickerStyles}
        useNativeAndroidPickerStyle={false}
        Icon={() => Chevron(settings.fontColor)}
      />
    </View>
  );
}

DropdownSetting.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  }).isRequired,
};
