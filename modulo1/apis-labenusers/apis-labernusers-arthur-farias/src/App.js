import React from 'react'
import './App.css'
import axios from 'axios'

class Usuarios extends React.Component {
	componentDidMount() {
		this.props.getUser()
	}

	render() {
		const listaDeUsuararios = this.props.usuarios?.map((user) => {
			return <p key={user.id}>{user.name}</p>
		})
		return (
			<div>
				<h2>Lista de usuarios</h2>
				{listaDeUsuararios}
				<button onClick={this.props.voltar}>Voltar</button>
			</div>
		)
	}
}

class App extends React.Component {
	state = {
		inputName: '',
		inputEmail: '',
		usuarios: [],
		telaUsuario: true,
	}
	onChangeInputName = (event) => {
		this.setState({ inputName: event.target.value })
	}
	onChangeInputEmail = (event) => {
		this.setState({ inputEmail: event.target.value })
	}

	// componentDidMount() {
	//   this.getUsers()
	// }

	getUsers = () => {
		axios
			.get(
				'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
				{
					headers: {
						Authorization: 'arthur-farias-ailton',
					},
				}
			)
			.then((response) => {
				console.log(response)
				this.setState({ usuarios: response.data })
			})
			.catch((error) => {
				console.log(error.mensage)
			})
	}

	createUsers = () => {
		const body = {
			name: this.state.inputName,
			email: this.state.inputEmail,
		}
		axios
			.post(
				'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
				body,
				{
					headers: {
						Authorization: 'arthur-farias-ailton',
					},
				}
			)
			.then((response) => {
				console.log(response)
			})
			.catch((error) => {
				console.log(error.mensage)
			})
	}
	changeScreen = () => {
		this.setState({ telaUsuario: !this.state.telaUsuario })
	}
	render() {
		return (
			<div>
				{this.state.telaUsuario ? (
					<div className='App-div-Pai'>
						<h2>Cadastro de Usuários</h2>
						<p>Nome:</p>
						<input
							placeholder='Digite seu Nome'
							value={this.state.inputName}
							onChange={this.onChangeInputName}
						/>
						<p>E-mail:</p>
						<input
							placeholder='Digite se Email'
							value={this.state.inputEmail}
							onChange={this.onChangeInputEmail}
						/>
						<br />
						<button onClick={this.createUsers}>Enviar</button>
						<button className='Botao-Lista-Usuario' onClick={this.changeScreen}>
							Mudar para Usuarios
						</button>
					</div>
				) : (
					<Usuarios
						usuarios={this.state.usuarios}
						getUser={this.getUsers}
						voltar={this.changeScreen}
					/>
				)}
			</div>
		)
	}
}

export default App
