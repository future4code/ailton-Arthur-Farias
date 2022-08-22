import express, { Request, response, Response } from 'express'
import cors from 'cors'
import { contas, CriaConta } from './data'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/retornaContas', (req: Request, res: Response) => {
	try {
		res.send(contas)
	} catch (error: any) {
		res.status(res.statusCode || 500).send({ message: error.message })
	}
})
app.post('/criaConta', (req: Request, res: Response) => {
	try {
		const { nome, cpf, idade, saldo, extrato } = req.body
		const novaConta: CriaConta = {
			nome,
			cpf,
			idade,
			saldo,
			extrato,
		}
		if (idade < 18) {
			response.statusCode = 401
			throw new Error('Menor de 18 anos não pode criar uma conta!')
		}
		// const filterCpf = contas.filter((conta) => {
		// 	return conta.cpf
		// })
		// console.log(filterCpf)
		// if (cpf === filterCpf) {
		// 	response.statusCode = 401
		// 	throw new Error('CPF já cadastrado!')
		// }
		contas.push(novaConta)
		res.send(contas)
	} catch (error: any) {
		res.status(res.statusCode || 500).send({ message: error.message })
	}
})
app.get('/retornaSaldo/:nome', (req: Request, res: Response) => {
	try {
		const nome = req.params.nome

		if (!nome) {
			res.statusCode = 401
			throw new Error('Ei , não pode mandar valores vazios')
		}
		const visualizarSaldo: CriaConta[] = contas.filter((contas) => {
			return contas.nome === nome
		})
		if (!visualizarSaldo.length) {
			res.statusCode = 401
			throw new Error(
				`Não foi possivel achar o saldo referente a conta de ${nome}`
			)
		}
		res.send(visualizarSaldo)
	} catch (error: any) {
		res.status(res.statusCode || 500).send({ message: error.message })
	}
})

app.delete('/deletaConta/:nome', (req: Request, res: Response) => {
	try {
		const nome = req.params.nome
		const deleteConta: CriaConta[] = contas.filter((conta) => {
			return conta.nome !== nome
		})
		res.send(deleteConta)
	} catch (error: any) {
		res.status(res.statusCode || 500).send({ message: error.message })
	}
})

app.listen(3003, () => {
	console.log('Server is running in http://localhost:3003')
})
