import React, { useState, useEffect } from 'react';
import { TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import SvgButton from '../components/svg-button';
import { SaveSvg } from '../components/svgs';
import Text from '../components/styled-text';
import { update, get } from '../token-storage';

// This is where the logic would go for taking the information object and storing it
async function save(information, key) {
  await update(key, information);
}

export default function Confirm(props) {
  const { route } = props
  const { key } = route.params;

  const [information, setInformation] = useState({
    account: '',
    issuer: ''
  })

  useEffect(() => {
    (async () => {
      const i = await get(key);
      setInformation(i);
    })();
  }, []);

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
            const { navigation } = props
            save(information, key).then(() => navigation.navigate('application-list'))
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
  route: PropTypes.shape({
    params: PropTypes.shape({
      key: PropTypes.string.isRequired,
    }),
  }),
};

Confirm.defaultProps = {
  route:{
    params: {
      key: '',
    },
  },
};