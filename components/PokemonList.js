import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function PokemonList({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>PokemonList</Text>
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate('Detail')}
      />
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
