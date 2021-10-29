import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ApplicationListTOTP( id ) {
    return(
        <View>
            <Text style={styles.totpText}>000000</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    totpText: {
      fontSize: 30
    },
  });