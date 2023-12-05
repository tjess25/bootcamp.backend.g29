const User = require('../models/users')
const jwt = require('../utils/jwt')

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
    login: async (req, res, next) => {
        try {
            let user = await User.findOne({email: req.body.email})

            if (user.password != req.body.password) {
               next({status: 401, send: {msg: "Password incorrecto"}}) 
            }
            //delete user.password
            let token = jwt.create(user)
            next({status: 200, send: {msg: "Acceso autorizado", token: token}})
        } catch (error) {
            next({status: 401, send: {msg: "Acceso no autorizado", err: error}})
        }
    }
}