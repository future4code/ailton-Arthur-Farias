import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToLogin } from '../../Router/Router'
import Vector1 from '../../Imagens/Vector (1).png'
import Vector2 from '../../Imagens/Vector (2).png'
import Vector3 from '../../Imagens/Vector (3).png'
import Vector4 from '../../Imagens/Vector (4).png'
import { DivPrincipalheaderCadastro } from './HeaderCadastro.styled'

const HeaderCadastro = () => {
	const navigate = useNavigate()
	return (
		<DivPrincipalheaderCadastro>
			<div>
				<img src={Vector1} />
				<img src={Vector2} />
				<div>
					<img src={Vector3} />
					<img src={Vector4} />
				</div>
			</div>
			<p onClick={() => goToLogin(navigate)}>Entrar</p>
		</DivPrincipalheaderCadastro>
	)
}
export default HeaderCadastro
