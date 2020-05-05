const express = require('express');
const app = express();

const authenticate = (req, res, next) => {
  console.log('User authenticated successfully');
  next();
}

app.all('*', authenticate);
app.all('/about', (req, res, next) => {
  console.log('/about route hitted');
  res.send('<h1>ABOUT</h1>')
});

app.get('/', (req, res, next) => {
  res.send('<h1>Hom3</h1>');
});

app.listen(3000, () => {
  console.log('Server running on port : 3000');
})