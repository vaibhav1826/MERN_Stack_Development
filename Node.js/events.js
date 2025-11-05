var EventEmitter = require('events'); // import EventEmitter from events module
const { emit } = require('process');

var emitter = new EventEmitter(); // create a new EventEmitter instance

// Define a listener function
// emitter.addListener('marketopen',(msg)=>{
// console.log(msg);
// })

// // Emit the 'marketopen' event with a message
// emitter.emit('marketopen','The stock market is now open!');

// emitter.emit('marketopen','Trading has begun for the day.');


// //another way of using this event emitter
// emitter.on('weather',(msg)=>{
//     console.log(msg);
// })

// emitter.emit('weather','The weather is sunny today.');

// //another way but in this its only called once
// emitter.once('circus',(msg)=>{
//     console.log(msg);
// })

// emitter.emit('circus','The circus is in town!');
// emitter.emit('circus','The circus is in town again!'); // not work for this line


// console.log(emitter.getMaxListeners()); // Get the default maximum number of listeners (10)

// for (let i = 1; i <= 12; i++) {
//     emitter.addListener('event', () => {
//         console.log(`Listener ${i} executed`);
//     }
//     )};
// emitter.emit('event');

// emitter.setMaxListeners(15); // Set a new maximum number of listeners
// console.log(emitter.getMaxListeners()); // Get the updated maximum number of listeners (15)

var fun1 =() =>{
    console.log('fun1 executed');
}

var fun2 =() =>{
    console.log('fun2 executed');
}

emitter.addListener('myEvent',fun1);
emitter.addListener('myEvent',fun2);

// emitter.emit('myEvent');

emitter.removeListener('myEvent',fun1); // removing function fun1 from event 'myEvent'
emitter.emit('myEvent');

// emitter.removeAllListeners('myEvent'); // removing all listeners from event 'myEvent'
// emitter.emit('myEvent');