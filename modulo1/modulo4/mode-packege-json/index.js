//EXERCICIO 1
console.log(
	`Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos. Em sete anos você terá ${process.argv[4]}`
)
//------------------------------------------------------------------------
//--------------------------------------------------------------------------
//EXERCICIO 2
const operacao = process.argv[2]
const numero1 = Number(process.argv[3])
const numero2 = Number(process.argv[4])
switch (operacao) {
	case 'add':
		console.log('Resposta', numero1 + numero2)
		break
	case 'sub':
		console.log('Resposta', numero1 - numero2)
		break
	case 'mult':
		console.log('Resposta', numero1 * numero2)
		break
	case 'div':
		console.log('Resposta', numero1 / numero2)
		break
}
//---------------------------------------------
//---------------------------------------------
//EXERCICIO 3
const tarefas = ['lavar louça']
const novaLista = tarefas.push(process.argv[2])
console.log('Tarefas: ', tarefas)
//Não consegui fazer com que salve o anterior, se eu coloco mais de 1 ele apaga
//---------------------------------------------
//---------------------------------------------
//---------------------------------------------
//EXERCICIO 4
//Não deu tempo para fazer a quarta
