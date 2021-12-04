import React from 'react';
import { Image, Button, StyleSheet, Text, View } from 'react-native';

export default function Pokemon({route, navigation}) {
  const {pokemon_id, name, front, back, type, weight, height, favorite} = route.params;
  return (
    <View style={styles.container}>
      <Text>pokemon_id:{pokemon_id}</Text>
      <Text>name:{name}</Text>
      <Text>type:{type}</Text>
      <Text>weight:{weight}</Text>
      <Text>height:{height}</Text>
      <Text>favorite:{JSON.stringify(favorite)}</Text>
      <Image style={styles.sprite} source={{uri:front}}/>
      <Image style={styles.sprite} source={{uri:back}}/>
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
  sprite: {
    width: 100,
    height: 100
  }
});
