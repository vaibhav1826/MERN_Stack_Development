const express = require('express');
const app = express();
const { body, validationResult } = require('express-validator');
const cookieSession = require('cookie-session');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ⭐ Use cookie-session instead of cookie-parser
app.use(
    cookieSession({
        name: 'session',
        keys: ['mySecretKey'],        // encryption
        maxAge: 60 * 1000             // 1 minute
    })
);

app.get('/', (req, res) => {
    res.send(`
        <form action='/submit' method='POST'>
            <input type="text" name="username" placeholder="Enter Username" />
            <input type="password" name="password" placeholder="Enter Password" />
            <button type="submit">Submit</button>
        </form>
        <br>
        <a href="/getsession">Read Session</a>
        <br>
        <a href="/clearsession">Clear Session</a>
    `);
});

app.post(
    '/submit',
    [
        body("username")
            .trim()
            .isLength({ min: 5 })
            .withMessage("Username must be at least 5 characters long"),

        body("password")
            .isLength({ min: 5 })
            .withMessage("Password must be at least 5 characters long")
    ],
    (req, res) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).send(error.array());
        }

        const { username, password } = req.body;

        // ⭐ Store inside session (encrypted cookie)
        req.session.data = { username, password };

        res.send(`
            Username: ${username}, Password: ${password}
            <br>
            <a href='/getsession'>Read Session</a>
        `);
    }
);

// ⭐ Read Session Data
app.get('/getsession', (req, res) => {
    if (!req.session.data) {
        return res.send("No session found!");
    }
    res.send(req.session.data);
});

// ⭐ Clear Session
app.get('/clearsession', (req, res) => {
    req.session = null;
    res.send("Session cleared!");
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
