import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Pokemon() {
  return (
    <View style={styles.container}>
      <Text>Pokemon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
