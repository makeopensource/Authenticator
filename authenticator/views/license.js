import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Text from '../components/styled-text';

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
  },
  header: {
    margin: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  body: {
    margin: 20,
  },
  item: {
    marginHorizontal: 40,
    marginVertical: 10,
  },
});

export default function License() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>BSD 3 Clause License</Text>
      <Text style={styles.header}>Copyright (c) 2022, MakeOpenSource All rights reserved.</Text>
      <Text style={styles.body}>
        Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      </Text>
      <Text style={styles.item}>1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.</Text>
      <Text style={styles.item}>2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.</Text>
      <Text style={styles.item}>3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.</Text>
      <Text style={styles.body}>
        THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      </Text>
    </ScrollView>
  );
}
