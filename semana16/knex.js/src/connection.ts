import knex from "knex";
import dotenv from "dotenv"


dotenv.config()


export const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOsT,
        port: 3306,
        user: process.env.DB_user,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
        multipleStatements: true
    }
})