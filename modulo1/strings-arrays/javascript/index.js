let array
console.log('a. ', array) // undefined

array = null
console.log('b. ', array) // null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // 11

let i = 0
console.log('d. ', array[i]) // 3

array[i + 1] = 19
console.log('e. ', array) // [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i + 6]
console.log('f. ', valor) // 9

const frase = prompt('Digite uma frase')

console.log(frase.toUpperCase().replaceAll('A', 'I'), frase.length)
// SUBI NUM ÔNIBUS EM MIRROCOS 27

let nomeUsuario = prompt('Digite seu nome:')
let emailUsuario = prompt('Digite seu Email:')
console.log(
	'O E-mail',
	emailUsuario,
	'foi cadastrado com sucesso. Seja bem vinda(o),',
	nomeUsuario
)

let comidaFavoritas = ['Pizza', 'Hamburguer', 'Lasanha', 'Feijão', 'Batata']
console.log(comidaFavoritas)
console.log(`Essas são as minhas comidas preferidas
${comidaFavoritas[0]}
${comidaFavoritas[1]}
${comidaFavoritas[2]}
${comidaFavoritas[3]}
${comidaFavoritas[4]}
`)

comidaFavoritas[1] = prompt('Digite sua comida favorita:')
console.log(comidaFavoritas)

let listaDeTarefas = []
listaDeTarefas[0] = prompt('Diga uma tarefa que você realiza no dia:')
listaDeTarefas[1] = prompt('Diga outra tarefa que você realiza no dia:')
listaDeTarefas[2] = prompt('Diga mais uma tarefa que você realiza no dia:')
//let respostas = [listaDeTarefas[1], listaDeTarefas[2], listaDeTarefas[3]]
console.log(listaDeTarefas)
let tarefaRealizada =
	prompt(`Digite que o numero referente ao o que você ja realizou:
0 = ${listaDeTarefas[0]}
1 = ${listaDeTarefas[1]}
2 = ${listaDeTarefas[2]}`)
listaDeTarefas.splice(tarefaRealizada, 1)
console.log(listaDeTarefas)
