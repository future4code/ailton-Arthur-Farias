import styled from 'styled-components'
import axios from 'axios'
import { useEffect, useState } from 'react'
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
	height: 25vh;
	padding-top: 15%;
	align-items: center;
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
	padding-bottom: 30px;
`
const Header = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid;
`
const DivProfile = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
const ImgProfile = styled.img`
	width: 20vw;
	height: 40vh;
`
const DivBotao = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
`

const ProfilePage = (props) => {
	const [profileList, setProfileList] = useState([])
	const [id, setId] = useState('')

	const adicionaMatch = (choice) => {
		const body = {
			id: profileList.id,
			choice: choice,
		}
		axios
			.post(
				'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/arthur/choose-person',
				body
			)
			.then((res) => {
				choiceProfile()
			})
			.catch((err) => {
				console.log(err)
			})
	}
	const choiceProfile = () => {
		axios
			.get(
				'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/arthur/person'
			)
			.then((res) => {
				setProfileList(res.data.profile)
			})
			.catch((err) => {
				console.log(err)
			})
	}
	const deleteTudo = () => {
		axios
			.put(
				'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/arthur/clear'
			)
			.then((res) => {
				alert('Matches apagados com sucesso!')
			})
			.catch((err) => {})
	}

	useEffect(() => {
		choiceProfile()
	}, [])

	// let novoArray = profileList.map((profile) => {
	// 	return (
	// 		<div key={profile.id}>
	// 			<p>{profile.name}</p>
	// 			<img>{profile.photo}</img>
	// 			<p>{profile.age}</p>
	// 		</div>
	// 	)
	// })
	console.log(profileList)
	return (
		<DivPrincipal>
			<CardPrincipal>
				<Header>
					<h2>astromatch(Profile)</h2>
					<button onClick={props.changeMatchPage}>Match</button>
				</Header>
				<DivProfile>
					<h3>{profileList.name}</h3>
					<ImgProfile src={profileList.photo} />
					<p>{profileList.bio}</p>
					<p>Idade: {profileList.age}</p>
				</DivProfile>
				<DivBotao>
					<button onClick={() => adicionaMatch(false)}>❌</button>
					<button onClick={() => adicionaMatch(true)}>❤</button>
				</DivBotao>
				<button onClick={() => deleteTudo(profileList.id)}>Deletar tudo</button>
			</CardPrincipal>
		</DivPrincipal>
	)
}
export default ProfilePage
