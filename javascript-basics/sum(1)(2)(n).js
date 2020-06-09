let sum = (num1) => {
  return (num2) => {
    if(num2) {
      return sum(num1 + num2);
    }
    return num1;
  }
}

let sumES6 = num1 => (num2) => num2 ? sumES6(num1 + num2) : num1;

console.log(sum(1)(2)());
console.log(sum(1)(2)(3)(4)());
console.log(sumES6(1)(2)());
console.log(sumES6(1)(2)(3)(4)());