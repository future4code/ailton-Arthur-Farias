import React from 'react'
import styled from 'styled-components'

const DivGeral = styled.div``
const Header = styled.header`
	display: flex;
	justify-content: space-around;
	border-bottom: 1px solid black;
	align-items: center;
	/* margin-left: 16px;
	margin-right: 16px; */
	background-color: #d3d3d3;
`
const Navegação = styled.div`
	display: flex;
	align-items: center;
	gap: 40px;
`
const TitleHeader = styled.h1`
	font-family: Proxima Nova, Verdana, Avenir Next;
	font-size: 24px;
	line-height: 1.6;
`
const CardPrincipal = styled.div``
const CardPrincipalinterno = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding-top: 20px;
	gap: 40px;
	margin-left: 30%;
	margin-right: 30%;
`
const CriarPlaylist = styled.div`
	text-align: center;
	font-size: 22px;
	font-family: Proxima Nova, Verdana, Avenir Next;
`
const InputCriar = styled.input`
	width: 100px;
`
const BotaoAddPlaylist = styled.button`
	width: 80px;
`
export default class Home extends React.Component {
	render() {
		return (
			<DivGeral>
				<Header>
					<img />
					<TitleHeader>Labefy</TitleHeader>
					<Navegação>
						<p>Criar Playlist</p>
						<p>Visualizar Playlist</p>
						<p>Detalhes da Playlist</p>
						<p>Adicionar Musica</p>
					</Navegação>
				</Header>
				<CardPrincipal>
					<CardPrincipalinterno>
						<CriarPlaylist>
							<h2>Playlists</h2>
							<InputCriar placeholder='Nome' />
						</CriarPlaylist>
						<BotaoAddPlaylist>Criar</BotaoAddPlaylist>
					</CardPrincipalinterno>
				</CardPrincipal>
			</DivGeral>
		)
	}
}
