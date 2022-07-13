import { useNavigate } from 'react-router-dom'
const ListTripsPage = () => {
	const navigate = useNavigate()

	const goToBack = () => {
		navigate(-1)
	}
	const goToCreateTrip = () => {
		navigate('/Candidatura')
	}
	return (
		<div>
			<button onClick={goToBack}>voltar</button>
			<button onClick={goToCreateTrip}> Inscrever-se</button>
			<h1>Lista de viagem</h1>
		</div>
	)
}
export default ListTripsPage
