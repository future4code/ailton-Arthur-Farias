/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log(`Boas vindas ao jogo de BlackJack`)

if (confirm(`Quer iniciar uma nova jogada?`)) {
	console.log(`Rodada iniciando...`)
} else {
	console.log(`O jogo acabou`)
}

const cartaUsuario = comprarCarta()
const cartaUsuario2 = comprarCarta()
const cartaComputador = comprarCarta()
const cartaComputador2 = comprarCarta()
const cartaUsuarioValor = cartaUsuario.valor + cartaUsuario2.valor
const resultadoUsuario = console.log(
	`Usuário - cartas ${
		cartaUsuario.texto + cartaUsuario2.texto
	} - ${cartaUsuarioValor}`
)
const cartaComputadorValor = cartaComputador.valor + cartaComputador2.valor
const resultadoComputador = console.log(
	`Computador - cartas ${
		cartaComputador.texto + cartaComputador2.texto
	} - ${cartaComputadorValor}`
)
if (cartaUsuarioValor > cartaComputadorValor) {
	console.log('Usuario ganhou!')
} else {
	console.log('Computador ganhou!')
}
