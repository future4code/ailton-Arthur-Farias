import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToLogin } from '../Router/Router'

const useProtectedPage = () => {
	const navigate = useNavigate()
	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
			goToLogin(navigate)
		}
	}, [navigate])
}
export default useProtectedPage
