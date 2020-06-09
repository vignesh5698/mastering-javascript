const mergeArrayWithoutDuplicates = (arrayOne, arrayTwo) => {
  const result = arrayOne.concat(arrayTwo);
  console.log([... new Set(result)]);
}

const arr1 = [1,2,3,4]
const arr2 = [3,4,5]
mergeArrayWithoutDuplicates(arr1, arr2)