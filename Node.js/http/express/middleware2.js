const express = require('express');
const app = express();

const time = (req, res, next) => {
  console.log('----------------', Date.now());
  next();
}

const lastMiddleware = (req, res, next) => {
  console.log('Last middleware called....')
  next();
  // throw new Error('BROKEN');
}

app.get('/', (req, res, next) => {
  setTimeout(() => {
    res.send('Hello world');
    next('route');
  }, 1000);
});

app.use(time);
app.use(lastMiddleware);

app.use((err, req, res, next) => {
  console.error(err.stack);
})

app.listen(3000, () => {
  console.log('Server running at 3000');
});
