import express, { query, request, Request, Response } from 'express'
import cors from 'cors'
import { Produtos, arrayProdutos } from './data'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/test', (resquest, response) => {
	console.log('Funcionou')
})

app.post('/CriarNovosProdutos', (request, response) => {
	try {
		const { id } = request.body

		const novoProduto: Produtos = {
			id,
			name: '',
			price: 0,
		}
		arrayProdutos.push(novoProduto)
		response.send(arrayProdutos)
	} catch (error: any) {
		response.status(response.statusCode || 500).send({ message: error.message })
	}
})
app.get('/retornaAllProdutos', (request, response) => {
	try {
		response.send(arrayProdutos)
	} catch (error: any) {
		response.status(response.statusCode || 500).send({ message: error.message })
	}
})
app.put('/alteraPreco/:id', (request, response) => {
	try {
		const id = request.params.id
		const filterId: Produtos[] = arrayProdutos.filter((produtos) => {
			return produtos.id === id
		})
		console.log(filterId)
	} catch (error) {}
})
app.delete('/deletarProduto/:name', (request, response) => {
	try {
		const name = request.params.name
		const delelteProduto: Produtos[] = arrayProdutos.filter((produtos) => {
			return produtos.name !== name
		})
		response.send(delelteProduto)
	} catch (error: any) {
		response.status(response.statusCode || 500).send({ message: error.message })
	}
})

app.listen(3003, () => {
	console.log('Server is running in http://localhost:3003')
})
