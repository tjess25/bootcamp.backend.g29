//const users = './src/db/users.json'
//const fs = require('fs')
const Products = require('../models/products')

module.exports = {
    getById: async (req, res, next) => {
        const { id } = req.params
        //let products = await Products.findById(id).populate({path: "seller", select: "-_id first_name"}).select("-_id")
        let products = await Products.findById(id).populate("seller")
        if (!products) next({ status: 404, send: { msg: "Producto no encontrado" } })
        next({ status: 200, send: { msg: "Producto encontrado", data: products } })
    },
    post: async(req, res, next) => {
        try {
            let products = await Products.create(req.body)
            next({ status: 201, send: { msg: "Producto creado", data: products } }) 
        } catch (error) {
            next({ status: 400, send: { msg: "Producto no creado", err: error } })
        }
        
    }
}