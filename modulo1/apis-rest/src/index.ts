import express, { request, Request, Response } from 'express'
import cors from 'cors'
import { users, user } from './data'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/users', (request: Request, response: Response) => {
	let codeError: number = 400
	try {
		const name: string = request.query.name as string
		const user: user | undefined = users.find((user) => user.name === name)
		// const user: user[] | undefined = users.filter((user) => {
		// 	return user.name === name
		// })
		if (!user) {
			codeError = 404
			throw new Error('User not found')
		}
		response.status(200).send(user)
	} catch (error: any) {
		response.status(codeError).send({ message: error.message })
	}
})
app.get('/usersType', (request: Request, response: Response) => {
	let codeError: number = 400
	try {
		const type: string = request.query.type as string
		const user: user | undefined = users.find((user) => user.type === type)
		if (!user) {
			codeError = 404
			throw new Error('Type not found')
		}
	} catch (error: any) {
		response.status(codeError).send({ message: error.message })
	}
})
app.post('', (request: Request, response: Response) => {
	try {
	} catch (error) {}
})

app.listen(3003, () => {
	console.log('Server is running in http://localhost:3003')
})
