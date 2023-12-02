const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    seller: {
        type: mongoose.Types.ObjectId,
        require: true,
        ref: "Users"
    }
});

const Products = mongoose.model("Products", productSchema)
module.exports = Products
