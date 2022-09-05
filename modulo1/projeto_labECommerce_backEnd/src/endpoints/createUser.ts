import { Request, Response } from 'express'
import { getUserByEmail } from '../data/queries/selectUsers'

export const createUser = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const { name, email, password } = req.body

		if (!name || !email || !password) {
			res.statusCode = 400
			throw new Error('`name`, `email`, e `password` são obrigatorios')
		}

		const user = await getUserByEmail(email)

		if (user) {
			res.statusCode = 409
			throw new Error('Esse Email já foi cadastrado')
		}

		if (!email.includes('@') || !email.includes('.com')) {
			res.statusCode = 401
			throw new Error('O campo deve ser preencgico com um `@` e um `.com`')
		}

		if (password.length < 6) {
			res.statusCode = 401
			throw new Error('A senha deve conter no minimo seis caracteres')
		}

		const newUser: User = {
			id: uuid(),
			name,
			email,
			password,
		}
	} catch (error) {}
}
