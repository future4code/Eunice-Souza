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
  let altura = Number(prompt('qual altura?'))
  let largura = Number(prompt('qual largura?'))
  const area = altura*largura
  console.log(area)


}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt('ano atual?'))
  const anoNascimento =  Number(prompt('ano de nascimento?'))
  const idade = anoAtual - anoNascimento
  console.log(anoAtual - anoNascimento)  

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
   
  const imc = peso/(altura**2)
  return imc 
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  
  const nome = prompt('qual o seu nome ?')
  const idade = Number(prompt('qual a sua idade ?'))
  const email = prompt('qual o seu e-mail ?')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`) 

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt('qual sua cor favorita ?')
  const cor2 = prompt('qual sua cor favorita ?')
  const cor3 = prompt('qual sua cor favorita ?')
  let coresFavoritas = [cor1, cor2, cor3]
  console.log(coresFavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase() 

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  
   const quantidadesIngessos = custo / valorIngresso
   return quantidadesIngessos

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const tamnhoIgual = string1.length === string2.length
  return tamnhoIgual
 
 

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const primeiroElemento = array[0]
  return primeiroElemento

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const ultimoElemento = array.length - 1
  return ultimoElemento

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // const primeiroElemento = retornaPrimeiroElemento(array)
  // const ultimoElemento = retornaUltimoElemento(array)
  
  // array[0] = ultimoElemento
  // array[array.length - 1] = primeiroElemento
  // return array
  const primeiroElemento = retornaPrimeiroElemento(array)
  const ultimoElemento = retornaUltimoElemento(array) 

  array[0] = ultimoElemento
  array[array.length - 1] = primeiroElemento
return array


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

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