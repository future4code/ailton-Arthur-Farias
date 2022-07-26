import React from 'react'
import { useNavigate } from 'react-router-dom'
const LoginPage = (props) => {
	const navigate = useNavigate()
	return (
		<div>
			<div>
				<img src='' />
				<h1>LabEddit</h1>
				<p>O projeto de rede social da Labenu</p>
			</div>
			<div>
				<input placeholder='Nome' />
				<input placeholder='Senha' />
				<button>Continuar</button>
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
