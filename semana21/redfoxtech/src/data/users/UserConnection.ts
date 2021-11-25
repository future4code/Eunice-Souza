import { getAllUsers } from "../../endpoints/getAllUsres";
import { BaseDatabase } from "../baseDatabase/connection";


getAllUsers = async(req: Request, res: Response) => {
    const result = await BaseDatabase
        .connection(BaseDatabase.tableName)
    return result.map(this.toUser)
}