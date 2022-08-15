import React from 'react'
import { useNavigate } from 'react-router-dom'
import Vector1 from '../../Imagens/Vector (1).png'
import Vector2 from '../../Imagens/Vector (2).png'
import Vector3 from '../../Imagens/Vector (3).png'
import Vector4 from '../../Imagens/Vector (4).png'
import { useState } from 'react'
import useForm from '../../Hooks/useForm'
import axios from 'axios'
import { goToFeed } from '../../Router/Router'
import useUmProtectedPage from '../../Hooks/useUmprotectedPage'

const LoginPage = (props) => {
	useUmProtectedPage()
	const [nome, setNome] = useState('')
	const [senha, setSenha] = useState('')
	const navigate = useNavigate()

	const [form, onChange, clear] = useForm({ email: '', password: '' })

	const onSubmitForm = (event) => {
		event.preventDefault()
	}
	const login = () => {
		axios
			.post(`https://labeddit-2.herokuapp.com/users/login`, form)
			.then((res) => {
				localStorage.setItem('token', res.data.token)
				clear()
				goToFeed(navigate)
			})
			.catch((err) => {
				alert('Error no login')
			})
	}

	return (
		<div>
			<div>
				<div>
					<img src={Vector1} />
					<img src={Vector2} />
				</div>
				<div>
					<img src={Vector3} />
					<img src={Vector4} />
				</div>
				<h1>LabEddit</h1>
				<p>O projeto de rede social da Labenu</p>
			</div>
			<div>
				<input
					placeholder='E-mail'
					onSubmit={onSubmitForm}
					name={'email'}
					value={form.email}
					onChange={onChange}
					required
					type={'email'}
				/>
				<input
					placeholder='Senha'
					name={'password'}
					value={form.password}
					onChange={onChange}
					required
					type={'password'}
				/>
				<button type='submit' onSubmit={onSubmitForm} onClick={() => login()}>
					Continuar
				</button>
			</div>
			<div>
				<button onClick={() => props.goToCadastro(navigate)}>
					Crie uma conta!
				</button>
			</div>
		</div>
	)
}
export default LoginPage
