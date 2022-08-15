import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToFeed } from '../Router/Router'

const useUmProtectedPage = () => {
	const navigate = useNavigate()
	useEffect(() => {
		const token = localStorage.getItem('token')
		// if (token) {
		// 	goToFeed(navigate)
		// }
	}, [navigate])
}
export default useUmProtectedPage
