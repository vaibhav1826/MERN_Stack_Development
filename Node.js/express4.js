const express = require('express');
const obj = new express();
const {body, validationResult} = require('express-validator')
obj.use(express.urlencoded({extended:true}));

obj.get('/', (req,res)=>{
    res.send(
        <form action="/valida"></form>
    )
})

obj.post('/validateData', [
    body('email').isEmail().trim().normalizeEmail().withMessage('email is not in correct fromat'),
    body('password').isLength({min:8}).withMessage("Password should be of minimum 8 length"),
    body('username').trim().isLength({min:5}).withMessage('username is not registered')],
    (req,res)=>{
        var errors = validationResult(req)
        if(!errors.isEmpty){
            res.jsons(errors);
        }else{
            res.send("Form validation successfully!");
        }
})