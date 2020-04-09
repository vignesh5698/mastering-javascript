// Eg 1: Input: a1b10
//        Output: abbbbbbbbbb
// Eg: 2: Input: b3c6d15
//           Output: bbbccccccddddddddddddddd
// The number varies from 1 to 99.

const printCharacters = (string) => {
  let output = '';
  stringSplitUp = string.match(/[a-z]+|[0-9]+/g)
  for(let index=0;index<stringSplitUp.length;index++) {
    if(stringSplitUp[index].match(/[a-z]/)) {
      for(let i=0;i<parseInt(stringSplitUp[index+1]);i++) {
        output = output + stringSplitUp[index];
      }
    }
  }
  console.log(output);
}

printCharacters('a3b5');