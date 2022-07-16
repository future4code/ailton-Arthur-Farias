import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DivPrincipal, DivBotão, CardListas } from './ListTripsPage.styled'
import axios from 'axios'

const ListTripsPage = () => {
	const [listaViagens, setListaViagens] = useState()

	const navigate = useNavigate()

	const goToBack = () => {
		navigate(-1)
	}
	const goToCreateTrip = () => {
		navigate('/Candidatura')
	}
	useEffect(() => {
		axios
			.get(
				'https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips'
			)
			.then((res) => {
				setListaViagens(res.data.trips)
				console.log(res.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])
	const listaMapeada = listaViagens?.map((trips) => {
		return (
			<CardListas key={trips.id}>
				<p>Name: {trips.name}</p>
				<p>Descrição: {trips.description}</p>
				<p>Planeta: {trips.planet}</p>
				<p>Duração: {trips.durationInDays}</p>
				<p>Data: {trips.date}</p>
			</CardListas>
		)
	})
	const casoError = () => {
		return <h2>Lista não encontrada</h2>
	}
	return (
		<DivPrincipal>
			<DivBotão>
				<button onClick={goToBack}>voltar</button>
				<button onClick={goToCreateTrip}> Inscrever-se</button>
			</DivBotão>
			<h1>Lista de viagem</h1>
			{listaMapeada}
		</DivPrincipal>
	)
}
export default ListTripsPage
