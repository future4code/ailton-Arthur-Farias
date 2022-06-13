import React from 'react'
import styled from 'styled-components'

const BordaContainer = styled.div`
	/* padding-top: 200px; */
	background-color: pink;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 90vh;
	width: 40vw;
	flex-direction: column;
	margin: 0 auto;
	border: 1px solid black;
	border-radius: 12px;
`
const ChatPrincipal = styled.div`
	padding-top: 200px;
	display: flex;
	flex-direction: column;
	border-radius: 20px;
	width: 100%;
	height: 70%;
	justify-content: flex-end;
`
const InputUsuario = styled.input`
	border-radius: 20px;
`
const InputMensagem = styled.input`
	border-radius: 20px;
`
const BotaoEnviar = styled.button`
	border-radius: 20px;
`
const MensagemImpressa = styled.div`
	display: flex;
	margin: 8px;
	/* word-break: break-all;
	word-wrap: break-word; */
`
const ContainerInputs = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	gap: 4px;
`

class Chat extends React.Component {
	state = {
		userName: '',
		userMessage: '',
		usersMessages: [],
	}
	onSubmmit = () => {
		const newMessage2 = {
			userName: this.state.userName,
			userMessage: this.state.userMessage,
		}
		const novoArray = [...this.state.usersMessages, newMessage2]
		this.setState({ usersMessages: novoArray, userName: '', userMessage: '' })
	}

	render() {
		const newMessage = this.state.usersMessages.map((data, index) => {
			return (
				<MensagemImpressa key={index}>
					{data.userName}: {data.userMessage}
				</MensagemImpressa>
			)
		})
		return (
			<BordaContainer>
				<ChatPrincipal>{newMessage}</ChatPrincipal>
				<ContainerInputs>
					<InputUsuario
						value={this.state.userName}
						placeholder={'Usuário'}
						id='userName'
						onChange={(event) =>
							this.setState({ userName: event.target.value })
						}
					></InputUsuario>
					<InputMensagem
						value={this.state.userMessage}
						placeholder='Mensagem'
						id='userMessage'
						onChange={(event) =>
							this.setState({ userMessage: event.target.value })
						}
					></InputMensagem>
					<BotaoEnviar onClick={this.onSubmmit}>enviar</BotaoEnviar>
				</ContainerInputs>
			</BordaContainer>
		)
	}
}
export default Chat
