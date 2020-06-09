// Eg 1: Input: 13,2 4,15,12,10,5
//         Output: 13,2,12,10,5,15,4
// Eg 2: Input: 1,2,3,4,5,6,7,8,9
//         Output: 9,2,7,4,5,6,3,8,1 

const arrangeInOddEvenPositions = (inputArray) => {
  const ascendingInputArray = [...inputArray].sort((a,b) => a-b);
  const descendingInputArray = [...inputArray].sort((a,b) => b-a);
  let outputArray = [];
  for(let i=0;i<Math.floor(inputArray.length/2);i++) {
    outputArray.push(descendingInputArray[i]);
    outputArray.push(ascendingInputArray[i]);
  }
  if(inputArray.length%2 == 1) {
    outputArray.push(inputArray[Math.floor(ascendingInputArray.length/2)]);
  }
  console.log(outputArray)
}

const inputArray = [1,2,3,4,5,7,8,6,10];
arrangeInOddEvenPositions(inputArray);
