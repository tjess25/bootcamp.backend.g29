const express = require('express')
const router = express.Router()
const users = './src/db/users.json'
const fs = require('fs')
const userController = require('../../controllers/users')

router.get('/getbyid/:id', userController.getById)

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

router.post('/', userController.post)

router.put('/', (req, res) => {
    res.status(201).send('Hello Word Put Router!')
})



module.exports = router

