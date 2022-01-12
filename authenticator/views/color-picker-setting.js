import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PropTypes } from 'prop-types';
import ColorPalette from 'react-native-color-palette';
import { SettingsContext } from '../settings-provider';

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

export default function ColorPickerSetting({ route }) {
  const { key, title } = route.params;
  const settings = useContext(SettingsContext);
  const color = settings.data[key];

  const colors = [
    '#C0392B', '#E74C3C', '#9B59B6', '#8E44AD', '#2980B9', '#3498DB', '#1ABC9C',
    '#16A085', '#27AE60', '#2ECC71', '#F1C40F', '#F39C12', '#E67E22', '#D35400',
    '#FFFFFF', '#F2F2F2', '#BDC3C7', '#95A5A6', '#7F8C8D', '#34495E', '#000000',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ColorPalette
        colors={colors}
        onChange={(value) => settings.update({ [key]: value })}
        value={color}
        title=""
        scaleToWindow
      />
    </View>
  );
}

ColorPickerSetting.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
