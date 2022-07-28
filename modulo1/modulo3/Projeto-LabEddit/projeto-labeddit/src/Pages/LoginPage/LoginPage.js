import React from 'react'
import { useNavigate } from 'react-router-dom'
import Vector1 from '../../Imagens/Vector (1).png'
import Vector2 from '../../Imagens/Vector (2).png'
import Vector3 from '../../Imagens/Vector (3).png'
import Vector4 from '../../Imagens/Vector (4).png'
import { useState } from 'react'

const LoginPage = (props) => {
	const [nome, setNome] = useState('')
	const [senha, setSenha] = useState('')
	const navigate = useNavigate()
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
