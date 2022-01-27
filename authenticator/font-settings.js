import { Platform } from 'react-native';

// key = dropdown value
// value = dropdown label

const fontScales = {
  1: '1.00x',
  1.25: '1.25x',
  1.5: '1.50x',
};

const iosFonts = {
  Arial: 'Arial',
  Verdana: 'Verdana',
  'Times New Roman': 'Times New Roman',
};
const iosDefault = 'Verdana';

const androidFonts = {
  serif: 'Serif',
  'sans-serif': 'Sans Serif',
  monospace: 'Monospace',
};
const androidDefault = 'sans-serif';

const webFonts = {
  'sans-serif': 'Sans Serif',
  serif: 'Serif',
  monospace: 'Monospace',
  fantasy: 'Fantasy',
  cursive: 'Cursive',
};
const webDefault = 'sans-serif';

// Converts objects mapping dropdown values to labels into a list of items
// An item is an object containing a value and a label (used directly by dropdown)
// Ex. toItems(webFonts) ->
//  [{value: 'sans-serif', label: 'Sans Serif'}, {value: serif, label: 'Serif'}, ...]
function toItems(obj) {
  return Object.entries(obj).map(([value, label]) => ({ value, label }));
}

function getFontScales() {
  return toItems(fontScales);
}

function getFontItems() {
  if (Platform.OS === 'ios') return toItems(iosFonts);
  if (Platform.OS === 'android') return toItems(androidFonts);
  return toItems(webFonts);
}

function getDefaultFont() {
  if (Platform.OS === 'ios') return iosDefault;
  if (Platform.OS === 'android') return androidDefault;
  return webDefault;
}

export {
  getFontScales,
  getFontItems,
  getDefaultFont,
};
