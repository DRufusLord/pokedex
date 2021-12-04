import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, TextInput, Image, ScrollView, Button, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import PokemonItem from './PokemonItem';
export default function PokemonList({ navigation }) {

  const [pokemons, setPokemons] = useState(null);
  const [change, setChange] = useState(false);
  const [input, setInput] = useState();
  const [search, setSearch] = useState(false);

  useEffect(() => {

    axios.get('http://localhost:7821/pokelist')
    .then(res => {
      setPokemons(res.data);
      console.log(res.data.length+' entries saved');
    })
    .catch(err => {
      throw err;
    })

  },[change]);

  if(pokemons === null ) {
    return null;
  };

  return (
    <View style={styles.container}>
      {search
      ? <View style={styles.writeWrapper}>
          <TextInput
            style={styles.input}
            placeholder={'looking for Pikachu?'}
            value={input}
            onChangeText={ text=> setInput(text)}
          />
          <View style={styles.buttonWrapper}>
            <Button style={styles.button} title='search' onPress={()=>setSearch(false)}/>
          </View>
        </View>
      :<View style={styles.buttonWrapper}>
        <Button style={styles.button} title='filter' onPress={()=>setSearch(true)}/>
      </View>}

      <View style={styles.itemWrapper}>
        <ScrollView style={styles.items}>
          {pokemons.map((item, index)=> {
            return <PokemonItem
            key={item.pokemon_id}
            name={item.name}
            picture={item.front}
            favorite={item.favorite}
            navigate={() => navigation.navigate('Detail', item)}/>
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },

  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight:'bold'
  },

  items: {
    marginTop: 30,
    overflow:'hidden'
  },

  writeWrapper: {
    flexDirection: 'column',
    height: 100,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },

  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 60,
    borderColor: '#f50',
    borderWidth: 1,
  },

  buttonWrapper: {
    marginTop: 10,
    width: 100,
    backgroundColor: 'white',
    borderRadius: 60,
    borderColor: '#f50',
    borderWidth: 1,
  }

});
