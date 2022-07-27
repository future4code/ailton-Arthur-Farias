import React from 'react'
import HeaderCadastro from '../../Components/HeaderCadastro/HeaderCadastro'
import {
	DivPrincipalCadastro,
	DivH1,
	DivInputs,
	DivPolitica,
	DivBotao,
} from './CadastroPage.styled'

const CadastroPage = () => {
	return (
		<DivPrincipalCadastro>
			<HeaderCadastro />
			<DivH1>
				<h1>Olá, boas vindas ao LabEddit</h1>
			</DivH1>
			<DivInputs>
				<input placeholder='Nome do Usuário' />
				<input placeholder='E-mail' />
				<input placeholder='Senha' />
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
				<button className='Botao'>Cadastrar</button>
			</DivPolitica>
		</DivPrincipalCadastro>
	)
}
export default CadastroPage
