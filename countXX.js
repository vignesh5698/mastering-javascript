const countXX = (str) => {
  const strArr = str.split('');
  let count = 0;
  for(let i=0;i<str.length;i++){
    for(let j=i+1;j<str.length;j++){
      if(strArr[i] === strArr[j]){
        count++;
        break;
      }
    }
  }
  return count;
}
const counter = countXX('strXXXX')
console.log(counter);

//strXXXX