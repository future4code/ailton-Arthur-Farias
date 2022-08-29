import { Request, Response } from 'express'
import { NewUser } from '../types'

const createUser = async (req: Request, res: Response) => {
	try {
		const { name, nickname, email } = req.body

		if (!name || !nickname || !email) {
			res.statusCode = 400
			throw new Error('Erro, Tente novamente!')
		}
		const newUser: NewUser = {
			name,
			nickName,
			email,
		}
		await insertUser(newUser)
		res.status(200).send('Usuario criado com sucesso')
	} catch (error: any) {
		if (res.statusCode == 200) {
			res.status(500).send(error.message)
		} else {
			res.status(res.statusCode).send(error.message)
		}
	}
}
export default createUser
