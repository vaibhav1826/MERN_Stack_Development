// learning about compressing the file 

const fs= require('fs'); // core module 
const zlib= require('zlib'); // core module

const readStream = fs.createReadStream('read.txt'); // for reading or checking
const writestream = fs.createWriteStream('read.txt.gz'); // for writing or making changes

const gzip = zlib.createGzip();// creating a method responsible for transforming the stream 
readStream.pipe(gzip).pipe(writestream); // read than compress than write file again

console.log("File is compressed");
