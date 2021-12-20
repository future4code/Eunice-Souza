const mysql = require("mysql")

const Schema = new mysql.Schema({
    productsName: {
        type: String,
        required: true
    },

    productPrice: {
        type: Number,
        required: true
    },

    productQuantity: {
        type: Number,
        require: true
    },

    productImag: {
        type: String
    },

    userName: {
        type:mysql.Schema.Types.ObjectId,
        ref: "user"
    },
})
export default mysql.model("Product", Schema)