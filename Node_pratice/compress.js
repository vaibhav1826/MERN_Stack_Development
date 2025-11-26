const fs= require('fs');
const zlib =require('zlib');

const ReadStream= fs.createReadStream('example.txt');
const WriteStream = fs.createWriteStream('example.txt.gz');

const gcip= zlib.createGzip();

ReadStream.pipe(gcip).pipe(WriteStream);
console.log("File compressed successfully");