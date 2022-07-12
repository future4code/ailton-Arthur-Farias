const aplicationFormPage = () => {
	return (
		<div>
			<h1>Inscreva-se para viagem</h1>
			<select>
				<option>Escolha uma Viagem</option>
			</select>
			<input placeholder='Nome'></input>
			<input placeholder='Idade' type={number}></input>
			<input placeholder='Texto de Candidatura'></input>
			<input placeholder='Profissão'></input>
			<select>
				<option>Escolha um País</option>
			</select>
		</div>
	)
}
export default aplicationFormPage
