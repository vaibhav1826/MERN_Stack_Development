const express = require('express');
const app = express();
const { body, validationResult } = require('express-validator');
const cookieParser = require('cookie-parser');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send(`
        <form action='/submit' method='POST'>
            <input type="text" name="username" placeholder="Enter Username" />
            <input type="password" name="password" placeholder="Enter Password" />
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post(
    '/submit',
    [
        body("username").trim().isLength({ min: 5 }).withMessage("Username must be at least 5 characters long"),
        body("password").isLength({ min: 5 }).withMessage("Password must be at least 5 characters long")
    ],
    (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send(errors.array());
        }

        const { username, password } = req.body;

        // Set cookie BEFORE sending response
        res.cookie("data", { username, password }, { maxAge: 60000 });

        res.send(`
            Username: ${username}, Password: ${password}
            <br>
            <a href='/setcookie'>Read Cookies</a>
            <a href='/clearcookie'>Read Cookies</a>
        `);
    }
);

app.get('/setcookie', (req, res) => {
    if (!req.cookies.data) {
        return res.send("No cookie found");
    }

    res.send(req.cookies.data);
});

app.get('/clearcookie',(req,res)=>{
    res.clearCookie('data');
    res.send("Cookie cleared");
})

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
