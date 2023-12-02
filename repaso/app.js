require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const routes = require('./src/routes/index')
const db = require('./src/utils/db')
const app = express()
const port = process.env.PORT || 3000

db.connect()
app.use(express.json())
app.use(morgan('dev'))

app.use('/', routes)

app.use((resp, req, res, next) => {
    res.status(resp.status).send(resp.send)
})

app.listen(port, () => {
    console.log('Server is listening in port ' + port)
})