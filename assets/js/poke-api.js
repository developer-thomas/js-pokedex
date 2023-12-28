const pokeApi = {};

pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url).then((response) => response.json());
};

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  return fetch(url)
    .then((response) => response.json())
    .then((resJson) => resJson.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((pokeDetailRequest) => Promise.all(pokeDetailRequest))
    .then((pokemonDetail) => pokemonDetail);
};
