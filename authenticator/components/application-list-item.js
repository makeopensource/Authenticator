import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import ApplicationListIcon from './application-list-icon';
import Text from './styled-text';
import { useSettings } from '../settings-provider';

export default function ApplicationListItem({ item }) {
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
  });

  const width = 75;
  const height = 75;

  const [settings] = useSettings();
  const settingsStyle = {
    backgroundColor: settings.accentColor,
  };

  return (
    <View style={[settingsStyle, styles.container]}>
      <View>
        <Text style={styles.nameText}>{item.issuer}</Text>
        <Text style={styles.usernameText}>{item.account}</Text>
        <Text style={styles.totpText}>{item.totp}</Text>
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
};
