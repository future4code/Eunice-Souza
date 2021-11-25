import knex  from "knex";


export const connection = knex({ // Estabelece conexão com o banco
    client: "mysql",
    connection: {
     host: "35.226.146.116",
     port: 3306,
     user: "aluno",
     password: "ahninanab",
     database: "turma-aluno",
     multipleStatements: true
        
    }
})
       
