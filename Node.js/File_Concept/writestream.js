const fs= require('fs');
const  write=fs.createWriteStream("read.txt");
write.write("Hello world again from writestream");
write.end();
