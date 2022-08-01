import axios from 'axios'
import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import useProtectedPage from '../../Hooks/useProtected'
import {
	DivPrincipalPost,
	DivInterna,
	DivMap,
	DivMapPrincipal,
} from './PostPage.styled'
import { useState } from 'react'

const PostPage = () => {
	// useProtectedPage()
	const [post, setPost] = useState([])
	useEffect(() => {
		const token = localStorage.getItem('token')
		axios
			.get(`https://labeddit-2.herokuapp.com/posts/:id/comments`, {
				headers: {
					Authorization: token,
				},
			})
			.then((res) => {
				console.log(res)
			})
			.catch((err) => {
				console.log(err)
			}),
			postBruta()
	}, [])
	const postBruta = () => {
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
	}
	const postMapeado = post.map((posts) => {
		return (
			<DivMap key={posts.id}>
				<h2>{posts.body}</h2>
				<p>{posts.title}</p>
			</DivMap>
		)
	})
	return (
		<DivPrincipalPost>
			<Header />
			<DivInterna>
				<input placeholder='Adicionar comentário' />
				<button>Responder</button>
			</DivInterna>
		</DivPrincipalPost>
	)
}
export default PostPage
