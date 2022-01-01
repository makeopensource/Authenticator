import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import ApplicationList from './views/application-list';
import Settings from './views/settings';
import New from './views/new';
import IconButton from './components/icon-button';
import HomeIcon from './assets/navigation_icons/home.png';
import SettingsIcon from './assets/navigation_icons/settings.png';
import PlusIcon from './assets/navigation_icons/plus-circle.png';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='application-list' screenOptions={{headerTitleAlign: 'center'}}>
            <Stack.Screen name='application-list'
              options={props => ({
                title: 'Application List',
                headerRight: () => <IconButton onPress={() => props.navigation.navigate('new')} img={PlusIcon} />,
                headerLeft: () => <IconButton onPress={() => props.navigation.navigate('settings')} img={SettingsIcon} />
              })}
            >
              {/* This should be passed through the stack screen component prop in the future */}
              {props => <ApplicationList {...props} data={example_data} />}
            </Stack.Screen>
            <Stack.Screen name='settings' component={Settings}
              options={props => ({
                title: 'Settings',
                headerLeft: () => <IconButton onPress={() => props.navigation.navigate('application-list')} img={HomeIcon} />
              })}
            />
            <Stack.Screen name='new' component={New}
              options={props => ({
                title: 'New',
                headerLeft: () => <IconButton onPress={() => props.navigation.navigate('application-list')} img={HomeIcon} />
              })}
            />
        </Stack.Navigator>
      </NavigationContainer>
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
