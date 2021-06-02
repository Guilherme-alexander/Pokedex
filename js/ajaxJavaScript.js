const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

//4 geração pokemon final=>493
const generatePokemonPromises = () => Array(493).fill().map((_, index) =>
	fetch(getPokemonUrl(index + 1)).then(response => response.json()))
		
	const fetchPokemon = () =>{

	const pokemonPomises = generatePokemonPromises()

	Promise.all(pokemonPomises)
	.then(pokemons => {
		console.log(pokemons)

		const lisPokemons = pokemons.reduce((accumulator,pokemon) => {
			const types = pokemon.types.map(typeInfo => typeInfo.type.name)
			const move = pokemon.moves.map(typeInfo => typeInfo.move.name)

			accumulator += `
				<li class="card ${types[0]}" tipos2="${types[1]}">
				<img class="card-imagens ${types[0]}" alt="${pokemon.name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" />
				  <h2 class="card-title ${types[0]}">${pokemon.id}. ${pokemon.name}</h2>
				  <p class="card-subtitle ${types[0]}">${types.join(' / ')}</p>
				  <p class="card-move ${types[0]}">${move[0]}</p>
				</li>
			` 
			return accumulator
		}, '')

		const ul = document.querySelector('[data-js="pokedex"]')
		ul.innerHTML = lisPokemons
		// console.log(lisPokemons) debug
	})
}

fetchPokemon()
