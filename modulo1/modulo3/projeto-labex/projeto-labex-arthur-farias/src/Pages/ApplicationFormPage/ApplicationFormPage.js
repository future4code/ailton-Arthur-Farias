import { useNavigate } from 'react-router-dom'
const AplicationFormPage = () => {
	const navigate = useNavigate()

	const goToBack = () => {
		navigate(-1)
	}
	return (
		<div>
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
		</div>
	)
}
export default AplicationFormPage
