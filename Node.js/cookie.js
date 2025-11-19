const express=require('express');
const app =express();
const cookieparser =require('cookie-parser');

app.use(cookieparser());

app.get('/',(req,res)=>{
    res.cookie('username','john_doe',{maxAge:900000,httpOnly:true});
    res.send('Cookie has been set');
});
app.get('/getcookie',(req,res)=>{
    const username = req.cookies['username'];
    res.send(`Username from cookie: ${username}`);
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
}); 