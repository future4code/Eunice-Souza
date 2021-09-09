// INTERPRETAÇAO DE CODIGO

// // 01 
// let array
// console.log('a. ', array)
// // resposta: so foi declarado uma variavel como undefined

// array = null
// console.log('b. ', array)
// // resposta: foi atribuido um valor nulo para variavel array

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// // resposta: existe 11 elementos dentro da lista

// let i = 0
// console.log('d. ', array[i])
// // resposta: o console vai retornar o elemento na posiçao 0 que e igual a 3

// array[i+1] = 19
// console.log('e. ', array)
// // resposta: o lememnto 4 na posiçao 1 passa a ser 19

// const valor = array[i+6]
// console.log('f. ', valor)
// // resposta: o valor e igual o elemento da 6 posiçao que igual a 9

// // 02 
// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// // resposta: a frase tem 27 caracter e o A foi substituido pelo I, toda a frase ficou maiuscula

// ESCRITA DE CODIGO

// 01
// const nome = prompt('qual o seu nome?')
// const email = prompt('coloque seu email')
// const frase = `o e-mail ${email} foi cadastrado com sucesso. seja bem-vindo, ${nome}.`
// console.log(frase)

//  02 
// let minhasComidas = ['macarrao', 'arroz', 'pizza', 'lasanha', 'strogonoff']
// console.log(minhasComidas)
// let fraseMinhasComidas = `Essas são as minhas comidas preferidas:
// ${minhasComidas[0]}
// ${minhasComidas[1]}
// ${minhasComidas[2]}
// ${minhasComidas[3]}
// ${minhasComidas[4]}`
// console.log(fraseMinhasComidas)
// const comida = prompt('digite uma comida')
// minhasComidas[1] = comida
// console.log(minhasComidas)

// 03
let listaDeTarefas = []
const pergunta0 = prompt('qual a sua tarefa 0 hoje?')
const pergunta1 = prompt('qual a sua tarefa 1 hoje?')
const pergunta2 = prompt('qual a sua tarefa 2 hoje?')
listaDeTarefas = [pergunta0, pergunta1, pergunta2]
console.log(listaDeTarefas)
const tarefaRealizada = Number(prompt('listra de 0-2 qual tarefa foi feita'))
listaDeTarefas.splice(tarefaRealizada, 1)
console.log(listaDeTarefas)


