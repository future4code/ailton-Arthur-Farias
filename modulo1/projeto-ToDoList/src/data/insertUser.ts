import { connection } from './baseDatabase'
import { NewUser } from '../types'

const insertUser = async (user: Number): Promise<any> => {
	const { name, nickname, email } = user

	await connection
		.insert({
			name,
			nickname,
			email,
		})
		.into('TodoListUser')
}

export default insertUser
