import React from 'react'
import styled from 'styled-components'

const ContainerGeral1 = styled.div`
	text-align: center;
	border: 1px solid black;
	border-radius: 24px;
	margin-left: 300px;
	margin-right: 300px;
	padding-bottom: 16px;
`
const ContainerSecundario1 = styled.div``

const ContainerGeral2 = styled.div`
	text-align: center;
	border: 1px solid black;
	border-radius: 24px;
	margin-left: 250px;
	margin-right: 250px;
	padding-bottom: 16px;
`
const ContainerSecundario2 = styled.div``

const ContainerGeral3 = styled.div`
	text-align: center;
	border: 1px solid black;
	border-radius: 24px;
	margin-left: 250px;
	margin-right: 250px;
	padding-bottom: 16px;
`
const ContainerSecundario3 = styled.div``

const ContainerGeral4 = styled.div`
	text-align: center;
	border: 1px solid black;
	border-radius: 24px;
	margin-left: 250px;
	margin-right: 250px;
	padding-bottom: 22px;
`
const DivBotao = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 10px;
`
const DivBotao2 = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 10px;
`
const DivSelectBotao = styled.div`
	align-items: center;
	padding-top: 10px;
`
const DivBotao3 = styled.div`
	align-items: center;
	padding-top: 10px;
`

class Etapa1 extends React.Component {
	render() {
		return (
			<ContainerGeral1>
				<h1> ETAPA 1 - DADOS GERAIS</h1>
				<ContainerSecundario1>
					<p>1. Qual o seu nome?</p>
					<input></input>
					<p>2. Qual sua idade?</p>
					<input></input>
					<p>3. Qual seu email?</p>
					<input></input>
					<p>4. Qual a sua escolaridade?</p>
					<select>
						<option>Esino médio incompleto</option>
						<option>Esino médio completo</option>
						<option>Esino superior incompleto</option>
						<option>Esino superior completo</option>
					</select>
					<DivBotao>
						<button onClick={this.props.goEtapa2}>Próxima etapa</button>
					</DivBotao>
				</ContainerSecundario1>
			</ContainerGeral1>
		)
	}
}
// export default Etapa1

class Etapa2 extends React.Component {
	render() {
		return (
			<ContainerGeral2>
				<h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
				<ContainerSecundario2>
					<p>5. Qual curso?</p>
					<input></input>
					<p>6. Qual a unidade de ensino?</p>
					<input></input>
					<DivBotao2>
						<button onClick={this.props.goEtapa3}>Próxima etapa</button>
					</DivBotao2>
				</ContainerSecundario2>
			</ContainerGeral2>
		)
	}
}
// export default Etapa2

class Etapa3 extends React.Component {
	render() {
		return (
			<ContainerGeral3>
				<h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
				<ContainerSecundario3>
					<p>7. Por que você não terminou um curso de graduação?</p>
					<input></input>
					<p>8. Você fez algum curso complementar?</p>
					<input></input>
					<DivSelectBotao>
						<select>
							<option>Nenhum</option>
							<option>Curso técnico</option>
							<option>Curso de inglês</option>
						</select>
						<DivBotao3>
							<button onClick={this.props.goEtapa4}>Próxima etapa</button>
						</DivBotao3>
					</DivSelectBotao>
				</ContainerSecundario3>
			</ContainerGeral3>
		)
	}
}
// export default Etapa3

class Final extends React.Component {
	render() {
		return (
			<ContainerGeral4>
				<h1>O FORMULÁRIO ACABOU</h1>
				<p>Muito obrigado por participar! Entraremos em contato!</p>
			</ContainerGeral4>
		)
	}
}
export default class App extends React.Component {
	state = {
		etapa: 1,
	}
	// goEtapa1 = () => {
	// 	this.setState({
	// 		etapa: 1,
	// 	})
	// }
	goEtapa2 = () => {
		this.setState({
			etapa: 2,
		})
	}
	goEtapa3 = () => {
		this.setState({
			etapa: 3,
		})
	}
	goEtapa4 = () => {
		this.setState({
			etapa: 4,
		})
	}
	choseEtapa = () => {
		switch (this.state.etapa) {
			case 1:
				return <Etapa1 goEtapa2={this.goEtapa2} />
				break
			case 2:
				return <Etapa2 goEtapa3={this.goEtapa3} />
				break
			case 3:
				return <Etapa3 goEtapa4={this.goEtapa4} />
				break
			case 4:
				return <Final />
				break
		}
	}
	render() {
		return <div>{this.choseEtapa()}</div>
	}
}
