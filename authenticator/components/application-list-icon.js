import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import PropTypes from 'prop-types';

export default function ApplicationListIcon({ width, height, uri }) {
  const styles = StyleSheet.create({
    logo: { width, height },
  });

  const url = { uri };

  return (
    <View>
      <Image style={styles.logo} source={url} />
    </View>
  );
}

ApplicationListIcon.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  uri: PropTypes.string.isRequired,
};
