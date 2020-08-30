const myMap = (arr, callback) => {
  const result = []
  for(let i=0; i<arr.length; i++) {
    const cbResult = callback(arr[i], i);
    result.push(cbResult);
  }
  return result;
}

console.log(myMap([1,2,3], (e) => e+2))