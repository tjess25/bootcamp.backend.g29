//const users = './src/db/users.json'
//const fs = require('fs')
const Users = require('../models/users')

module.exports = {
    getById: async (req, res, next) => {
        /*const { id } = req.params
        console.log(id);
        //const id = req.params.id
        //const name = req.params.name
        //const email = req.params.email
        fs.readFile(users, 'utf-8', (err, users) => {
            if (err) next({ status: 400, send: { msg: "No se pudo abrir el archivo", err: err } })
            users = JSON.parse(users)

            users.forEach(u => {
                if (u.id == id) {
                    next({ status: 200, send: { msg: "Usuario encontrado", data: u } })
                }
            });
            next({ status: 404, send: { msg: "Usuario no encontrado" } })
            //return res.status(404).send({msg: "Usuario no encontrado"})
        })*/
       
        /*Users.findById(id).then((data) => {
            next({ status: 200, send: { msg: "Usuario encontrado", data: data } })
        }).catch((err) => {
            next({ status: 404, send: { msg: "Usuario no encontrado", err: err } })
        })*/
       /*Users.findById(id, (data, err) => {
            if (err) next({ status: 404, send: { msg: "Usuario no encontrado" } })
            next({ status: 200, send: { msg: "Usuario encontrado", data: data } })
        })*/
        const { id } = req.params
        let users = await Users.findById(id)
        if (!users) next({ status: 404, send: { msg: "Usuario no encontrado" } })
        next({ status: 200, send: { msg: "Usuario encontrado", data: users } })
    },
    post: async(req, res, next) => {
        try {
            let user = await Users.create(req.body)
            next({ status: 201, send: { msg: "Usuario creado", data: user } }) 
        } catch (error) {
            next({ status: 400, send: { msg: "Usuario no creado", err: error } })
        }
        
    }
}