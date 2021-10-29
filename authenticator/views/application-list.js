import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ApplicationListItem from "../components/application-list-item"

let example_data =
    [
        '000000',
        '000001',
        
    ];

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