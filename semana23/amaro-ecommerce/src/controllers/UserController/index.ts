import User from "../../models/User"

// const User = require(../../models /User)

export class UserController {

    async createUser(req: Request, res: Response) {

        const bodyData = req.body

        try {

            const newUser = await User.create(bodyData)

        } catch (error) {


            return res.status(400).json(error)
        }

        return res.json(error)
        

    }
}
