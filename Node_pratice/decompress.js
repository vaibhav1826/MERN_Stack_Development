const fs=require('fs');
const zlib=require('zlib');

const ReadStream= fs.createReadStream('example.txt.gz');
const writeStream= fs.createWriteStream('decompressed_example.txt');

const zgip=  zlib.createGunzip();

ReadStream.pipe(zgip).pipe(writeStream);

console.log("File Decompressed Successfully");