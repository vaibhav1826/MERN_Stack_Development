// learning about the url core module

const url= require('url'); // core module

const myurl= new URL(''); // just put the url inside it 

console.log(url.hostname);
console.log(url.pathname);
console.log(url.search);
console.log(url.hash);
console.log(url.port);