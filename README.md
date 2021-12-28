<div align="center">
	
# Pokedex com 493 Pokemons

</div>

<br/>

<div align="center">
	<img height="300" src="https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/04/Pok%C3%A9mon-Logo-PNG-1024x768.png">
</div>

<br/>

>## Requisição Ajax / Consumo de API

* JavaScriprt
  * api <br/>
  
* Jquery
  * efeitos 
  * botões <br/>

<br/>

 >## Código Requisição Ajax Links

 [API DADOS POKÉMONs LINk](https://pokeapi.co/docs/v2)
 
 
 ```https://pokeapi.co/api/v2/pokemon/25```
  
<br/>

 [API IMAGENS POKÉMONs LINk](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png")
 
```https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png```

#

<br/>

## Código Requisição Ajax 
>### JavaScript
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
<br/>
<br/>

## Código / link API / botão Reset 
>### jquery
* botão API dispara um alert mostranso os Links da API
* botão reset reseta lista
```javascript
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

<br/>
<br/>

<div align="center">
	
# Pokedex com 493 Pokemons

</div>

![Image of Yaktocat](https://github.com/Guilherme-alexander/Pokedex/blob/main/Captura%20da%20Web_21-5-2021_8251_.jpeg)

<br/>

## Código para filtrar por tipo 

>### jquery

* click no card função seleciona todos tido que forem da mesmo fire, aqua trocando a cor de fundo do card

```javascript 
//type fire
        $('.container').on('click','.card.fire',function(){
            $('.card.fire').css('background','#fd7d24')
            $('.card-title.fire').css('color','white')
            $('.card-subtitle.fire').css('color','white')
        });
```

<br/>

<div align="center">
	
# Pokedex Apenas Do Tipo Fogo

</div>

![Image of Yaktocat](https://github.com/Guilherme-alexander/Pokedex/blob/main/Captura%20da%20Web_21-5-2021_8317_.jpeg)

<br/>
<br/>

# Responsividade

>### css
* Responsivo
  * Display Grids
  * FlexBox
  
<div align="center">
	<h3>Pokedex Responsiva</h3>
</div>

<div align="center">
	<img width="50%" src="https://github.com/Guilherme-alexander/Pokedex/blob/main/Captura%20da%20Web_21-5-2021_842_.jpeg">
</div>


	
	



