import React from 'react'
import { useNavigate } from 'react-router-dom'
import Vector1 from '../../Imagens/Vector (1).png'
import Vector2 from '../../Imagens/Vector (2).png'
import Vector3 from '../../Imagens/Vector (3).png'
import Vector4 from '../../Imagens/Vector (4).png'
import { DivPrincipalheader } from './Header.styled'

const Header = () => {
	const navigate = useNavigate()
	return (
		<DivPrincipalheader>
			<div>
				<img src={Vector1} />
				<img src={Vector2} />
				<div>
					<img src={Vector3} />
					<img src={Vector4} />
				</div>
			</div>
			<p>logout</p>
		</DivPrincipalheader>
	)
}
export default Header
