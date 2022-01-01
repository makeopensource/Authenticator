import React from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';


export default function IconButton(props) {
  const { onPress, img, style } = props;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Image source={img} style={[{height: 25, width: 25, margin: 10}, style]} />
    </TouchableWithoutFeedback>
  );
}
