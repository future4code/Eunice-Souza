const bool1 = true
const bool2 = false
const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)
// a é  o resultado e false
resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado 
