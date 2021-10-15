

const vinho =() => {
  if (
    process.argv[2]!== undefined &&
    process.argv[3]!== undefined &&
    process.argv[4]!== undefined
  ){
    switch (process.argv[2]) {
      case "add":
        return +process.argv[3] + +process.argv[4];
      case "sub":
        return +process.argv[3] - +process.argv[4];
      case "mult":
        return +process.argv[3] * +process.argv[4];
      case "div":
        return +process.argv[3] / +process.argv[4];
    }
  }else {
    return `Por favor, insira os parâmetros necessários.`
  }
 
}

console.log(vinho());