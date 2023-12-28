const id = 0;
function convertPokemonToLi(pokemon) {
  return `
      <li class="pokemon ${pokemon.type}">
          <span class="number">#${pokemon.number}</span>
          <span class="name">${pokemon.name}</span>

          <div class="detail">
              <ol class="types">
                 
              </ol>

              
          </div>
      </li>
  `;
}

const pokemonList = document.getElementById("pokemonList");
pokeApi.getPokemons().then((pokemons = []) => {
  const listItems = pokemons.map((value) => {
    return convertPokemonToLi(value);
  });

  console.log(listItems.join(""));
});
