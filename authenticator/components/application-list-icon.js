import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default function ApplicationListIcon( id ) {
    return(
        <View>
            <Image style={styles.logo} source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
      width: 75,
      height: 75,
    },
  });