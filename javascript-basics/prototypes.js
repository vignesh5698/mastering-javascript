// Prototypes

let object1 = {
  name: 'C',
  messsage: 'My favorite language is',
  getMessage: function() {
    return `${this.messsage} ${this.name}`
  }
};

console.log(object1.getMessage());

let object2 = {
  name: 'Javascript',
};

//NEVER DO THIS IN PROD

object2.__proto__ = object1;

console.log(object2.getMessage());

// Functions

Function.prototype.mybind = function() {
  console.log('My Bind Called...');
}

const fun1 = () => {}
const fun2 = () => {}

fun1.mybind()
fun2.mybind()
