const User = require(../../models /User)

const UserController = {

    async createUser(req, res) {

        const bodyData = req.body

        try {

            const newUser = await User.create(bodyData)

        } catch (error) {


            return res.status(400).json(error)
        }



    }
}
export default UserController