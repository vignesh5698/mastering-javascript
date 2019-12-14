const _ = require('lodash');

const frontTimes = (str, count) => {
  str = str.substring(0,3)
  let newString = ''
  _.each(_.range(count), () => newString+=str)
  return newString;
}

const newString = frontTimes('Abcdef', 2)
const newString2 = frontTimes('Ab', 2)

console.log(newString2)