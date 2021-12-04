import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Pokemon from './components/Pokemon';
import PokemonList from './components/PokemonList';
import FavoriteList from './components/favoriteList';
import About from './components/about';
import { createDrawerNavigator } from '@react-navigation/drawer';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainStackNavigator = () => {
  return (
        <Stack.Navigator initialRouteName="PokeDex">
          <Stack.Screen name="PokeDex" component={PokemonList} />
          <Stack.Screen name="Detail" component={Pokemon} />
        </Stack.Navigator>
  )
}

const SecondStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="FavoriteList">
      <Stack.Screen name="FavoriteList" component={FavoriteList} />
      <Stack.Screen name="Detail" component={Pokemon} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Stack.Screen name="pokemonList" component={MainStackNavigator} />
          <Stack.Screen name="favoriteList" component={SecondStackNavigator} />
          <Stack.Screen name="about" component={About} />
        </Drawer.Navigator>
      </NavigationContainer>

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
