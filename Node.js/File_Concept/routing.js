const http= require('http');

const server= http.createServer((req, res)=>{
    if(req.url==='/'){
        res.write("Hello from the home side");
        res.end();
    }
    else if(req.url==='/about'){
        res.write("Hello from the about side");
        res.end();
    }
    else if(req.url==='/contact'){
        res.write("Hello from the contact side");
        res.end();
    }
    else{
        res.write("404! Page not found");
        res.end();
    }
});

server.listen(3000, ()=>{
    console.log("Listening to the port 3000");
})