import React, { useEffect } from 'react'
import HeaderCadastro from '../../Components/HeaderCadastro/HeaderCadastro'
import {
	DivPrincipalCadastro,
	DivH1,
	DivInputs,
	DivPolitica,
	DivBotao,
} from './CadastroPage.styled'
import { useState } from 'react'
import useForm from '../../Hooks/useForm'
import axios from 'axios'
import useUmProtectedPage from '../../Hooks/useUmprotectedPage'
import { goToLogin } from '../../Router/Router'
import { Navigate } from 'react-router-dom'

const CadastroPage = () => {
	useUmProtectedPage()
	const [form, onChange, clear] = useForm({ name: '', email: '', password: '' })
	const onSubmitForm = (event) => {
		event.preventDefaut()
		console.log(form)
	}
	// useEffect(() => {
	// 	cadastro()
	// }, [])
	const cadastro = () => {
		const body = {
			username: form.name,
			email: form.email,
			password: form.password,
		}
		const token = localStorage.getItem('token')
		axios
			.post(`https://labeddit-2.herokuapp.com/users/signup`, body)
			.then((res) => {
				localStorage.setItem('token', res.data.token)
				clear()
				goToLogin(Navigate)
			})
			.catch((err) => {
				console.log(err)
			})
	}
	return (
		<DivPrincipalCadastro>
			<HeaderCadastro />
			<DivH1>
				<h1>Olá, boas vindas ao LabEddit</h1>
			</DivH1>
			<DivInputs>
				<input
					placeholder='Nome do Usuário'
					onSubmit={onSubmitForm}
					name={'name'}
					value={form.name}
					onChange={onChange}
					required
					type={'name'}
				/>
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
					onSubmit={onSubmitForm}
					name={'password'}
					value={form.password}
					onChange={onChange}
					required
					type={'password'}
				/>
			</DivInputs>
			<DivPolitica>
				<p>
					Ao continuar, você concorda como o nosso
					<strong> Contrato de usuário</strong> e a nossa
					<strong> Política de privacidade</strong>
				</p>
				<DivBotao>
					<button>.</button>
					<p>Eu concordo em receber emails sobre coisas legais no LabEddit</p>
				</DivBotao>
				<button className='Botao' type='submit' onClick={() => cadastro()}>
					Cadastrar
				</button>
			</DivPolitica>
		</DivPrincipalCadastro>
	)
}
export default CadastroPage
