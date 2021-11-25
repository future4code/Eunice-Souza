import { User } from "../entities/User";
import { BaseDataBase } from "./BaseDataBase"



export class UserDataBase extends BaseDataBase {
    public async createUser(user: User): Promise<void> {
        try {
            await BaseDataBase.connection("lbn_user").insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole()
            });
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }

    }

    public async findUserByEmail(email: string): Promise<User> {
        try {
            const user = await BaseDataBase.connection("lbn_user")
                .select("*")
                .where({ email });

            return user[0] && User.toUserModel(user[0]);

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    public async getAllUsers(): Promise<User[]> {
        try {
            const users = await BaseDataBase.connection("lban_user").select(
                'id',
                'name',
                'email',
                'role'
            )
            return users.map((user => User.toUserModel(user)))
        } catch (error) {
            throw new Error(error.sqlMessage || error.message); 
        }
    }
}