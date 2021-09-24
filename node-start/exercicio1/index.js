
// Podemos acessar os parâmetros passados na linha de comando para o Node, através da sintaxe de posição em uma array.

const chalk = require('chalk')

if(process.argv[2]!== undefined && process.argv[3]!== undefined ) {
   return (console.log(`Olá, ${process.argv[2]} ! Você tem ${process.argv[3]} anos.`),
    console.log(`Olá, ${process.argv[2]}! Você tem ${+(process.argv[3])} anos. Em sete anos você terá ${+(process.argv[3]) + 7}`))  
} else{
    return console.log(chalk.red("Esperava 2 parâmetros só recebi um."))
}




