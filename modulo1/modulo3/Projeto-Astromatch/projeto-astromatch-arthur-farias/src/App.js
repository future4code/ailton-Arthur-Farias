import react from 'react'
import styled from 'styled-components'
import MatchPage from './Components/MatchPage/MatchPage'
import { useState } from 'react'
import ProfilePage from './Components/ProfilePage/ProfilePage'

const App = (props) => {
	const [trocaTela, setTrocaTela] = useState('ProfilePage')

	const changePage = () => {
		switch (trocaTela) {
			case 'ProfilePage':
				return <ProfilePage changeMatchPage={changeMatchPage} />
			case 'MatchPage':
				return <MatchPage changeProfilePage={changeProfilePage} />
		}
	}
	const changeMatchPage = () => {
		setTrocaTela('MatchPage')
	}
	const changeProfilePage = () => {
		setTrocaTela('ProfilePage')
	}

	return <main>{changePage()}</main>
}

export default App
