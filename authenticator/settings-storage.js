import AsyncStorage from '@react-native-async-storage/async-storage';

async function updateSettingsStorage(newSettings) {
  try {
    const pairs = Object.entries(newSettings);
    await AsyncStorage.multiSet(pairs);
    return true;
  } catch (e) {
    console.log(e);
  }
  return false;
}

async function getSettingsStorage() {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const pairs = await AsyncStorage.multiGet(keys);
    return Object.fromEntries(pairs);
  } catch (e) {
    console.log(e);
  }
  return null;
}

export {
  getSettingsStorage,
  updateSettingsStorage,
};
