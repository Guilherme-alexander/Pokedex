const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

const pokemons = []
const totalPodemonsId = 800
const chunks = 20
let activeFilter = ''

async function requestPokemon(id) {
  const response = await fetch(getPokemonUrl(id))
  return response.json()
}

async function requestBatch(start, size) {
  const promises = Array(size).fill().map((_, i) => requestPokemon(start + i))
  return Promise.all(promises)
}

async function fetchPokemon() {
  for (let i = 1; i <= totalPodemonsId; i += chunks) {
    const batch = await requestBatch(i, chunks)
    pokemons.push(...batch)
    renderFiltered()
  }
}

function createPokemonCard(pokemon) {
  const types = pokemon.types.map(item => item.type.name)
  return `
    <li data-id="${pokemon.id}" class="card ${types.join(' ')}">
      <img src="${pokemon.sprites.front_default}" class="card-imagens" alt="${pokemon.name}" loading="lazy"/>
      <span class="card-id">#${String(pokemon.id).padStart(3, '0')}</span>
      <h2 class="card-title">${pokemon.name}</h2>
      <p class="card-subtitle">${types.join(' / ')}</p>
      <button class="info" onclick="registerEvents(${pokemon.id})">ver detalhes</button>
    </li>
  `
}

function renderFiltered() {
  const ul = document.querySelector('[data-js="pokedex"]')
  const filtered = activeFilter
    ? pokemons.filter(p => p.types.some(t => t.type.name === activeFilter))
    : pokemons

  ul.innerHTML = filtered.map(createPokemonCard).join('')
}

function filterType(type) {
  activeFilter = type
  renderFiltered()
}

function registerEvents(id) {
  location.href = `pokemon.html?id=${id}`
}

async function main() {
  await fetchPokemon()
}

main()
