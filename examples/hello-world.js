const http = require('node:http');

const hostname = '192.168.68.130'; //localhost
const port = 3001;

const server = http.createServer((req, res) => {
  //console.log(req);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<h1> Hola mundo </h1>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 