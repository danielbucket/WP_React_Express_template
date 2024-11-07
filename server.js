const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', (req,res) => {
  res.send(path.join(__dirname, 'dist', 'index.html'));
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})