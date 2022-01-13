import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import ApplicationList from './views/application-list';
import Settings from './views/settings';
import New from './views/new';
import Confirm from './views/confirm';
import { SettingsButton, NewButton, HomeButton } from './components/navigation-buttons';
import ColorPickerSetting from './views/color-picker-setting';
import SettingsProvider, { useSettings } from './settings-provider';

const exampleData = [
  {
    name: 'Application',
    username: 'name',
    totp: '000000',
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <SettingsProvider>
        <AppBody />
      </SettingsProvider>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="auto" />
    </View>
  );
}

function AppBody() {
  const [settings] = useSettings();
  const contentStyle = { backgroundColor: settings.primaryColor };
  const headerStyle = { backgroundColor: settings.accentColor };
  const headerTintColor = settings.fontColor;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="application-list"
        screenOptions={{
          headerTitleAlign: 'center',
          contentStyle,
          headerStyle,
          headerTintColor,
        }}
      >
        <Stack.Screen
          name="application-list"
          options={(props) => ({
            title: 'Application List',
            headerLeft: () => NewButton(props),
            headerRight: () => SettingsButton(props),
          })}
        >
          {/* This should be passed through the stack screen component prop in the future */}
          {({ navigation }) => <ApplicationList navigation={navigation} data={exampleData} />}
        </Stack.Screen>
        <Stack.Screen
          name="settings"
          component={Settings}
          options={(props) => ({
            title: 'Settings',
            headerLeft: () => HomeButton(props),
          })}
        />
        <Stack.Screen
          name="color-picker-setting"
          component={ColorPickerSetting}
          options={{ title: 'Settings' }}
        />
        <Stack.Screen
          name="new"
          component={New}
          options={(props) => ({
            title: 'New',
            headerLeft: () => HomeButton(props),
          })}
        />
        <Stack.Screen
          name="confirm"
          component={Confirm}
          options={(props) => ({
            title: 'Confirm',
            headerLeft: () => HomeButton(props),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
