function convertPokemonTypeToLi(pokemonTypes) {
  return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`);
}

function convertPokemonToLi(pokemon) {
  return `
      <li class="pokemon">
          <span class="number">#${pokemon.order}</span>
          <span class="name">${pokemon.name}</span>

          <div class="detail">
              <ol class="types">
                 ${convertPokemonToLi(pokemon.types).join("")}
              </ol>

              
          </div>
      </li>
  `;
}

const pokemonList = document.getElementById("pokemonList");

pokeApi.getPokemons().then((pokemons = []) => {
  newHtml = pokemons.map(convertPokemonToLi).join("");
  pokemonList.innerHTML = newHtml;
});
