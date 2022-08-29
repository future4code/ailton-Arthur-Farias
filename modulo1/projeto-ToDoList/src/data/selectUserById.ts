import { connection } from './baseDatabase'

const selectUserById = async (id: number): promise<any> => {
	const result = await connection
		.select('*')
		.from('TodoListUser')
		.where('id', id)

	return result
}
export default selectUserById
