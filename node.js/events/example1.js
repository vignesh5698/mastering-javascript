const EventEmitter = require('events');

const emitter =  new EventEmitter();

emitter.on('firstEvent', (...arg) => {
  console.log(`Hello ${arg}`);
});

emitter.emit('firstEvent', 'Vignesh');
emitter.emit('firstEvent', 'Praga');
emitter.emit('firstEvent', 'IT', 'CSE');

console.log(emitter.listenerCount('firstEvent'));
console.log(emitter.getMaxListeners('firstEvent'));

