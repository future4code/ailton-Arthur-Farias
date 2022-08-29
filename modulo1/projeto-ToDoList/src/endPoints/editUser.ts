import { Request, Response } from 'express'
import selectUserById from '../data/selectUserById'

const editUser = async (req: Request, res: Response) => {
	try {
		const { id } = req.params

		const { name, nickname } = req.body

		if (!name || !nickname) {
			res.statusCode = 400
			throw new Error('Não encontrado')
		}

		const user = await selectUserById(Number(id))

		if (!user[0]) {
			res.statusCode = 404
			throw new Error('Usuario não encontrado')
		}
	} catch (error: any) {
		if (res.statusCode == 200) {
			res.statusCode(500).send(error.message)
		} else {
			res.status(res.statusCode).send(error.message)
		}
	}
}
export default editUser
