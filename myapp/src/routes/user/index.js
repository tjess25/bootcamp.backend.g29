const express = require('express')
const router = express.Router()
const users = './src/db/users.json'
const fs = require('fs')

router.get('/getbyid/:id',  (req, res) => {
    const { id } = req.params
    //const id = req.params.id
    //const name = req.params.name
    //const email = req.params.email
    fs.readFile(users, 'utf-8', (err, users) => {
        if (err) return res.status(400).send({msg: "No se pudo abrir el archivo", err: err})
        users = JSON.parse(users)
        
        users.forEach(u => {
            if (u.id == id) {
                return res.send({msg: "Usuario encontrado", data: u})
            }
        });
        return res.status(404).send({msg: "Usuario no encontrado"})
    })
})

router.get('/', (req, res) => {
    console.log(req.params); 
    res.status(200).send(`Hello Word Get Router Params ${req.params.id}!`)
})

router.post('/', (req, res) => {
    console.log(req.body);
    res.status(201).send(`Hello ${req.body.name}`)
})

router.put('/', (req, res) => {
    res.status(201).send('Hello Word Put Router!')
})

router.delete('/', (req, res) => {
    res.status(200).send('Hello Word Delete Router!')
})

module.exports = router

