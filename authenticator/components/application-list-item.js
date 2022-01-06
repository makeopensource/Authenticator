import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ApplicationListIcon from './application-list-icon';


export default function ApplicationListItem(props) {
    props = props.item;

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
                <Text style={styles.nameText}>{props.name}</Text>
                <Text style={styles.usernameText}>{props.username}</Text>
                <Text style={styles.totpText}>{props.totp}</Text>
            </View>
            <ApplicationListIcon width={width} height={height} uri={props.uri}></ApplicationListIcon>
        </View>
    );
}

