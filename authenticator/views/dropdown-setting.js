import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PropTypes } from 'prop-types';
import { Picker } from '@react-native-picker/picker';
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
  picker: {
    margin: 30,
    fontSize: 24,
    padding: 12,
    borderRadius: 12,
  },
});

export default function DropdownSetting({ route }) {
  const { key, title, options } = route.params;
  const [settings, updateSettings] = useSettings();
  const setting = settings[key];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Picker
        selectedValue={setting}
        onValueChange={(value) => updateSettings({ [key]: value })}
        style={[styles.picker, { backgroundColor: settings.accentColor }]}
      >
        {options.map(([value, label]) => <Picker.Item label={label} value={value} key={value} />)}
      </Picker>
    </View>
  );
}

DropdownSetting.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.arrayOf(
          PropTypes.string.isRequired,
        ).isRequired,
      ).isRequired,
    }).isRequired,
  }).isRequired,
};
