const http = require('http');

const server= http.createServer((req,res)=>{
    if(req.url==='/' && req.method==='GET'){
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(`<h1>Welcome to the Home Page</h1><p>${req.url}</p><p>Method: ${req.method}</p><p>Header: ${JSON.stringify(req.headers)}</p>`);
        res.end();
    }
    else if(req.url==='/about' && req.method==='GET'){
        res.writeHead(200,{'Content-type':'text/html'});
        res.write('<h1>About Us</h1><p>This is the about page.</p>');
        res.end();
    }
    else{
        res.writeHead(404,{'Content-type':'text/html'});
        res.write('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
        res.end();
    }
});

server.listen(3001,()=>{
    console.log('Server is running on port 3001');
});

