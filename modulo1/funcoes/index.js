function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2)) // Vai multiplicar, fica = 10
console.log(minhaFuncao(10)) // Vai multiplicar, fica = 50
// Não iria aparecer nada, pois não esta imprimindo

let textoDoUsuario = prompt('Insira um texto')

const outraFuncao = function (texto) {
	return texto.toLowerCase().includes('cenoura')
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
//Vai deixar tudo minusculo e retornar true se for cenoura e false se não for

true
truse
false

function trocaNome() {
	console.log('Tenho 19 anos, moro em Natal e sou estudante')
}
trocaNome()

let nomeNovo = ['Arthur', '19', 'Natal', 'estudante']
function trocaNome2(nome, idade, endereço, profissao) {
	console.log(
		`Eu sou o ${nome}, tenho ${idade} anos, moro em ${endereço} e sou ${profissao} `
	)
}
trocaNome2.apply(null, nomeNovo)

function numeros(a, b) {
	let numeros = a + b
	return numeros
}
console.log(numeros(1, 4))

function numeros2(a, b) {
	let numeros2 = a >= b
	return numeros2
}
console.log(numeros2(1, 4))

function numero3(a) {
	let numero3 = a % 2 === 0
	return numero3
}
console.log(numero3(2))

let frase = 'TesTe'
function mensagem(texto) {
	let resultado = texto.length
	texto = texto.toUpperCase()
	return [resultado, texto]
}
console.log(mensagem(frase))
