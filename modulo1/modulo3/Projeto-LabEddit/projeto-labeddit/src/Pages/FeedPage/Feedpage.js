import React from 'react'
import Header from '../../Components/Header/Header'
import {
	DivPrincipalFeed,
	DivInterna,
	DivMap,
	DivMapPrincipal,
} from './FeedPage.styled'
import { useEffect, useState } from 'react'
import axios from 'axios'
import useProtectedPage from '../../Hooks/useProtected'
import { goToPost } from '../../Router/Router'
import { Navigate, useNavigate } from 'react-router-dom'

const FeedPage = () => {
	// useProtectedPage()
	const navigate = useNavigate()
	const [post, setPost] = useState([])
	useEffect(() => {
		const token = localStorage.getItem('token')
		axios
			.get('https://labeddit-2.herokuapp.com/posts', {
				headers: {
					Authorization: token,
				},
			})
			.then((res) => {
				setPost(res.data)
				console.log(res)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])
	const postMapeado = post.map((posts) => {
		return (
			<DivMap key={posts.id}>
				<h2>{posts.body}</h2>
				<p>{posts.title}</p>
				<button onClick={() => goToPost(navigate)}>comentar</button>
			</DivMap>
		)
	})
	return (
		<DivPrincipalFeed>
			<Header />
			<DivInterna>
				<input placeholder='Escreva seu post' />
				<button>Postar</button>
			</DivInterna>
			<DivMapPrincipal>{postMapeado}</DivMapPrincipal>
		</DivPrincipalFeed>
	)
}
export default FeedPage
