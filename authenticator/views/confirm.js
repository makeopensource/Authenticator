import React from 'react';
import { View, Text } from 'react-native';

export default function Confirm(props) {
  console.log(props.route.params);

  return (
    <View>
      <Text>Placeholder confirm screen</Text>
    </View>
  );
}
