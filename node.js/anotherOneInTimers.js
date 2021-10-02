// function myFunc(arg) {
//   console.log(`arg was => ${arg}`);
// }
// setTimeout(myFunc, 1500, 'funky', 'new');

// console.log('before immediate');
// setImmediate((arg) => {
//    console.log(`executing immediate: ${arg}`);
// }, 'so immediate');
// console.log('after immediate');

function Pet(name) {
  this.name = name;

  this.getName = () => this.name;
}

const cat = new Pet('Fluffy');

console.log(cat.getName); // What is logged?

// const { getName } = cat;
// console.log(getName());     // What is logged?