import axios from 'axios'
import { useEffect, useState } from 'react'

const TripDetailsPage = (id) => {
	const [listaDetalhes, setListaDetalhes] = useState()
	useEffect(() => {
		axios
			.get(
				`https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/${id}`
			)
			.then((res) => {
				console.log(res)
				setListaDetalhes(res.data.trips)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])
	return (
		<div>
			<h1>{listaDetalhes.name}</h1>
			<p>Nome:{listaDetalhes.name}</p>
			<p>Descrição:{listaDetalhes.description}</p>
			<p>Planeta:{listaDetalhes.planet}</p>
			<p>Duração{listaDetalhes.durationInDays}</p>
			<p>Data:{listaDetalhes.date}</p>
			<button>Votar</button>
		</div>
	)
}
export default TripDetailsPage
