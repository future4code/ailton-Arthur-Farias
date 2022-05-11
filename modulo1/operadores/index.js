//QUESTÃO 1
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log('a. ', resultado) //FALSE

resultado = bool1 && bool2 && bool3
console.log('b. ', resultado) //FALSE

resultado = !resultado && (bool1 || bool2)
console.log('c. ', resultado) //TRUE

console.log('d. ', typeof resultado) //BOOLEAN

//QUESTÃO 2
let primeiroNumero = prompt('Digite um numero!')
let segundoNumero = prompt('Digite outro numero!')

const soma = primeiroNumero + segundoNumero

console.log(soma) //Vai ser impresso concatenação dos dois;
//O erro está no "prompt", pois, devia ter um "number" ou um "+" para transformar
//numero;

//QUESTÃO 3
//A solução seria colocar um "number" ou um "+" antes do prompt, pois ele ta em
//string e para realizar a soma precisa estar em numero

//PARTE 2 // QUESTÃO 1 A
let idadeUsuáio = Number(prompt('Qual a sua idade?'))

//QUESTÃO 1 B
let idadeAmg = Number(prompt('Qual a idade do seu amigo(a)?'))

//QUESTÃO 1 C
const resultadoMaior = idadeUsuáio > idadeAmg
const resultadoMenor = idadeUsuáio < idadeAmg
console.log(
	'Sua idade é maior do que a do seu amigo(a)?',
	resultadoMaior && resultadoMenor
)

//QUESTÃO 1 D
let diferençaIdade = idadeUsuáio - idadeAmg
console.log('A diferença de idade é:', diferençaIdade)

//QUESTÃO 2 A
let numeroPar = Number(prompt('Insira um numero PAR:'))

//QUESTÃO 2 B
let resultadoImparPar = numeroPar % 2
console.log('O resto é', resultadoImparPar)

//QUESTÃO 2 C
//O resto é sempre 0, pois ele é par, se colocar um numero impar ele vai dar
//resto 1;

//QUESTÃO 2 D
//Se colocar um numero impar ele vai dar resto 1;

//QUESTÃO 3 A
let idadeAnos = Number(prompt('Qual sua idade (ANOS)'))
let idadeMeses = idadeAnos * 12
console.log('Sua idade (em meses) é', idadeMeses, 'meses.')

//QUESTÃO 3 B
let idadeDias = idadeMeses * 30
console.log('Sua idade (em dias) é', idadeDias, 'dias.')

//QUESTÃO 3 C
let idadeHoras = idadeDias * 24
console.log('Sua idade (em horas) é', idadeHoras, 'horas.')

//QUESTÃO 4
let numero1 = Number(prompt('Diga um numero:'))
let numero2 = Number(prompt('Diga outro numero:'))

let testeMaior = numero1 > numero2
let testeIgual = numero1 === numero2
let testeDivisivel1 = numero1 % numero2
let testeDivisivel2 = numero2 % numero1
let resultadoTesteDivisivel = testeDivisivel1 === 0
let resultadoTesteDivisivel2 = testeDivisivel2 === 0

console.log('O primeiro numero é maior que segundo?', testeMaior)
console.log('O primeiro numero é igual ao segundo?', testeIgual)
console.log(
	'O primeiro numero é divisível pelo segundo?',
	resultadoTesteDivisivel
)
console.log(
	'O segundo numero é divisível pelo primeiro?',
	resultadoTesteDivisivel2
)
