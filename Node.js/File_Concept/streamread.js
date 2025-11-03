const fs= require('fs');
const read= fs.createReadStream("example.txt","utf-8");
read.on("data",chunk=>console.log(chunk));