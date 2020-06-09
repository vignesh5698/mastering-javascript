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
    console.log(form);
  }, 1000);
  
});

myEmitter.once('login', (loggedIn) => {
  console.log(loggedIn);
});

console.log(form);
myEmitter.emit('addUser', 'Vignesh', 22)
myEmitter.emit('asyncEvent', 'Praga', 20)
console.log(form);
myEmitter.emit('login', true);
myEmitter.emit('login', false);