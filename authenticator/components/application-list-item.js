import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Pie } from 'react-native-progress';
import PropTypes from 'prop-types';
import ApplicationListIcon from './application-list-icon';
import Text from './styled-text';
import { useSettings } from '../settings-provider';
import * as Clipboard from 'expo-clipboard';
import Toast from 'react-native-toast-message';

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
});

export default function ApplicationListItem({ item, interval }) {
  const width = 75;
  const height = 75;

  const [active, setActive] = useState(true);
  const [progress, setProgress] = useState(0);
  const [settings] = useSettings();
  const settingsStyle = {
    backgroundColor: settings.accentColor,
  };

  const onPress = () => {
    setActive(!active)
    if (active) {
      Clipboard.setString(item.totp)
      Toast.show({
        type: 'success',
        text1: 'Copied',
        text2: 'One time passcode was copied to the clipboard.'
      });
    }
  }

  function updateTimer() {
    const time = new Date().getTime();
    const intervalMs = interval * 1000;
    const updatedProgress = (time % intervalMs) / intervalMs;
    setProgress(updatedProgress);
  }

  useEffect(() => {
    setInterval(updateTimer, 200);
  }, []);

  return (
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
  );
}

ApplicationListItem.propTypes = {
  item: PropTypes.shape({
    issuer: PropTypes.string.isRequired,
    account: PropTypes.string.isRequired,
    totp: PropTypes.string.isRequired,
    uri: PropTypes.string,
  }).isRequired,
  interval: PropTypes.number.isRequired,
};
