import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pokemon from '../components/Pokemon';
import PokemonList from '../components/PokemonList';

const screens = {
  Default: {
    screen: PokemonList
  },
  PokemonDetail: {
    screen: Pokemon
  }
}

const MainStack = createNativeStackNavigator();

