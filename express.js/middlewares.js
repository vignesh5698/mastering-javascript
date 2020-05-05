const express = require('express');
const app = express();

const logger = (req, res, next) => {
  const params = req.params;
  console.log('LOGGED', params);
}

app.get('/', (req, res, next) => {
  console.log('From / route', req.params);
  res.send('<h1>Hello World...!!!</h1>')
  next()
});

app.use(logger);
app.listen(3000, () => {
  console.log('Server listening on port 3000...');
});