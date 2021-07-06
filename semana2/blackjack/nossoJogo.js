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

 console.log("bem vindo ao jogo de BlackJack!")
if(confirm("vamos iniciar uma nova jogada?")){
   let cartaDoUsuario = [comprarCarta(), comprarCarta()]
   if(cartaDoUsuario[0].valor && cartaDoUsuario[1].valor === 11){
      cartaDoUsuario = [comprarCarta(), comprarCarta()]

   }
   let somaCartaUsuario = cartaDoUsuario[0].valor + cartaDoUsuario[1].valor
   
   let computador = [comprarCarta(), comprarCarta()]
   if(computador[0].valor && computador[1].valor === 11){
      computador = [comprarCarta(), comprarCarta()]

   }
   let somaComputador = computador[0].valor + computador[1].valor

   console.log(`Usuário - cartas: ${cartaDoUsuario[0].texto} ${cartaDoUsuario[1].texto} - pontuação ${somaCartaUsuario}`)
   console.log(`Computador - cartas: ${computador[0].texto} ${computador[1].texto} - pontuação ${somaComputador}`)



   if(somaCartaUsuario > somaComputador){
      console.log("usuario ganha")
   } else if(somaCartaUsuario < somaComputador){
      console.log("computador ganha")
   } else {
      console.log("empate")
   }


}else{
   console.log("o jogo acabou")
} 
 