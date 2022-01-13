import React from 'react';
import { TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import SvgButton from '../components/svg-button';
import { SaveSvg } from '../components/svgs';
import Text from '../components/styled-text';

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
        onChangeText={(text) => { information.issuer = (text); }}
        defaultValue={information.issuer}
      />
      <Text>Username</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Usename"
        onChangeText={(text) => { information.account = (text); }}
        defaultValue={information.account}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <SvgButton 
          onPress={() => {
            save(information);
            props.navigation.navigate('application-list', props); 
          }}
          svg={SaveSvg()}
        />
      </View>
    </View>
  );
}

Confirm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: {
    params: {
      issuer: PropTypes.string.isRequired,
      account: PropTypes.string.isRequired,
    },
  },
};

Confirm.defaultProps = {
  route:{
    params: {
      issuer: '',
      account: '',
    },
  },
};