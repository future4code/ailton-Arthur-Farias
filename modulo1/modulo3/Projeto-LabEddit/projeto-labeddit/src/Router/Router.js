import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import LoginPage from '../Pages/LoginPage/LoginPage'
import CadastroPage from '../Pages/CadastroPage/CadastroPage'

export const goToLogin = (navigate) => {
	navigate(-1)
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
			</Routes>
		</BrowserRouter>
	)
}
export default Rotas
