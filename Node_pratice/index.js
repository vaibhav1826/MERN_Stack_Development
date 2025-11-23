const express = require('express');
const cookieParser = require('cookie-parser');
const router= require('./app');
const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());  

app.get('/',router);

app.post('/',router);

app.get('/getcookie',router);

app.get('/clearcookie',router);

app.listen(3001,(req,res)=>{
    console.log("Server is running on port 3001");
});

