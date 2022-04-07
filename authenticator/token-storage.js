import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

const getKeys = async () => {
  try {
    const value = await AsyncStorage.getItem('tokenKeys');
    if (value !== null) {
      return JSON.parse(value);
    }
    return [];
  } catch (e) {
    console.log(e);
  }
};

const storeKeys = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('tokenKeys', jsonValue);
  } catch (e) {
    console.log(e);
  }
};

const keyExists = async (key) => {
  const tokenKeys = await getKeys();
  return tokenKeys.includes(key);
};

const generateKey = async () => {
  let newKey = '';
  while (newKey === '' || await keyExists(newKey)) {
    newKey = JSON.stringify(Math.floor(Math.random() * 100000000));
  }
  return newKey;
};

const insertNew = async (data) => {
  const key = await generateKey();
  await SecureStore.setItemAsync(key, JSON.stringify(data));
  const keys = await getKeys();
  keys.push(key);
  await storeKeys(keys);
  return key;
};

const update = async (key, data) => {
  await SecureStore.setItemAsync(key, JSON.stringify(data));
};

const get = async (key) => {
  const data = JSON.parse(await SecureStore.getItemAsync(key))
  data.key = key
  return data
}


const getAll = async () => {
  const results = [];
  const keys = await getKeys();
  keys.forEach((key) => {
    results.push(get(key));
  });
  return Promise.all(results);
};

const remove = async (key) => {
  SecureStore.deleteItemAsync(key)
  const keys = await getKeys()
  keys.splice(0, 1, key)
  return keys
};


export {
  insertNew,
  update,
  get,
  getAll,
  remove
};
