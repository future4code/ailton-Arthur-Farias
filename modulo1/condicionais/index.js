// const respostaDoUsuario = prompt('Digite o número que você quer testar')
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
// 	console.log('Passou no teste.')
// } else {
// 	console.log('Não passou no teste.')
// }
// //Ele vai pedir um numero para o usuario e testar no if/else
// //4
// //3

// let fruta = prompt('Escolha uma fruta')
// let preco
// switch (fruta) {
// 	case 'Laranja':
// 		preco = 3.5
// 		break
// 	case 'Maçã':
// 		preco = 2.251
// 		break
// 	case 'Uva':
// 		preco = 0.3
// 		break
// 	case 'Pêra':
// 		preco = 5.5
// 	// BREAK PARA O ITEM c.
// 	default:
// 		preco = 5
// 		break
// }
// console.log('O preço da fruta ', fruta, ' é ', 'R$ ', preco)
// // Serve para o usuario digitar uma fruta e o swich "filtrar" e dizer o preço referente
// // ao case
// // O preço da fruta maçã, é R$2.25
// // O preço da fruta pêra é R$2.25, já que o "break" foi retirado ele parou no default

// const numero = Number(prompt('Digite o primeiro número.'))

// if (numero > 0) {
// 	console.log('Esse número passou no teste')
// 	let mensagem = 'Essa mensagem é secreta!!!'
// }

// console.log(mensagem)
// // A primeria linha pede um numero para o usuario
// // Esse numero passou no teste / O codigo nao vai da certo, pois nao tem um else
// // Vai ter um erro, o console.log deve estar dentro do else (que nao foi criado)

// const idadeUsuario = Number(prompt('Qual a sua idade?'))
// const podeDirigir = (maior18) => {
// 	if (maior18 >= 18) {
// 		console.log('Você pode dirigir!')
// 	} else {
// 		console.log('Você NÃO pode dirigir')
// 	}
// }
// podeDirigir(idadeUsuario)

// const matutino = 'M = MATUTINO'
// const vespertino = 'V = VESPERTINO'
// const noturno = 'N = NOTURNO'
// const turnoEstudo = prompt(
// 	`Digite a LETRA respectiva ao turmo em que você estuda:
// ${matutino}
// ${vespertino}
// ${noturno}`
// )
// const turnoEstudoMaiusculo = turnoEstudo.toUpperCase()
// const saudacao = (turno) => {
// 	if (turno === 'M') {
// 		console.log('Bom dia!')
// 	} else if (turno === 'V') {
// 		console.log('Boa Tarde!')
// 	} else if (turno === 'N') {
// 		console.log('Boa Noite!')
// 	} else {
// 		console.log(
// 			'Ops... algo deu errado... tente digitar novante! (Digite APENAS a letra respectiva ao seu turno'
// 		)
// 	}
// }
// saudacao(turnoEstudoMaiusculo)

// const matutino2 = 'M = MATUTINO'
// const vespertino2 = 'V = VESPERTINO'
// const noturno2 = 'N = NOTURNO'
// const turnoEstudo2 = prompt(
// 	`Digite a LETRA respectiva ao turmo em que você estuda:
// ${matutino2}
// ${vespertino2}
// ${noturno2}`
// )
// const turnoEstudoMaiusculo2 = turnoEstudo2.toUpperCase()
// const saudaçao2 = (turno2) => {
// 	switch (turno2) {
// 		case 'M':
// 			console.log('Bom Dia!')
// 			break
// 		case 'V':
// 			console.log('Boa Tarde!')
// 			break
// 		case 'N':
// 			console.log('Boa Noite!')
// 			break
// 		default:
// 			console.log(
// 				'Ops... algo deu errado... tente digitar novante! (Digite APENAS a letra respectiva ao seu turno'
// 			)
// 			break
// 	}
// }
// saudaçao2(turnoEstudoMaiusculo2)

// const genero = prompt('Qual o genero do filme que vocês iram assistir?')
// const precoIngresso = Number(prompt('Qual o valor do ingresso?'))
// const assistirOuNao = (duvidaGenero, duvidaIngresso) => {
// 	if (duvidaGenero === 'fantasia' && duvidaIngresso <= 15) {
// 		console.log('Bom Filme!')
// 	} else {
// 		console.log('Escolha outro filme :(')
// 	}
// }
// assistirOuNao(genero, precoIngresso)

//-------------DESALFIO 2---------------

const nomeUsuario = prompt('Digite seu nome completo:')
const internacional = 'IN = Internacional'
const domestico = 'DO = Domestico'
const tipoDeJogo = prompt(`Digite o tipo de jogo conforte demostrado abaixo: 
${internacional}
${domestico}`).toUpperCase
const semiFinal = 'SF = Semi-Final'
const decisao3lugar = 'DT = Terceiro Lugar'
const final = 'FI = Final'
const etapaDoJogo =
	prompt(`Digite a etapa para a compra conforme demostrado abaixo 
	${semiFinal}
	${decisao3lugar}
	${final}`).toUpperCase
const categoria = Number(prompt('Digite qual a categoria: 1 ao 4'))
const quantidade = Number(prompt('Digite o valor:'))
