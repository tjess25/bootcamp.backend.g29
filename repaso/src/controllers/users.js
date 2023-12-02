const User = require('../models/users')

module.exports = {
    getAll: async (req, res, next) => {
       next({status: 200, send: {msg: "Usarios", data: []}}) 
    },
    getById: async (req, res, next) => {
        next({status: 200, send: {msg: "Usario encontrado", data: {}}}) 
    },
    post: async (req, res, next) => {
        try {
            let user = await User.create(req.body)
            next({status: 201, send: {msg: "Usario creado", data: user}}) 
        } catch (error) {
            next({status: 400, send: {msg: "Usario no creado", err: error}})   
        }      
    },
    put: async (req, res, next) => {
        next({status: 200, send: {msg: "Usario actualizado", data: {}}}) 
    },
    delete: async (req, res, next) => {
        next({status: 200, send: {msg: "Usario eliminado", data: {}}}) 
    },
}