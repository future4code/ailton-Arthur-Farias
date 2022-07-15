import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DivPrincipal, DivBotão } from './ListTripsPage.styled'
import axios from 'axios'

const ListTripsPage = () => {
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
				'https://us-central1-labenu-apis.cloudfunctions.net/labeX/arthur/trips'
			)
			.then((res) => {
				console.log(res)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	return (
		<DivPrincipal>
			<DivBotão>
				<button onClick={goToBack}>voltar</button>
				<button onClick={goToCreateTrip}> Inscrever-se</button>
			</DivBotão>
			<h1>Lista de viagem</h1>
		</DivPrincipal>
	)
}
export default ListTripsPage
