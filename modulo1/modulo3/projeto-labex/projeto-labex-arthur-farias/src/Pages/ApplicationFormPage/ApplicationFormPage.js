import { useNavigate } from 'react-router-dom'
import { DivPrincipal } from './ApplicationFormPage.styled'
const AplicationFormPage = () => {
	const navigate = useNavigate()

	const goToBack = () => {
		navigate(-1)
	}
	return (
		<DivPrincipal>
			<h1>Inscreva-se para viagem</h1>
			<select>
				<option>Escolha uma Viagem</option>
			</select>
			<input placeholder='Nome'></input>
			<input placeholder='Idade' type={Number}></input>
			<input placeholder='Texto de Candidatura'></input>
			<input placeholder='Profissão'></input>
			<select>
				<option>Escolha um País</option>
			</select>
			<button onClick={goToBack}>VOLTAR</button>
		</DivPrincipal>
	)
}
export default AplicationFormPage
