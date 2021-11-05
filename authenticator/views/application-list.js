import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ApplicationListItem from "../components/application-list-item"

export default function ApplicationList(props) {
    return (
        <View>
            <FlatList
                data={props.data}
                renderItem={ApplicationListItem}
            />
        </View>

    );
}

