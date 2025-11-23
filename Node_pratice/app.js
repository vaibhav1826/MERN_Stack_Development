const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.get('/', (req, res) => {
    res.send(`
        <h1> Lovely Professional University </h1>
        <form action='/' method='POST'>
            <input type='text' name='username' placeholder='Enter your name' />
            <input type='number' name='age' placeholder='Enter your age' />
            <input type='number' name='marks' placeholder='Enter your marks' />
            <button type='submit'> Submit </button>
        </form>
    `);
});

router.post(
    '/',
    [
        body("username").trim().isLength({ min: 3 }).withMessage("Name must be at least 3 characters"),
        body("age").isInt({ min: 15, max: 50 }).withMessage("Age must be between 15 and 50"),
        body("marks").isFloat({ min: 0, max: 500 }).withMessage("Marks must be between 0 and 500")
    ],
    (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).send(errors.array());
        }

        const { username, age, marks } = req.body;

        // ⭐ STORE DATA IN COOKIE
        res.cookie("studentData", {
            username,
            age,
            marks
        }, { maxAge: 60000 });  // 1 minute cookie

        res.send(`
            <h1> Your Details are as follows: </h1>
            <p> Name : ${username} </p>
            <p> Age : ${age} </p>
            <p> Marks : ${(marks / 500) * 100}%</p>
            <br> <a href="/getcookie">Show saved cookie</a>
            <br> <a href="/clearcookie">Clear cookie</a>
        `);
    }
);

// ⭐ ROUTE TO READ COOKIE
router.get('/getcookie', (req, res) => {
    res.send(req.cookies.studentData || "No cookie found!");
});

router.get('/clearcookie',(req,res)=>{
    res.clearCookie('studentData');
    res.send("Cookie cleared!");
})

module.exports = router;
