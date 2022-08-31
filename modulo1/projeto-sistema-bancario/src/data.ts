export type CriaConta = {
	nome: string
	cpf: number
	idade: number
	saldo: any
	extrato: number[]
}
export const contas: CriaConta[] = [
	{
		nome: 'Arthur',
		cpf: 12312312312,
		idade: 20,
		saldo: 100,
		extrato: [],
	},
]
