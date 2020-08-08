const largestAreaInIncreasingHistogram = (arr) => {
  let top = 0;

  for(let i=1; i<=arr.length; i++) {
    if(top < arr[arr.length - i] * i) {
      top = arr[arr.length - i] * i;
    }
  }
  console.log(top);
}

arr = [1,2,2,4,4];
largestAreaInIncreasingHistogram(arr);