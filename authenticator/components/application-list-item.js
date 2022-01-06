import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import ApplicationListIcon from './application-list-icon';

export default function ApplicationListItem({ item }) {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 10,
      height: 100,
    },
    nameText: {
      fontSize: 20,
    },
    usernameText: {
      fontStyle: 'italic',
    },
  });

  const width = 75;
  const height = 75;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.usernameText}>{item.username}</Text>
        <Text style={styles.totpText}>{item.totp}</Text>
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
