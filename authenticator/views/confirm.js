import React from 'react';
import { Text, TextInput, View } from 'react-native';
import IconButton from '../components/icon-button';
import SaveIcon from '../assets/navigation_icons/save.png';

// This is where the logic would go for taking the information object and storing it
function save(information) {
  console.log(information);
}

export default function Confirm(props) {
  const information = props.route.params;

  return (
    <View style={{ padding: 10 }}>
      <Text>Application Name</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Application Name"
        onChangeText={(text) => information.issuer = (text)}
        defaultValue={information.issuer}
      />
      <Text>Username</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Usename"
        onChangeText={(text) => information.account = (text)}
        defaultValue={information.account}
      />
      <View style ={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <IconButton 
          onPress={ () => {
          save(information);
          props.navigation.navigate('application-list', props); 
        }}
        img={SaveIcon}
      />
      </View>
    </View>
  );
}
