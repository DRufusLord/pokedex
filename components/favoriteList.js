import React from 'react';
import { Image, TouchableOpacity, Button, StyleSheet, Text, View } from 'react-native';

export default function FavoriteList({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Favorite Pokemon List</Text>
    </View>
  )
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