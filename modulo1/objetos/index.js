// const filme = {
// 	nome: 'Auto da Compadecida',
// 	ano: 2000,
// 	elenco: [
// 		'Matheus Nachtergaele',
// 		'Selton Mello',
// 		'Denise Fraga',
// 		'Virginia Cavendish',
// 	],
// 	transmissoesHoje: [
// 		{ canal: 'Telecine', horario: '21h' },
// 		{ canal: 'Canal Brasil', horario: '19h' },
// 		{ canal: 'Globo', horario: '14h' },
// 	],
// }

// console.log(filme.elenco[0]) //Matheus Nachtergaele
// console.log(filme.elenco[filme.elenco.length - 1]) //Virginia Cavendish
// console.log(filme.transmissoesHoje[2]) //Globo, 14h

// const cachorro = {
// 	nome: 'Juca',
// 	idade: 3,
// 	raca: 'SRD',
// }

// const gato = { ...cachorro, nome: 'Juba' }

// const tartaruga = { ...gato, nome: gato.nome.replaceAll('a', 'o') }

// console.log(cachorro) //Juca, 3, SRD
// console.log(gato) //Juba, 3, SRD
// console.log(tartaruga) //Jubo, 3, SRD
// //A sintaxe chama o objeto antes declaro, como no exemplo do "const gato" que ele repetiu
// //os objetos declados na "const cachorro"

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
// 	nome: 'Caio',
// 	idade: 23,
// 	backender: false,
// }

// console.log(minhaFuncao(pessoa, 'backender')) //false
// console.log(minhaFuncao(pessoa, 'altura')) //undefined. Não declarou a altura

// const pessoa = {
// 	nome: 'Arthur',
// 	apelidos: ['Tuts', 'thur', 'tuta'],
// }
// function novoApelido(troca) {
// 	console.log(
// 		`Eu sou a ${troca.nome}, mas pode me chamar de: ${troca.apelidos[1]}`
// 	)
// }
// novoApelido(pessoa)
// const novoObjeto = {
// 	...pessoa,
// 	apelidos: ['gago', 'rafa', 'tutu'],
// }
// novoApelido(novoObjeto)

// const pessoa = {
// 	nome: 'Arthur',
// 	idade: 19,
// 	profissao: 'Estudante',
// }
// function resultado(pessoa) {
// 	console.log([
// 		pessoa.nome,
// 		pessoa.nome.length,
// 		pessoa.idade,
// 		pessoa.profissao,
// 		pessoa.profissao.length,
// 	])
// }
// resultado(pessoa)

const carrinho = []
const fruta1 = {
	nome: 'banana',
	disponivel: true,
}
const fruta2 = {
	nome: 'pera',
	disponivel: true,
}
const fruta3 = {
	nome: 'uva',
	disponivel: true,
}
function mercado(fruta) {
	return carrinho.push(fruta)
}
mercado(fruta1)
mercado(fruta2)
mercado(fruta3)
console.log(carrinho)
