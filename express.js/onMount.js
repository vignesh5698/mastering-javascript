const express = require('express');
const app = express();
const admin = express()

admin.on('mount', function (parent) {
  console.log('Admin Mounted')
  console.log(parent) // refers to the parent app
})

admin.get('/', function (req, res) {
  res.send('Admin Homepage')
})

app.use('/admin', admin)