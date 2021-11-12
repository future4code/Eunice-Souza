import { User } from "../../classes/User";
import { BaseDataBase } from "../BaseDataBase";

export class UserDataBase extends BaseDataBase {

    private static tableName = 'labecommerc_users'

    // tratar os resultados vindos do DB
    private toUser = (input: User) => new User(
        input.id,
        input.name,
        input.email,
        input.age
    )

    createUser = (user: User) => BaseDataBase
        .connection('UserDataBase')
        .insert(user)

    getUserByEmail = async (email: string) => {
        const [result] = await BaseDataBase
            .connection(UserDataBase.tableName)
            .where({ email })

            if (result) return this.toUser(result)
    }

    getAllUsers = async () => {
        const result = await BaseDataBase
                                        .connection(UserDataBase.tableName)
            return result.map(this.toUser)                            
    }
}