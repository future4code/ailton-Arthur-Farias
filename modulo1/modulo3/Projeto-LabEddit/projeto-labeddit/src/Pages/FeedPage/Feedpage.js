import React from 'react'
import Header from '../../Components/Header/Header'
import { DivPrincipalFeed, DivInterna } from './FeedPage.styled'
import { useEffect, useState } from 'react'
import axios from 'axios'

const FeedPage = () => {
	const [post, setPost] = useState()
	useEffect(() => {
		axios
			.get('https://labeddit.herokuapp.com/posts')
			.then((res) => {
				console.log(res)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

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
