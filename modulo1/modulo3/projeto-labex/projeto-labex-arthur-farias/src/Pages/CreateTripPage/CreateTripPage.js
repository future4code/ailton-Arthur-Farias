const CreatTripPage = () => {
	return (
		<div>
			<h1>Criar uma viagem</h1>
			<input placeholder='Nome'></input>
			<select>
				<option>Mercúrio</option>
				<option>Venûs</option>
				<option>Terra</option>
				<option>Marte</option>
				<option>Jupiter</option>
				<option>Saturno</option>
				<option>Urano</option>
				<option>Netuno</option>
				<option>Plutão</option>
			</select>
			<input type='date'></input>
			<input placeholder='Descrição'></input>
			<input type='Number' placeholder='Duração em Dias'></input>
		</div>
	)
}
export default CreatTripPage
