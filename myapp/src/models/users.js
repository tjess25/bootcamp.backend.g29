const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String,
    }, 
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Debe ingresar un correo valido']
    },
    password: {
        type: String,
        required: [true, 'El password es requerido'],
        match: /^(.){8,300}$/
    },
    gender: {
        type: String,
        enum: ['Female', 'Male']
    },
});

const Users = mongoose.model("Users", userSchema)
module.exports = Users
