import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import LoginPage from '../Pages/LoginPage/LoginPage'
import CadastroPage from '../Pages/CadastroPage/CadastroPage'
import FeedPage from '../Pages/FeedPage/Feedpage'
import PostPage from '../Pages/PostPage/PostPage'

export const goToLogin = (navigate) => {
	navigate(-1)
}
export const goToFeed = (navigate) => {
	navigate('/feed')
}

export const goToPost = (navigate) => {
	navigate(`/post:id`)
}
const Rotas = () => {
	const goToCadastro = (navigate) => {
		navigate('/cadastro')
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<LoginPage goToCadastro={goToCadastro} />} />
				<Route
					path='/cadastro'
					element={<CadastroPage goToLogin={goToLogin} />}
				/>
				<Route path='/feed' element={<FeedPage />} />
				<Route path='/post:id' element={<PostPage />} />
			</Routes>
		</BrowserRouter>
	)
}
export default Rotas
