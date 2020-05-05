const express = require('express');
const app = express();
const path = require('path');

app.locals.title = 'FirstApp';

app.get('/', (request, response) => {
  response.send('<h1>Hello World...!!!</h1>'+app.locals.title);
});

app.get('/users/:userId/books/:bookId', (request, response) => {
  const params = request.params;
  response.send('<h1>Users...!!!</h1>' + JSON.stringify(params));
});

app.get('/ab?cd', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/distance/:from-:to', (request, response) => {
  response.json(request.params);
});

app.get('/cricket/:field.:playerName', (request, response) => {
  response.json(request.params);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000...');
});