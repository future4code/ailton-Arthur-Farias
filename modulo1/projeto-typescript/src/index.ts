//ATIVIDADE TYPESCRIPT
//EXERCICIO 1
const nome: string = 'Arthur'
const dia: number = 22
const mes: string = 'agosto'
const ano: number = 2002
// console.log(
// 	'Ola me chamo',
// 	nome,
// 	'nasci no dia',
// 	dia,
// 	'do mês de',
// 	mes,
// 	'do ano de ',
// 	ano
// )
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//EXERCICIO 2
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//EXERCICIO 3
enum GENERO {
	ACAO = 'ação',
	DRAMA = 'drama',
	COMEDIA = 'comédia',
	ROMANCE = 'romance',
	TERROR = 'terror',
}
type Filmes = {
	nome: string
	anoLancamento: number
	genero: GENERO
	pontuacao?: number
}
const filme1: Filmes = {
	nome: 'Veloses e Furioso 9',
	anoLancamento: 2021,
	genero: GENERO.ACAO,
}
const filme2: Filmes = {
	nome: 'A Culpa É das Estrelas',
	anoLancamento: 2014,
	genero: GENERO.DRAMA,
	pontuacao: 90,
}
const filme3: Filmes = {
	nome: 'Gente Grande',
	anoLancamento: 2010,
	genero: GENERO.COMEDIA,
	pontuacao: 77,
}
const filme4: Filmes = {
	nome: 'Simplesmente Acontece',
	anoLancamento: 2014,
	genero: GENERO.ROMANCE,
}
const filme5: Filmes = {
	nome: 'Annabelle',
	anoLancamento: 2014,
	genero: GENERO.TERROR,
	pontuacao: 80,
}
// console.table(filme1)
//------------------------------------------------------------------------
//------------------------------------------------------------------------
//EXERCICIO 4
enum SETOR {
	MARKETING = 'Marketing',
	VENDAS = 'Vendas',
	FINANCEIRO = 'Financeiro',
}
type Organizado = {
	nome: string
	salário: number
	setor: SETOR
	presencial: boolean
}
const colaboradores: Organizado[] = [
	{ nome: 'Marcos', salário: 2500, setor: SETOR.MARKETING, presencial: true },
	{ nome: 'Maria', salário: 1500, setor: SETOR.VENDAS, presencial: false },
	{ nome: 'Salete', salário: 2200, setor: SETOR.FINANCEIRO, presencial: true },
	{ nome: 'João', salário: 2800, setor: SETOR.MARKETING, presencial: false },
	{ nome: 'Josué', salário: 5500, setor: SETOR.FINANCEIRO, presencial: true },
	{ nome: 'Natalia', salário: 4700, setor: SETOR.VENDAS, presencial: true },
	{ nome: 'Paola', salário: 3500, setor: SETOR.MARKETING, presencial: true },
]
const filterColaboradores = colaboradores?.filter((index) => {
	return index.setor === SETOR.MARKETING && index.presencial === true
})
// console.table(filterColaboradores)
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//EXERCICIO 5
type TiposUsuarios = {
	name: string
	email: string
	role: string
}
const usuarios: TiposUsuarios[] = [
	{ name: 'Rogério', email: 'roger@email.com', role: 'user' },
	{ name: 'Ademir', email: 'ademir@email.com', role: 'admin' },
	{ name: 'Aline', email: 'aline@email.com', role: 'user' },
	{ name: 'Jéssica', email: 'jessica@email.com', role: 'user' },
	{ name: 'Adilson', email: 'adilson@email.com', role: 'user' },
	{ name: 'Carina', email: 'carina@email.com', role: 'admin' },
]
const filterUsuarios = usuarios?.filter((index) => {
	return index.role === 'admin'
})
const mapFilterUsuarios = filterUsuarios.map((index) => {
	return index.name
})
// console.log(mapFilterUsuarios)
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
//EXERCICIO 6
type TiposContas = {
	cliente: string
	saldoTotal: number
	debitos: number[]
}
const contas: TiposContas[] = [
	{ cliente: 'João', saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: 'Paula', saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: 'Pedro', saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: 'Luciano', saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: 'Artur', saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: 'Soter', saldoTotal: 1200, debitos: [] },
]
const FilterContasReduce = contas.filter((index) => {
	return index.debitos
})
// let valorInicial = 0
// const reduceFilter = FilterContasReduce.reduce((acumulador, 0)=>
// )
// for (let i = 0; i < FilterContasReduce.length; i++) {
// 	valorInicial = +FilterContasReduce[i]
// }
// console.log(valorInicial)
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//EXERCICIO 7
const listaDeCompras = [
	{ nome: 'MacMugffin', quantidade: 37, valorUnitario: 51.04 },
	{ nome: 'Vassoura voadora', quantidade: 56, valorUnitario: 210.0 },
	{ nome: 'Laço da verdade', quantidade: 32, valorUnitario: 571.5 },
	{ nome: 'O precioso', quantidade: 1, valorUnitario: 9181.923 },
	{ nome: 'Caneta de 250 cores', quantidade: 123, valorUnitario: 17 },
	{ nome: 'Plumbus', quantidade: 13, valorUnitario: 140.44 },
	{ nome: 'Pokebola', quantidade: 200, valorUnitario: 99.9915 },
]
const ajustaPreco = (preco: number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return 'R$ ' + valorAjustado
}
console.log(ajustaPreco)
