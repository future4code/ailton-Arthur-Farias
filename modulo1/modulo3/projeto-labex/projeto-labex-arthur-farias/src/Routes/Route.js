import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage'
import ListTripsPage from '../Pages/ListTripPage/ListTripsPage'
import AplicationFormPage from '../Pages/ApplicationFormPage/ApplicationFormPage'
import LoginPage from '../Pages/LoginPage/LoginPage'

const Rotas = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<HomePage />} />
				<Route path='/ListaViagens' element={<ListTripsPage />} />
				<Route path='/Candidatura' element={<AplicationFormPage />} />
				<Route path='/Login' element={<LoginPage />} />
			</Routes>
		</BrowserRouter>
	)
}
export default Rotas
