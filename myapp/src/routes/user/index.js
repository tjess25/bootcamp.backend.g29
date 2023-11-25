const express = require('express')
const router = express.Router()
const users = './src/db/users.json'
const fs = require('fs')

router.get('/getbyid/:id',  (req, res, next) => {
    const { id } = req.params
    console.log(id);
    //const id = req.params.id
    //const name = req.params.name
    //const email = req.params.email
    fs.readFile(users, 'utf-8', (err, users) => {
        if (err) next({status: 400, send: {msg: "No se pudo abrir el archivo", err: err}}) 
        users = JSON.parse(users)
        
        users.forEach(u => {
            if (u.id == id) {
                next({status: 200, send: {msg: "Usuario encontrado", data: u}})
            }
        });
        next({status: 404, send: {msg: "Usuario no encontrado"}})
        //return res.status(404).send({msg: "Usuario no encontrado"})
    })
})

router.get('/', (req, res) => {
    console.log(req.params); 
    res.status(200).send(`Hello Word Get Router Params ${req.params.id}!`)
})

router.delete('/', (req, res) => {
    res.status(200).send('Hello Word Delete Router!')
})

router.use((req, res, next) => {
    if (!req.body.password || !req.body.email) {
      res.status(400).send({msg: "El Email y Password son requeridos"})
    }
    next()
})

router.post('/', (req, res) => {
    console.log(req.body);
    res.status(201).send(`Hello ${req.body.name}`)
})

router.put('/', (req, res) => {
    res.status(201).send('Hello Word Put Router!')
})



module.exports = router

