const http = require("http"); //core module 
const Math=require('./app'); // local module

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html'); // setting header
    res.statusCode=200; // setting status code 
    res.end('<h1>Hello World </h1>'); 
});

console.log(Math.add(2,3));
console.log(Math.sub(5,3));



server.listen(3001,()=>{
    console.log(`server is running on port 3000`);
});