// learning how to decompress the file

const fs=require('fs'); // core module
const zlib=require('zlib'); // core module

const readstream= fs.createReadStream('read.txt.gz');
const writestream= fs.createWriteStream('read_decompress.txt');

const gunzip=zlib.createGunzip(); // this function is used for decompressing the file 
 
// pipe -> read -> decompress -> write   
readstream.pipe(gunzip).pipe(writestream);
console.log("file is decompressed");