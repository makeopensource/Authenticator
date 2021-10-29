import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ApplicationListIcon from './application-list-icon';
import ApplicationListTOTP from './application-list-totp';

export default function ApplicationListItem(id) {
    id = id.item

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.nameText}>{demoDataStore[id].name}</Text>
                <Text style={styles.usernameText}>{demoDataStore[id].username}</Text>
                <ApplicationListTOTP></ApplicationListTOTP>
            </View>
            <ApplicationListIcon></ApplicationListIcon>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '10px',
        height: '100px',
    },
    nameText: {
        fontSize:20
    },
    usernameText:{
        fontStyle: 'italic'
    }
});

let demoDataStore = {
    '000000': {
        name: 'Application 1',
        username: 'imauser',
        iconSrc: '',
        totp: '000000'
    },
    '000001': {
        name: 'App 2',
        username: 'imanotheruser',
        iconSrc: '',
        totp: '111111'
    }
}