import React from 'react'
import HeaderCadastro from '../../Components/HeaderCadastro/HeaderCadastro'

const CadastroPage = () => {
	return (
		<div>
			<HeaderCadastro />
			<div>
				<h1>Olá, boas vindas ao LabEddit</h1>
			</div>
			<div>
				<input placeholder='Nome do Usuário' />
				<input placeholder='E-mail' />
				<input placeholder='Senha' />
			</div>
			<div>
				<p>
					Ao continuar, você concorda como o nosso <p>Contrato de usuário</p>e a
					nossa <p>Política de privacidade</p>
				</p>
				<div>
					<button>.</button>
					<p>Eu concordo em receber emails sobre coisas legais no LabEddit</p>
				</div>
			</div>
		</div>
	)
}
export default CadastroPage
