const express = require('express');// import module
const app = express(); //object of express
const port = 3002;

app.get('/', (req, res) => {
  res.send(`
    <form action="/add" method="GET">
    <input type="text" name="name" placeholder="Enter Your Name" required />
    <input type="number" name="reg" placeholder="Enter Your Registration Number" required />
    <input type="number" name="num2" placeholder="Enter Your Marks" required />
    <button type="submit">Compute</button>
    </form>
    `);
});

//handle get request 
app.get('/add', (req, res) => {
    const name = req.query.name;
    const reg = req.query.reg;
    const num2 = parseFloat(req.query.num2);
    const result = num2 >= 40 ? 'Pass' : 'Fail';
    res.send(`<h1>Hello, ${name}!</h1>
              <p>Your Registration Number is: ${reg}</p>
              <p>Your Marks: ${num2}</p>
              <p>Status: ${result}</p>
              <a href="/">Go Back</a>`);
});




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});