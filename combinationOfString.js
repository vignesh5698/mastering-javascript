const _ = require('lodash');

const combinationOfString = (str) => {
  let newArr = []
  for(let i=0;i<=stringArray.length;i++){
    for(let j=i;j<=stringArray.length;j++){
      newArr.push(str.substring(i, j))
    }
  }
  return _.compact(newArr);
}

const combinationString = combinationOfString('dog');
console.log(combinationString);
