import express, { Express, request, Request, response, Response } from 'express'
import { AddressInfo } from 'net'
import knex from 'knex'
import cors from 'cors'
import dotenv from 'dotenv'
import createUser from '../endPoints/createUser'
import getUserById from '../endPoints/getUserById'
import editUser from '../endPoints/editUser'
import createTask from '../endPoints/createTask'

dotenv.config()

const connection = knex({
	client: 'mysql',
	connection: {
		host: process.env.DB_HOST,
		port: Number(process.env.DB_PORT || '3306'),
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_SCHEMA,
	},
})

const app: Express = express()

app.use(express.json())
app.use(cors())

app.get('/retornarUser', (req: Request, res: Response) => {})

//Cria Usuario
app.post('/criarUser', createUser)

// Retorna Usuario com o ID
app.get('retornarUser/:id', getUserById)

// Editar Usuarios com o ID
app.put('/retornaUsuario/edit/:id', editUser)

// Criar Tarefas
app.post('/task', createTask)

// Editar Tarefas com o ID
app.put('/retornaTarefas/edit/:id', getTaskById)

const server = app.listen(process.env.PORT || 3003, () => {
	if (server) {
		const address = server.address() as AddressInfo
		console.log(`Server is running in http://localhost: ${address.port}`)
	} else {
		console.error(`Failure upon starting server.`)
	}
})
