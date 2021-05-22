# Pokedex
## Pokedex com 493 Pokemons 
* JavaScriprt Ajax
* api pokemon
* Jquery para efeitos e botões 

  [API DADOS POKÉMONs LINk](https://pokeapi.co/api/v2/pokemon/)
  [API IMAGENS POKÉMONs LINk](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png")

## Code Requisição Ajax
![Image of Yaktocat](https://github.com/Guilherme-alexander/Pokedex/blob/main/Captura%20da%20Web_21-5-2021_8251_.jpeg)
```javascript
const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

//4 geração pokemon final=>493
const generatePokemonPromises = () => Array(493).fill().map((_, index) =>
	fetch(getPokemonUrl(index + 1)).then(response => response.json()))
		
	const fetchPokemon = () =>{

	const pokemonPomises = generatePokemonPromises()

	Promise.all(pokemonPomises)
	.then(pokemons => {
		// console.log(pokemons) debug

		const lisPokemons = pokemons.reduce((accumulator,pokemon) => {
			const types = pokemon.types.map(typeInfo => typeInfo.type.name)

			accumulator += `
				<li class="card ${types[0]}" tipos2="${types[1]}">
				<img class="card-imagens ${types[0]}" alt="${pokemon.name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" />
				  <h2 class="card-title ${types[0]}">${pokemon.id}. ${pokemon.name}</h2>
				  <p class="card-subtitle ${types[0]}">${types.join(' / ')}</p>
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
```
* Nome
* Tipagem
* Imagens

## Code Cards 
* jquery
* click no card função seleciona todos tido que forem da mesmo fire, aqua trocando a cor de fundo do card

```Jquery 
//Jquery
//type fire
        $('.container').on('click','.card.fire',function(){
            $('.card.fire').css('background','#fd7d24')
            $('.card-title.fire').css('color','white')
            $('.card-subtitle.fire').css('color','white')
        });
```
## code botão Reset e API
* botão API dispara um alert mostranso os Links da API
* botão reset reseta lista
```Jquery
//home
        $('.menu').on('click',function(){
            alert('API Info-> https://pokeapi.co/api/v2/pokemon/id=pokemon')
            alert('API Imagens-> https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/id=pokemon.png')
        })
        
//buttom reset
        $('.reset').on('click',function(){
            $('.card').css('display','block')
            $('.card').css('background','white')
            $('.card-title').css('color','black')
            $('.card-subtitle').css('color','black')
        })
```
## code dos botão
* jquery
* botão função de selecionar todos pokemons que forem do mesmo tipo mostrar apenas do tipo selecionados 
```
 //fire
        $('#btn1').on('click',function(){
            $('.card.fire').css('background','#fd7d24')
            $('.card-title.fire').css('color','white')
            $('.card-subtitle.fire').css('color','white')
            $('.card').css('display','none')
            $('.card.fire').css('display','block') 
        })

```
![Image of Yaktocat](https://github.com/Guilherme-alexander/Pokedex/blob/main/Captura%20da%20Web_21-5-2021_8317_.jpeg)

## Designer Responsivo
* display GRids
* FlexBox

![Image of Yaktocat](https://github.com/Guilherme-alexander/Pokedex/blob/main/Captura%20da%20Web_21-5-2021_842_.jpeg)
