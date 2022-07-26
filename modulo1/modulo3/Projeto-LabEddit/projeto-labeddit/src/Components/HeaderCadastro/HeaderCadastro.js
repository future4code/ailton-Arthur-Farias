import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToLogin } from '../../Router/Router'

const HeaderCadastro = () => {
	const navigate = useNavigate()
	return (
		<div>
			<img src='' />
			<p onClick={() => goToLogin(navigate)}>Entrar</p>
		</div>
	)
}
export default HeaderCadastro
