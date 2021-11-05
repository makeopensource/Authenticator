import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ApplicationListIcon from './application-list-icon';


export default function ApplicationListItem(id) {
    id = id.item

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

    let width = 75;
    let height = 75;

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.nameText}>{demoDataStore[id].name}</Text>
                <Text style={styles.usernameText}>{demoDataStore[id].username}</Text>
                <Text style={styles.totpText}>000000</Text>
            </View>
            <ApplicationListIcon width={width} height={height} uri="https://reactnative.dev/img/tiny_logo.png"></ApplicationListIcon>
        </View>
    );
}



// let demoDataStore = {
//     '000000': {
//         name: 'Application 1',
//         username: 'imauser',
//         iconSrc: '',
//         totp: '000000'
//     },
//     '000001': {
//         name: 'App 2',
//         username: 'imanotheruser',
//         iconSrc: '',
//         totp: '111111'
//     }
// }