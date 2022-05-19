// ---------------------------EXERCÍCIO DE INTERPRETAÇÃO-------------------------------
let valor = 0
for (let i = 0; i < 5; i++) {
	valor += i
}
console.log(valor)
//ele ta criando um loop
//10

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
	if (numero > 18) {
		console.log(numero)
	}
}
//[19, 21, 23, 25, 27, 30]
//

const quantidadeTotal = Number(prompt('Digite a quantidade de linhas: '))
let quantidadeAtual = 0
while (quantidadeAtual < quantidadeTotal) {
	let linha = ''
	for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
		linha += '*'
	}
	console.log(linha)
	quantidadeAtual++
}
// *
// **
// ***
// ****

// ---------------------------EXERCÍCIO DE ESCRITA DE CODIGO--------------------------------------

const bichoEstimacao = Number(
	prompt('Quantos bichinhos de estimação você tem?')
)
if (bichoEstimacao === 0) {
	console.log('Que pena! Você pode adotar um pet!')
} else {
	const arrayNumero = []
	while (bichoEstimacao > 0) {
		const nomesBichos = Number(`promptDigite o nome deles`)
		bichoEstimacao.push(arrayNumero)
	}
}

//-------------Não consegui acabar, vou enviar e tentar continuar amanhã----------------
