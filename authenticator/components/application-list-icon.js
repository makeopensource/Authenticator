import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default function ApplicationListIcon(props) {
    const styles = StyleSheet.create({
        logo: {
            width: props.width,
            height: props.height,
        },
    });

    let url = {
        uri: props.uri
    };

    return (
        <View>
            <Image style={styles.logo} source={ url } />
        </View>
    );
}

