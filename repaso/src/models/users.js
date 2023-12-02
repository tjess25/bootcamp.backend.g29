const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Ingresa un correo valido']
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'Writer',
        enum: ['Admin', 'Writer']
    }
})

const User = mongoose.model('Users', userSchema)

module.exports = User