import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import ColorPicker from 'react-native-wheel-color-picker';
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
  settingsButtonContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  settingsButtonText: {
    fontSize: 16,
    padding: 8,
  },
  colorButton: {
    display: 'flex',
    flexDirection: 'column',
  },
  colorPicker: {
    position: 'relative',
    marginBottom: 5,
  },
  carrot: {
    fontSize: 20,
    padding: 6,
    color: '#2e2e2e',
  },
});

function SettingsHeader({ title }) {
  return (
    <Text style={styles.settingsHeader}>
      {title}
    </Text>
  );
}

function SettingsButton({ title, onPress, children }) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor="lightgray" style={styles.settingsButton}>
      <View style={styles.settingsButtonContent}>
        <Text style={styles.settingsButtonText}>{title}</Text>
        {children}
      </View>
    </TouchableHighlight>
  );
}

function Carrot({ rotation }) {
  return (
    <Text style={[styles.carrot, { transform: [{ rotate: `${rotation}deg` }] }]}>v</Text>
  );
}

function SettingsColorButton({ title, color, setColor }) {
  const [pickerVisible, setPickerVisible] = useState(false);

  function togglePicker() {
    setPickerVisible(!pickerVisible);
  }

  return (
    <View style={styles.colorButton}>
      <SettingsButton title={title} onPress={() => togglePicker()}>
        <Carrot rotation={pickerVisible ? 0 : -90} />
      </SettingsButton>
      <View style={styles.colorPicker}>
        {pickerVisible
          ? <ColorPicker color={color} swatches={false} onColorChangeComplete={setColor} />
          : <View />}
      </View>
    </View>
  );
}

export default function Settings() {
  const [fontColor, setFontColor] = useState('#000000');
  const [primaryColor, setPrimaryColor] = useState('#f2f2f2');
  const [accentColor, setAccentColor] = useState('#ffffff');

  return (
    <ScrollView style={styles.settings}>
      <SettingsHeader title="Accessibility" />
      <SettingsButton title="Font" onPress={() => console.log('Font')} />
      <SettingsButton title="Font Size" onPress={() => console.log('Font Size')} />
      <SettingsColorButton title="Font Color" color={fontColor} setColor={setFontColor} />
      <SettingsHeader title="Customization" />
      <SettingsColorButton title="Primary Color" color={primaryColor} setColor={setPrimaryColor} />
      <SettingsColorButton title="Accent Color" color={accentColor} setColor={setAccentColor} />
      <SettingsHeader title="Information" />
      <SettingsButton title="User Guide" onPress={() => console.log('User Guide')} />
      <SettingsButton title="Privacy Policy" onPress={() => console.log('Privacy Policy')} />
    </ScrollView>
  );
}

SettingsHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

SettingsButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

SettingsButton.defaultProps = {
  children: null,
};

Carrot.propTypes = {
  rotation: PropTypes.number.isRequired,
};

SettingsColorButton.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  setColor: PropTypes.func.isRequired,
};
