import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ApplicationList from './views/application-list';



export default function App() {
  return (
    <View style={styles.container}>
      <ApplicationList data={example_data}></ApplicationList>
      <StatusBar style="auto" />
    </View>
  );
}

let example_data = [
    {
        name:'Application',
        username: 'name',
        totp: '000000',
        uri: 'https://reactnative.dev/img/tiny_logo.png'
    }
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
