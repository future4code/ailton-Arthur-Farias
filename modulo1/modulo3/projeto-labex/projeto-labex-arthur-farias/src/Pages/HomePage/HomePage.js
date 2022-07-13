import { useNavigate } from 'react-router-dom'

const HomePage = () => {
	const navigate = useNavigate()

	const goToTrips = () => {
		navigate('/ListaViagens')
	}
	const goToLogin = () => {
		navigate('/Login')
	}
	return (
		<div>
			<h1>LabeX</h1>
			<button onClick={goToTrips}>Ver Viagens</button>
			<button onClick={goToLogin}>Área de Admin</button>
		</div>
	)
}
export default HomePage
