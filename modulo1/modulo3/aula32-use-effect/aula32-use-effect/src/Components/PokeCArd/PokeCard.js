import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

const PokeCard = (props) => {
	const [pokemon, setPokemon] = useState({})

	useEffect(() => {
		pegarPokemon(props.pokemon)
	}, [props.pokemon])

	const pegarPokemon = (pokename) => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${props.pokemon}`)
			.then((response) => {
				setPokemon(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
	}
	// const pokemons = pokemon
	return (
		<div>
			<p>{pokemon.name}</p>
			<p>{pokemon.weight}</p>
			{pokemon.types && <p>{pokemon.types[0].type.name}</p>}
			{pokemon.sprites && (
				<img src={pokemon.sprites.front_default} alt={pokemon.name} />
			)}
		</div>
	)
}
export default PokeCard
