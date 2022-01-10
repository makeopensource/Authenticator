import React, { useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PropTypes } from 'prop-types';
import ColorPalette from 'react-native-color-palette';
import { SettingsButton } from '../components/navigation-buttons';

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

export default function ColorPickerSetting({ navigation, route }) {
  const { title, currentColor, id } = route.params;
  const [color, setColor] = useState(currentColor);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => SettingsButton({ navigation, params: { color, colorId: id } }),
    });
  }, [navigation, color, id]);

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
        onChange={setColor}
        value={color}
        title=""
        scaleToWindow
      />
    </View>
  );
}

ColorPickerSetting.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    setOptions: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string.isRequired,
      currentColor: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
