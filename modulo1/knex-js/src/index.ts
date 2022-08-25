import express, { Express, request, response } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import knex from 'knex'
import { Request, Response } from 'express'

const app: Express = express()

app.use(express.json())
app.use(cors())

const connection = knex({
	client: 'mysql',
	connection: {
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		database: process.env.DB_DATABASE,
		password: process.env.DB_PASSWORD,
		port: 3306,
	},
})

app.get('/pegarActor/:id', (req: Request, res: Response) => {
	try {
		const getActorById = async (id: string): Promise<any> => {
			const result = await connection.raw(`
              SELECT * FROM Actor WHERE id = '${id}'
            `)

			return result[0][0]
		}
		// getActorById('001')
		// 	.then((result) => {
		// 		console.log(result)
		// 	})
		// 	.catch((err) => {
		// 		console.log(err)
		// 	})
	} catch (error) {}
})

const server = app.listen(process.env.PORT || 3003, () => {
	if (server) {
		const address = server.address() as AddressInfo
		console.log(`Server is running in http://localhost: ${address.port}`)
	} else {
		console.error(`Failure upon starting server.`)
	}
})
