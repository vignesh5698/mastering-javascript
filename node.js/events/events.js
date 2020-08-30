const EventEmitters = require('events');

const myEmitter = new EventEmitters();
let form = {
  name: null,
  age: null
}
myEmitter.on('addUser', (name, age) => {
  form.name = name;
  form.age = age;
});

myEmitter.on('asyncEvent', (name, age) => {
  setImmediate(() => {
    form.name = name;
    form.age = age;
    console.log('asyncEvent......', form);
  }, 3000);
  
});

myEmitter.once('login', (loggedIn) => {
  console.log(loggedIn);
});

console.log(form);
setImmediate(() => console.log('Imm1'), 1000)
myEmitter.emit('addUser', 'Vignesh', 22)
setImmediate(() => console.log('Imm2'), 1000)
myEmitter.emit('asyncEvent', 'Praga', 20)
setImmediate(() => console.log('Imm3'), 1000)
console.log(form);
myEmitter.emit('login', true);
console.log('END OF CODE//')