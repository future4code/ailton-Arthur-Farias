// //------------------EXERCÍCIO DE INTERPRETAÇÃO---------------------
// const usuarios = [
// 	{ nome: 'Amanda Rangel', apelido: 'Mandi' },
// 	{ nome: 'Laís Petra', apelido: 'Laura' },
// 	{ nome: 'Letícia Chijo', apelido: 'Chijo' },
// ]

// const novoArrayA = usuarios.map((item, index, array) => {
// 	console.log(item, index, array)
// })
// // Vai ser impresso o array usuário

// const usuarios = [
// 	{ nome: 'Amanda Rangel', apelido: 'Mandi' },
// 	{ nome: 'Laís Petra', apelido: 'Laura' },
// 	{ nome: 'Letícia Chijo', apelido: 'Chijo' },
// ]

// const novoArrayB = usuarios.map((item, index, array) => {
// 	return item.nome
// })

// console.log(novoArrayB)
// //Vai imprimir apenas os nomes

// const usuarios = [
// 	{ nome: 'Amanda Rangel', apelido: 'Mandi' },
// 	{ nome: 'Laís Petra', apelido: 'Laura' },
// 	{ nome: 'Letícia Chijo', apelido: 'Chijo' },
// ]

// const novoArrayC = usuarios.filter((item, index, array) => {
// 	return item.apelido !== 'Chijo'
// })

// console.log(novoArrayC)
// //Ele vai tirar o array [2], apenas o da leticia chijo

// -----------------------EXERCÍCIO DE ESCRITA----------------------

// const pets = [
// 	{ nome: 'Lupin', raca: 'Salsicha' },
// 	{ nome: 'Polly', raca: 'Lhasa Apso' },
// 	{ nome: 'Madame', raca: 'Poodle' },
// 	{ nome: 'Quentinho', raca: 'Salsicha' },
// 	{ nome: 'Fluffy', raca: 'Poodle' },
// 	{ nome: 'Caramelo', raca: 'Vira-lata' },
// ]
// //---1) A
// const arrayDogs = pets.map((item, tipo, array) => {
// 	return item.nome
// })
// console.log(arrayDogs)

// ---1) B
// const arrayDogs = pets.filter((item, tipo, array) => {
// 	return item.raca === 'Salsicha'
// })
// console.log(arrayDogs)

// ---1) C
// const arrayDogs = pets.filter((item, tipo, raca) => {
// 	if (item.raca === 'Poodle') {
// 		console.log(
// 			`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
// 		)
// 	}
// })
// console.log(arrayDogs)

// const produtos = [
// 	{ nome: 'Alface Lavada', categoria: 'Hortifruti', preco: 2.5 },
// 	{ nome: 'Guaraná 2l', categoria: 'Bebidas', preco: 7.8 },
// 	{ nome: 'Veja Multiuso', categoria: 'Limpeza', preco: 12.6 },
// 	{ nome: 'Dúzia de Banana', categoria: 'Hortifruti', preco: 5.7 },
// 	{ nome: 'Leite', categoria: 'Bebidas', preco: 2.99 },
// 	{ nome: 'Cândida', categoria: 'Limpeza', preco: 3.3 },
// 	{ nome: 'Detergente Ypê', categoria: 'Limpeza', preco: 2.2 },
// 	{ nome: 'Vinho Tinto', categoria: 'Bebidas', preco: 55 },
// 	{ nome: 'Berinjela kg', categoria: 'Hortifruti', preco: 8.99 },
// 	{ nome: 'Sabão em Pó Ypê', categoria: 'Limpeza', preco: 10.8 },
// ]

// //---2) A
// const apenasNome = produtos.map((item, tipo, valor, array) => {
// 	return item.nome
// })
// console.log(apenasNome)

// ---2) B
// const descontoProdutos = produtos.map((item, tipo, valor, array) => {
// 	return { nome: item.nome, preco: item.preco * 0.95 }
// })
// console.log(descontoProdutos)

// ---2) C
// const apenasBebida = produtos.filter((item, tipo, valor, array) => {
// 	return item.categoria === 'Bebidas'
// })
// console.log(apenasBebida)

// ---2) D
// const apenasYpe = produtos.filter((item, tipo, valor, array) => {
// 	return item.nome.includes('Ypê')
// })
// console.log(apenasYpe)

// ---2) E
// const apenasYpe = produtos
// 	.filter((item, tipo, valor, array) => {
// 		return item.nome.includes('Ypê')
// 	})
// 	.map((produtos) => {
// 		return `compre ${produtos.nome} por ${produtos.preco}`
// 	})
// console.log(apenasYpe)
