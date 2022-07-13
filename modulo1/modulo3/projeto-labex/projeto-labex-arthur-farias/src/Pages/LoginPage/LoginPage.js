import { useNavigate } from 'react-router-dom'
const LoginPage = () => {
	const navigate = useNavigate()

	const goToBack = () => {
		navigate(-1)
	}
	return (
		<div>
			<h1>Login</h1>
			<input placeholder='E-mail' />
			<input placeholder='Senha' />
			<button>Entrar</button>
			<button onClick={goToBack}>Voltar</button>
		</div>
	)
}
export default LoginPage
