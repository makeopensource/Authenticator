import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import totp from 'totp-generator';
import ApplicationListItem from '../components/application-list-item';
import Text from '../components/styled-text';

// Simulates function that retrieves application objects from storage
async function getAll() {
  await new Promise((resolve) => { setTimeout(resolve, 2000); });

  return [
    {
      name: 'Application',
      username: 'name',
      totp: '000000',
      uri: 'https://reactnative.dev/img/tiny_logo.png',
    },
  ];
}

function getNewData(apps, period) {
  return apps.map((app) => {
    // const token = totp(app.secret, { period });
    // const updated = { ...app };
    // updated.totp = token;
    const updated = app;
    return updated;
  });
}

export default function ApplicationList() {
  const INTERVAL = 30;
  const [data, setData] = useState(null);

  // Loads data from storage and updates application list
  useEffect(() => {
    const fetchApps = async () => {
      const apps = await getAll();
      setData(apps);
      setTimeout(() => setData(getNewData(data, INTERVAL)), INTERVAL);
    };

    fetchApps();
  }, []);

  // If data is being fetched from storage
  if (!data) {
    return (
      <View style={{ flex: 1, margin: 30 }}>
        <Text style={{ textAlign: 'center' }}>Loading applications...</Text>
      </View>
    );
  }

  // If there are no applications
  if (!data.length) {
    return (
      <View style={{ flex: 1, margin: 30 }}>
        <Text style={{ textAlign: 'center' }}>No applications found.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => <ApplicationListItem item={item} />}
        keyExtractor={(_, i) => i.toString()}
      />
    </View>
  );
}
