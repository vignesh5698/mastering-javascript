// Currying is the process of turning a function with multiple arity into a function with less arity

// Using bind function:

let multiply = function(x, y) {
  console.log(x*y);
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);

// Using closures

let add = function(num1) {
  return function(num2) {
    console.log(`Add: ${num1 + num2}`);
  }
}

const addTwo = add(2);
addTwo(3);

const addThree = add(3);
addThree(4);
