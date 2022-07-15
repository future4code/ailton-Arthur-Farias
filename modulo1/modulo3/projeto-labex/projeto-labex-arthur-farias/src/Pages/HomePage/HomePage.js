import { useNavigate } from 'react-router-dom'
import { DivPrincipal, DivBotão } from './HomePage.styled'

const HomePage = () => {
	const navigate = useNavigate()

	const goToTrips = () => {
		navigate('/ListaViagens')
	}
	const goToLogin = () => {
		navigate('/Login')
	}
	return (
		<DivPrincipal>
			<h1>LabeX</h1>
			<DivBotão>
				<button onClick={goToTrips}>Ver Viagens</button>
				<button onClick={goToLogin}>Área de Admin</button>
			</DivBotão>
		</DivPrincipal>
	)
}
export default HomePage
