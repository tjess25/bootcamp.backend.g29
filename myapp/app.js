// routes
const userRoutes = require('./src/routes/user/index')


const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

/*
const server = http.createServer((req, res) => {
  //console.log(req);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<h1> Hola mundo </h1>`);
});
*/

app.get('/', (req, res) => {
    res.send('Hello World!')
})

/*app.get('/user', (req, res) => {
  res.status(200).send('Hello Word Get!')
})

app.post('/user', (req, res) => {
  res.status(201).send('Hello Word Post!')
})

app.put('/user', (req, res) => {
  res.status(201).send('Hello Word Put!')
})

app.delete('/user', (req, res) => {
  res.status(200).send('Hello Word Delete!')
})*/

app.use('/user', userRoutes)
//app.use('/product', producRoutes)




/*
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 
*/

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})