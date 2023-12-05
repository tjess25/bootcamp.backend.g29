const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET
const User = require('../models/users')

module.exports = {
    create: (data) => {
        let token = jwt.sign({_id: data._id}, JWT_SECRET, {expiresIn: 6000})
        return token
    },
    verify: (req, res, next) => {
        const token = req.headers['bearerauth']
        const dateNow = new Date()

        if (!token) {
           res.status(401).send({msg: "Usuario no autorizado"}) 
        }
        jwt.verify(token, JWT_SECRET, async (err, decode) => {
            if (err) res.status(401).send({msg: "Token invalido"})
            if (decode.exp < dateNow.getTime() / 1000) {
               res.status(401).send({msg: "Sesion expirada"}) 
            }
            req.loginUser = await User.findById(decode._id)
            next()
        })
    }
}