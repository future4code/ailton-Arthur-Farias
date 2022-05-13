// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
	// implemente sua lógica aqui
	return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
	// implemente sua lógica aqui
	const mensagem = prompt('Digite uma mensagem!')

	console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
	// implemente sua lógica aqui
	const altura = Number(prompt('Diga a altura!'))
	const largura = Number(prompt('Diga a largura!'))
	const areaDoRetangulo = altura * largura
	console.log(areaDoRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
	// implemente sua lógica aqui
	const anoAtual = Number(prompt('Diga o ano atual!'))
	const anoNascimento = Number(prompt('Diga o ano de nascimento!'))
	const idade = anoAtual - anoNascimento
	console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
	// implemente sua lógica aqui
	return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
	// implemente sua lógica aqui
	// "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
	const nome = prompt('Diga seu nome:')
	const idade = Number(prompt('Digite sua idade'))
	const email = prompt('Digite seu email:')
	console.log(
		`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
	)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
	// implemente sua lógica aqui
	const cor1 = prompt('Diga uma cor:')
	const cor2 = prompt('Diga outra cor:')
	const cor3 = prompt('Diga mais uma cor:')
	let arrayCor = [cor1, cor2, cor3]
	console.log(arrayCor)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
	// implemente sua lógica aqui
	string = string.toUpperCase()
	return string
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
	// implemente sua lógica aqui
	return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
	// implemente sua lógica aqui
	let resultado = string1.length === string2.length
	return resultado
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
	// implemente sua lógica aqui
	return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
	// implemente sua lógica aqui
	return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
	// implemente sua lógica aqui
	let primeiroArray = array[0]
	let ultimoArray = array.pop()
	array.push(primeiroArray) //coloca uma posiçao após o ultimo e coloca o conteudo que esta em parentese
	array[0] = ultimoArray

	return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
	// implemente sua lógica aqui
	string1 = string1.toUpperCase()
	string2 = string2.toUpperCase()
	let resultado = string1 === string2
	return resultado
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
	// implemente sua lógica aqui
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
	// implemente sua lógica aqui
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
	// implemente sua lógica aqui
}
