import { PokeFetch } from './pokefetch.js';

const pokeFetch = new PokeFetch();
const pokeContainer = document.querySelector('.poke-container');
const getNewPokemonBtn = document.getElementById('btn');

//display pokemon
const displayPokemon = (pokemon) => {
  //create elements
  const cardDiv = document.createElement('div');
  const nameElement = document.createElement('h2');
  const detailsContainer = document.createElement('div');
  const experienceSpan = document.createElement('span');
  const heightSpan = document.createElement('span');
  //add classes
  cardDiv.classList.add('card');
  nameElement.classList.add('card__name');
  detailsContainer.classList.add('card__details');
  detailsContainer.classList.add('details');
  experienceSpan.classList.add('details__experience');
  heightSpan.classList.add('details__height');
  //append to dom
  pokeContainer.appendChild(cardDiv);
  cardDiv.appendChild(nameElement);
  cardDiv.appendChild(detailsContainer);
  detailsContainer.appendChild(experienceSpan);
  detailsContainer.appendChild(heightSpan);
  //add content
  nameElement.appendChild(document.createTextNode(pokemon.name));
  experienceSpan.appendChild(
    document.createTextNode(`Experience: ${pokemon.experience}`)
  );
  heightSpan.appendChild(document.createTextNode(`Height: ${pokemon.height}`));
};

getNewPokemonBtn.addEventListener('click', () => {
  pokeFetch.getPokemon().then((pokemon) => displayPokemon(pokemon));
});

// pokeFetch.getPokemon().then((pokemon) => {
//   displayPokemon(pokemon);
// });
