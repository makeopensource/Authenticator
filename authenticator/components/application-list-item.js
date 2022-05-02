import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Animated, TouchableOpacity, Alert } from 'react-native';
import { Pie } from 'react-native-progress';
import PropTypes from 'prop-types';
import * as Clipboard from 'expo-clipboard';
import Toast from 'react-native-toast-message';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { useSettings } from '../settings-provider';
import Text from './styled-text';
import ApplicationListIcon from './application-list-icon';
import { remove } from '../token-storage'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    padding: 15,
    borderRadius: 10,
  },
  nameText: {
    fontSize: 18,
  },
  usernameText: {
    fontStyle: 'italic',
  },
  totp: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  totpText: {
    fontSize: 18,
  },
  totpTextActive: {
    fontSize: 30,
  },
  timer: {
    paddingLeft: 10,
  },
  rightAction: {
    backgroundColor: '#dd2c00',
    justifyContent: 'center',
    flex: 1,
  },
  actionText: {
    color: '#fff',
    fontWeight: '600',
    padding: 20,
  },
});

export default function ApplicationListItem({ item, interval, navigation }) {
  const width = 75;
  const height = 75;

  const [active, setActive] = useState(true);
  const [progress, setProgress] = useState(0);
  const [settings] = useSettings();
  const settingsStyle = {
    backgroundColor: settings.accentColor,
  };

  const onPress = () => {
    setActive(!active);
    if (active) {
      Clipboard.setString(item.totp);
      Toast.show({
        type: 'success',
        text1: 'Copied',
        text2: 'One time passcode was copied to the clipboard.',
      });
    }
  };

  function updateTimer() {
    const time = new Date().getTime();
    const intervalMs = interval * 1000;
    const updatedProgress = (time % intervalMs) / intervalMs;
    setProgress(updatedProgress);
  }

  useEffect(() => {
    setInterval(updateTimer, 200);
  }, []);

  const deleteApp = () => {
    remove(item.key).then(() => {
      Toast.show({
        type: 'error',
        text1: 'Deleted Application',
      });
      navigation.replace('application-list')
    }
    )
  };

  const deleteAppAlerts = () => {
    Alert.alert(
      `Do you want to delete ${item.issuer}?`,
      'You will have to add it again',
      [
        {
          text: 'Cancel',
          onPress: () => console.log(),
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => deleteApp(),
          style: 'default',
        },
      ]);
  };

  // Allows the app to be swipable and adds the delete button
  const RightActions = (progress, dragX) => {
    // eslint-disable-next-line react/prop-types,react/destructuring-assignment
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    return (
      <TouchableOpacity onPress={deleteAppAlerts}>
        <View style={styles.rightAction}>
          {/* eslint-disable-next-line max-len */}
          <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>Delete</Animated.Text>
        </View>
      </TouchableOpacity>
    );
  };
  //

  return (
    <Swipeable overshootRight={false} renderRightActions={RightActions}>
      <View style={[settingsStyle, styles.container]} onTouchEnd={onPress}>
        <View>
          <Text style={styles.nameText}>{item.issuer}</Text>
          <Text style={styles.usernameText}>{item.account}</Text>
          <View style={styles.totp}>
            <Text style={active ? styles.totpText : styles.totpTextActive}>{item.totp}</Text>
            <Pie style={styles.timer} progress={progress} size={24} />
          </View>
        </View>
        <ApplicationListIcon
          width={width}
          height={height}
          uri={item.uri ?? 'https://reactnative.dev/img/tiny_logo.png'}
        />
      </View>
    </Swipeable>
  );
}

ApplicationListItem.propTypes = {
  item: PropTypes.shape({
    issuer: PropTypes.string.isRequired,
    account: PropTypes.string.isRequired,
    totp: PropTypes.string.isRequired,
    uri: PropTypes.string,
    key: PropTypes.string,
  }).isRequired,
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
  interval: PropTypes.number.isRequired,
};
