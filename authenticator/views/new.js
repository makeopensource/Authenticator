import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';


export default function New(props) {

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [mostRecentScan, setMostRecentScan] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);

    // Prevent multiple, unintended scans of the same QR code
    if (mostRecentScan == data) {
      setScanned(false);
      return;
    }
    setMostRecentScan(data);

    const decoded = decodeURI(data);

    // check the uri scheme
    if (decoded.slice(0, 8) != "otpauth:") {
      alert("Not a vaild 2FA code.");
      setScanned(false);
      return;
    }

    const information = {};

    information.type = decoded.slice(10, 14);
    information.issuer = decoded.match("\/[^\/]*:")[0].slice(1, -1);
    information.account = decoded.match(":[^:]*[?]")[0].slice(1, -1);

    const querryParams = decoded.match("[?].*")[0].slice(1).split("&");
    for (let cur of querryParams) {
      let keyVal = cur.split("=");
      information[keyVal[0]] = keyVal[1];
    }

    props.navigation.navigate('confirm', information);

  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
