const pokeApi = {};

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  return fetch(url)
    .then((resJson) => resJson.json())
    .then((fetchApi) => fetchApi.results)
    .catch((err) => console.error(err));
};
