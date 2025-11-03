// reading a file using Node.js fs module


import fs from 'fs';
const filePath = './read.json';
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
    console.log('File contents:', JSON.parse(data));
});