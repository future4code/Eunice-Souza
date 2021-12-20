const mysql = require("mysql")

const Schema = new mysql.Schema({
    products: [{
        type: mysql.Schema.Types.ObjectId,
        ref: "Procuct"
    }],
    usename: {
        type: mysql.Schema.Types.ObjectId,
        required: "User"
    },
    address: {
        street: {
            type: String,
            riquired: true
        },
        number: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        }
    },
    payment: {
        card: {
            type: String,

        },
        cvc: {
            type: String,

        }
    }
})
export default mysql.cart("Cart", Schema)