import React from 'react';
import { View, Text } from 'react-native';

export default function DetailsScreen({ route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, marginBottom: 10 }}>
        📄 Écran de détails
      </Text>

      {route.params && (
        <Text style={{ fontSize: 18 }}>
          ID reçu : {route.params.id}
        </Text>
      )}
    </View>
  );
}
