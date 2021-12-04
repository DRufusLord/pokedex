import React from 'react';
import { Image, TouchableOpacity, Button, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

export default function PokemonItem({name, picture, favorite, navigate}) {
  const handleFavorite = () => {

  }
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft} >
          <Image style={styles.itemImg} source={{uri: picture}}/>
        <Text style={styles.itemText}>{name}</Text>
      </View>
      <TouchableOpacity style={styles.iconWrapper} >
        <Icon name='paw' type='font-awesome' color={favorite ? '#66D432' : '#f50'} onPress={navigate}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    borderRadius: 50,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 20,
  },

  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },

  itemImg: {

    width:100,
    height:100,

  },

  itemText: {
    fontSize: 20,
    maxWidth: '80%',
    fontWeight: '600'
  },

});