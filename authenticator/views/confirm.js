import React from 'react';
import { View } from 'react-native';
import Text from '../components/styled-text';

export default function Confirm(props) {
  console.log(props.route.params);

  return (
    <View>
      <Text>Placeholder confirm screen</Text>
    </View>
  );
}
