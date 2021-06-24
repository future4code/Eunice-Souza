    //   interpretaçao de codigo 01

// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" }
// ]

// const novoArrayA = usuarios.map((item, index, array) => {
//    console.log(item, index, array)
//    console.log(" Eu acho que vai ser Amanda Rangel", apelido: "Mandi")
// })


        // interpretaçao de codigo 02

        const usuarios = [
            { nome: "Amanda Rangel", apelido: "Mandi" },
            { nome: "Laís Petra", apelido: "Laura" },
            { nome: "Letícia Chijo", apelido: "Chijo" },
          ]
          
          const novoArrayB = usuarios.map((item, index, array) => {
             return item.nome
          })
          
          console.log(novoArrayB)