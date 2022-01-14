import { Platform } from 'react-native';

// key = dropdown value
// value = dropdown label

const iosFonts = {
  Arial: 'Arial',
  // Courier: 'Courier',
  // Helvetica: 'Helvetica',
  Verdana: 'Verdana',
  // 'San Francisco': 'San Francisco',
  'Times New Roman': 'Times New Roman',
};
const iosDefault = 'San Francisco';

const androidFonts = {
  normal: 'Normal',
  serif: 'Serif',
  'sans-serif': 'Sans Serif',
  monospace: 'Monospace',
};
const androidDefault = 'Roboto';

const webFonts = {
  'sans-serif': 'Sans Serif',
  serif: 'Serif',
  monospace: 'Monospace',
  fantasy: 'Fantasy',
  cursive: 'Cursive',
};
const webDefault = 'sans-serif';

function getFonts() {
  if (Platform.OS === 'ios') return iosFonts;
  if (Platform.OS === 'android') return androidFonts;
  return webFonts;
}

function getDefaultFont() {
  if (Platform.OS === 'ios') return iosDefault;
  if (Platform.OS === 'android') return androidDefault;
  return webDefault;
}

export {
  getFonts,
  getDefaultFont,
};
