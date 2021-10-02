const sum = (num1) => {
  return (num2) => {
    if(num2) {
      return sum(num1 + num2)
    } else {
      return num1;
    }
  }
}

const result =  sum(1)(2)(3)();
console.log(result);