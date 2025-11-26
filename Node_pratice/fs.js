const http=require('http');
const fs=require('fs');

const server = http.createServer((req,res)=>{
    // for writing in files
    // fs.writeFile('example.txt','Hello, this is a sample text file created using Node.js fs module.',(err,data)=>{
    // if(err){
    //     console.log('Error writing file');
    // }
    // });

    // // for reading from files
    // fs.readFile('example.txt','utf-8',(err,data)=>{
    //     if(err){
    //         console.log('Error reading file');
    //     }
    //     res.end(data);
    // });

    // for appending data to files
    // fs.appendFile('example.txt','\n this is new line added to the file',(err,data)=>{
    //     if(err){
    //         console.log('Error appending file');
    //     }
    // })

    // for deleting data from files
    // fs.unlink('example.txt',(err)=>{
    //     if(err){
    //         console.log('Error deleting file');
    //     }
    // });
});

server.listen(3001,()=>{
    console.log('Server is listening on port 3001');
});
