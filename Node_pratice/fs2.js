const fs=require('fs');

// // for reading stream data from file
// const read= fs.createReadStream('example3.txt','utf-8');
// read.on('data',chunk =>console.log(chunk));
// read.on('error',err=>console.log(err));

// //for writing stream data into file
// const write=fs.createWriteStream('example3.txt');
// write.write("This is first line\n");
// write.write("This is second line\n");
// write.write("This is third line\n");
// write.end();    

// for appending in stream data into file
// const append=fs.createWriteStream('example3.txt',{flags:'a'});
// append.write("This is fourth line\n");
// append.write("This is fifth line\n");
// append.write("This is sixth line\n");
// append.end();