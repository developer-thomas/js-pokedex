const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");
let offset = 0;
const limit = 5;

function convertPokemonTypeToLi(pokemonTypes) {
  return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`);
}

function convertPokemonToLi(pokemon) {
  return `
      <li class="pokemon ${pokemon.type}" >
          <span class="number">#${pokemon.number}</span>
          <span class="name">${pokemon.name}</span>

          <div class="detail">
              <ol class="types">
              ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join("")}
              </ol>
          <img src="${pokemon.photo}" alt="${pokemon.name}"
              
          </div>
      </li>
  `;
}

function loadMorePokemons(offset, limit) {
  pokeApi.getPokemons().then((pokemons = []) => {
    newHtml = pokemons.map(convertPokemonToLi).join("");
    pokemonList.innerHTML += newHtml;
  });
}

loadMorePokemons(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit;
  loadMorePokemons();
});
