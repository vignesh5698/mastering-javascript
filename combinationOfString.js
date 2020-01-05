const _ = require('lodash');

const combinationOfString = (str) => {
  let newArr = []
  for(let i=0;i<=str.length;i++){
    for(let j=i;j<=str.length;j++){
      if(str.substring(i, j)){
        newArr.push(str.substring(i, j))
      }
    }
  }
  return newArr;
}

const combinationString = combinationOfString('dog');
console.log(combinationString);
