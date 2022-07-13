import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
const DivPrincipal = styled.div`
	/* 
	justify-content: center;
	align-items: center;
	padding-top: 30px;
	 */
	display: flex;
	justify-content: center;
	background-color: gray;
	padding-bottom: 28%;
	height: 50vh;
	padding-top: 5%;
`
const CardPrincipal = styled.div`
	/* border: 1px solid;
	padding-bottom: 30%;
	padding-left: 14%;
	padding-right: 14%;
	display: flex; */
	height: 80vh;
	width: 50vw;
	background-color: white;
`
const Header = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid;
`
const ImgMatch = styled.img`
	height: 7vh;
	width: 5vw;
`
const DivMap = styled.div`
	display: flex;
	gap: 20px;
`

const MatchPage = (props) => {
	const [matchlist, setMatchList] = useState([])
	useEffect(() => {
		axios
			.get(
				'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/arthur/matches'
			)
			.then((res) => {
				setMatchList(res.data.matches)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])
	const novaMatchList = matchlist.map((profile) => {
		return (
			<DivMap key={profile.id}>
				<ImgMatch src={profile.photo} />
				<p>{profile.name}</p>
			</DivMap>
		)
	})
	return (
		<DivPrincipal>
			<CardPrincipal>
				<Header>
					<h2>astromatch(Match)</h2>
					<button onClick={props.changeProfilePage}>voltar</button>
				</Header>
				{novaMatchList}
			</CardPrincipal>
		</DivPrincipal>
	)
}
export default MatchPage
