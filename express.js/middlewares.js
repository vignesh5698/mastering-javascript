const express = require('express');
const app = express();

const logger = (req, res, next) => {
  const params = req.query;
  console.log('LOGGED', params);
  next();
}

app.get('/', (req, res, next) => {
  console.log('From / route', req.params, req.query);
  res.send('<h1>Hello World...!!!</h1>')
  next()
});

app.use(logger);
app.listen(3000, () => {
  console.log('Server listening on port 3000...');
});