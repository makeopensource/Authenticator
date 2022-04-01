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
      <Text style={styles.header}>MIT License</Text>
      <Text style={styles.header}>Copyright (c) 2022 MakeOpenSource</Text>
      <Text style={styles.body}>
        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      </Text>
      <Text style={styles.body}>
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      </Text>
      <Text style={styles.body}>
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      </Text>
    </ScrollView>
  );
}
