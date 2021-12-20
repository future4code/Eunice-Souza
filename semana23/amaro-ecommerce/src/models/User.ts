const mysql = require("mysql")

const Schema = new mysql.Schema({
    usename: {
        type: String,
        required: true
    }
})
export default mysql.model("User",Schema)