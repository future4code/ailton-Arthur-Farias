import React from 'react'
import Header from '../../Components/Header/Header'
import { DivPrincipalFeed, DivInterna } from './FeedPage.styled'

const FeedPage = () => {
	return (
		<DivPrincipalFeed>
			<Header />
			<DivInterna>
				<input placeholder='Escreva seu post' />
				<button>Postar</button>
			</DivInterna>
			<div></div>
		</DivPrincipalFeed>
	)
}
export default FeedPage
