const pokeApi = {};

// Essa função instancia nossa classe pokemon e atribui propriedades a ela
// De acordo com as chaves inseridas dentro dela
// Não sendo mais necessário lidar com todas as informações oriundas da api
// Apenas aquelas que desejamos trabalhar com
function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon();
  pokemon.number = pokeDetail.order;
  pokemon.name = pokeDetail.name;

  const types = (pokemon.types = pokeDetail.types.map((typeSlot) => typeSlot.type.name));
  const [type] = types;

  pokemon.types = types;
  pokemon.type = type;

  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

  return pokemon;
}
pokeApi.getPokemonDetail = (pokemon) => {
  return (
    fetch(pokemon.url)
      .then((response) => response.json())
      // Mesma coisa do método map, fica sub-entendido para o then, que a função de call back recebe os mesmos parâmetros
      // .then((pokemon) => convertPokeApiDetailToPokemon(pokemon));
      .then(convertPokeApiDetailToPokemon)
  );
};

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  return (
    fetch(url)
      .then((response) => response.json())
      .then((resJson) => resJson.results)
      .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
      //.then((pokemons) => pokemons.map((pokemon) => pokeApi.getPokemonDetail(pokemon)))
      .then((pokeDetailRequest) => Promise.all(pokeDetailRequest))
      .then((pokemonDetail) => pokemonDetail)
  );
};
