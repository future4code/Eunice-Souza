import {connection} from "../../index"


export default async function insertUsers(
    id:string,
    name:string,
    nickname:string,
    email:string
) {
    await connection.insert({
        id,
        name:'Eunice',
        nickname:'Souza',
        email: 'ejs.12@hotmail.com' 
    }).into('to_do_users')
}