import './App.css'
import React from 'react'
import styled from 'styled-components'

const BordaContainer = styled.div`
	border: 1px solid black;
	padding-top: 20px;
`
class Chat extends React.Component {
	render() {
		return (
			<BordaContainer>
				<input></input>
				<input></input>
				<button>enviar</button>
			</BordaContainer>
		)
	}
}
export default Chat
