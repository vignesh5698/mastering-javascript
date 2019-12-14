const reverseNumber = (number) => {
  return number.toString().split('').reverse().join('');
}

let reversedNumber = reverseNumber(12345);
console.log(reversedNumber);