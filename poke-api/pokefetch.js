import { Pokemon } from './pokemon.js';

export class PokeFetch {
  constructor() {
    this.fetchedPokemon = [];
  }

  // TODO -> add better error handling/catching
  async fetchRandomPokemon() {
    const randomInt = Math.floor(Math.random() * 151);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomInt}/`
    );
    if (!response.ok) {
      throw new Error('Error! Could not get pokemon :(');
    }
    const pokemon = await response.json();
    return pokemon;
  }

  async getPokemon() {
    const pokemon = await this.fetchRandomPokemon();
    const newPokemon = new Pokemon(
      pokemon.name,
      pokemon.base_experience,
      pokemon.height
    );
    this.fetchedPokemon.push(newPokemon);
    return newPokemon;
  }
}
