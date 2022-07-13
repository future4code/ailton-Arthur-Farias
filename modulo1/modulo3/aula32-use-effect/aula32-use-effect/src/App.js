import './App.css'
import PokeCard from './Components/PokeCArd/PokeCard'
import { useEffect, useState } from 'react'
import axios from 'axios'

const AppPrincipal = (props) => {
	const [pokelist, setPokelist] = useState([])
	const [pokeName, setPokeName] = useState('')

	const changePokemon = (event) => {
		setPokeName(event.target.value)
	}

	useEffect(() => {
		const getPokemon = () => {
			axios
				.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
				.then((response) => {
					// função que está setando no estado os 151 pokemons
					setPokelist(response.data.results)
					console.log(response.data.results)
				})
				.catch((err) => {
					console.log(err)
				})
		}
		getPokemon()
	}, [])
	// console.log(pokelist)
	return (
		<div className='App'>
			<select onChange={changePokemon}>
				<option value={pokelist}>Nenhum</option>
				{pokelist.map((pokemon) => {
					return (
						<option key={pokemon.name} value={pokemon.name}>
							{pokemon.name}
						</option>
					)
				})}
			</select>
			{pokeName && <PokeCard pokemon={pokeName} />}
		</div>
	)
}
export default AppPrincipal
