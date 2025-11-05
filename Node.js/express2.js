const express = require('express');// import module
const app = express(); //object of express
const port = 3002;

app.get('/', (req, res) => {
  res.send(`
    <form action="/add" method="GET">
    <input type="number" name="num1" placeholder="Enter first number" required />
    <input type="number" name="num2" placeholder="Enter second number" required />
    <button type="submit">Compute</button>
    </form>
    `);
});

//handle get request 
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const sum = num1 + num2;
    const sub = num1-num2;
    const mul= num1*num2;
    const div= num1/num2;
    res.send(`The sum of ${num1} and ${num2} is ${sum}
        <br> The subtraction of ${num1} and ${num2} is ${sub}   
        <br> The multiplication of ${num1} and ${num2} is ${mul}
        <br> The division of ${num1} and ${num2} is ${div}`);
});




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});