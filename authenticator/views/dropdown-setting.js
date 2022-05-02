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
});

export default function DropdownSetting({ route }) {
  const { key, title, items } = route.params;
  const [settings, updateSettings] = useSettings();
  const setting = settings[key];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Picker
        selectedValue={setting}
        onValueChange={(value) => updateSettings({ [key]: value })}
      >
        {items.map(({ label, value }) => <Picker.Item label={label} value={value} key={value} />)}
      </Picker>
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
