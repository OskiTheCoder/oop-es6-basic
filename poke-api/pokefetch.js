import { Pokemon } from './pokemon.js';

export class PokeFetch {
  constructor() {
    this.fetchedPokemon = [];
  }

  // TODO -> add better error handling/catching
  async fetchRandomPokemon() {
    try {
      const randomInt = Math.floor(Math.random() * 151);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomInt}/`
      );
      console.log(response.ok);
      const pokemon = await response.json();
      return pokemon;
    } catch (err) {
      console.error(err);
    }
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
