import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ApplicationListItem from "../components/application-list-item"

export default function ApplicationList() {
    return (
        <View>
            <FlatList
                data={example_data}
                renderItem={ApplicationListItem}
            />
        </View>

    );
}

// let example_data = [
//     {
//         name:'Application',
//         username: 'name',
//         totp: '000000',
//         uri: 'https://reactnative.dev/img/tiny_logo.png'
//     }
// ]