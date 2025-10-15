// write json data inside the output.json file

import fs from 'fs';
const filepath = './Output.json';
const data = { name: 'John', age: 30, city: 'New York' };

const jsonData = JSON.stringify(data, null, 2);

fs.writeFile(filepath, jsonData, (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File written successfully');
  }
});