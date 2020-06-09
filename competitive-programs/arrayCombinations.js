const _ = require('lodash');
const arrayCombinations = (array) => {
  let arrayCombination = [];
  for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
      arrayCombination.push(parseInt(array[i]+""+array[j]));
    }
  }
  console.log(arrayCombination)
}
arrayCombinations([1,4,5,2])