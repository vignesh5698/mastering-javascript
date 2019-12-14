const _ = require('lodash');

const stringTimes = (str, count) => {
  let newString='';
  for(let i=0;i<count;i++){
    newString += str;
  }
  return newString;
}

const stringTimes2 = (str, count) => {
  let newString = '';
  _.each(_.range(count),() => newString+=str );
  return newString;
}

const newString = stringTimes('abc', 3)
const newString2 = stringTimes2('abc', 3)

console.log(newString)
console.log(newString2)
