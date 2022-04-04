import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import ApplicationListIcon from './application-list-icon';
import Text from './styled-text';
import { useSettings } from '../settings-provider';
import * as Clipboard from 'expo-clipboard';
import Toast from 'react-native-toast-message';


export default function ApplicationListItem({ item }) {
  const [active, setActive] = useState(true)

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
    totpTextActive: {
      fontSize: 30,
    },
    totpText: {
      fontSize: 18,
    }
  });

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

  const width = 75;
  const height = 75;

  const [settings] = useSettings();
  const settingsStyle = {
    backgroundColor: settings.accentColor,
  };

  return (
    <View style={[settingsStyle, styles.container]} onTouchEnd={onPress}>
      <View>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.usernameText}>{item.username}</Text>
        <Text style={active ? styles.totpText : styles.totpTextActive}>{item.totp}</Text>
      </View>
      <ApplicationListIcon width={width} height={height} uri={item.uri} />
    </View>
  );
}

ApplicationListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    totp: PropTypes.string.isRequired,
    uri: PropTypes.string.isRequired,
  }).isRequired,
};
