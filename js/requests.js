const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

const pokemons = []
const totalPodemonsId = 800
const chunks = 20
let activeFilter = ''
let activeSearch  = ''

/* ── Fetch ── */
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

/* ── Render ── */
function highlight(text, query) {
  if (!query) return text
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return text.replace(new RegExp(`(${escaped})`, 'gi'),
    '<mark class="search-highlight">$1</mark>')
}

function createPokemonCard(pokemon, query = '') {
  const types = pokemon.types.map(item => item.type.name)
  const idStr  = String(pokemon.id).padStart(3, '0')
  const name   = pokemon.name
  return `
    <li data-id="${pokemon.id}" class="card ${types.join(' ')}">
      <img src="${pokemon.sprites.front_default}" class="card-imagens" alt="${name}" loading="lazy"/>
      <span class="card-id">#${highlight(idStr, query.replace('#',''))}</span>
      <h2 class="card-title">${highlight(name, query)}</h2>
      <p class="card-subtitle">${types.join(' / ')}</p>
      <button class="info" onclick="registerEvents(${pokemon.id})">ver detalhes</button>
    </li>`
}

function applyFilters(list) {
  let result = list

  // Type filter
  if (activeFilter) {
    result = result.filter(p => p.types.some(t => t.type.name === activeFilter))
  }

  // Search filter — match name or id (#003 or 3)
  const q = activeSearch.trim().toLowerCase()
  if (q) {
    const numQ = q.replace('#', '')
    result = result.filter(p => {
      const nameMatch = p.name.toLowerCase().includes(q)
      const idMatch   = String(p.id) === numQ || String(p.id).padStart(3,'0') === numQ
      return nameMatch || idMatch
    })
  }

  return result
}

function renderFiltered() {
  const ul     = document.querySelector('[data-js="pokedex"]')
  const status = document.getElementById('search-status')
  const q      = activeSearch.trim().toLowerCase().replace('#','')

  const filtered = applyFilters(pokemons)

  if (filtered.length === 0 && (activeFilter || activeSearch)) {
    ul.innerHTML = `
      <li class="no-results-msg">
        <strong>Nenhum resultado</strong>
        Tente outro nome, número ou tipo.
      </li>`
    if (status) {
      status.textContent = 'Nenhum Pokémon encontrado'
      status.className = 'search-status no-results'
    }
    return
  }

  ul.innerHTML = filtered.map(p => createPokemonCard(p, activeSearch.trim())).join('')

  // Update status
  if (status) {
    if (activeSearch || activeFilter) {
      status.textContent = `${filtered.length} Pokémon encontrado${filtered.length !== 1 ? 's' : ''}`
      status.className = 'search-status has-results'
    } else {
      status.textContent = ''
      status.className = 'search-status'
    }
  }
}

/* ── Public controls ── */
function filterType(type) {
  activeFilter = type
  renderFiltered()
}

function handleSearch(value) {
  activeSearch = value
  const clearBtn = document.getElementById('search-clear')
  if (clearBtn) clearBtn.classList.toggle('visible', value.length > 0)
  renderFiltered()
}

function clearSearch() {
  activeSearch = ''
  const input   = document.getElementById('search-input')
  const clearBtn = document.getElementById('search-clear')
  if (input)    { input.value = ''; input.focus() }
  if (clearBtn) clearBtn.classList.remove('visible')
  renderFiltered()
}

function registerEvents(id) {
  location.href = `pokemon.html?id=${id}`
}

/* ── Keyboard shortcut: "/" focuses the search ── */
document.addEventListener('keydown', e => {
  if (e.key === '/' && document.activeElement.id !== 'search-input') {
    e.preventDefault()
    document.getElementById('search-input')?.focus()
  }
  if (e.key === 'Escape') {
    const input = document.getElementById('search-input')
    if (document.activeElement === input) { input.blur(); clearSearch() }
  }
})

async function main() {
  await fetchPokemon()
}

main()