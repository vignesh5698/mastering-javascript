const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url)
  const url = req.url;
  res.emit('data', 'Hello boys....!!!');
  res.statusCode = 200;
  res.end('<h1>Hello World!</h1>')
});


server.listen(port, () => {
  console.log('Server running on port :', port);
});