const express = require('express');
const app = express(); //object of express
const port = 3002;

app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});