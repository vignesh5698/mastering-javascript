const csvToArray = (data) => {
  const arrayOfCsv = data
    .split('\n')
    .map((singleRow) => singleRow.split(','));
    console.log(arrayOfCsv)
}
csvToArray('a,b\nc,d')
// I/p : 'a,b\nc,d' O/p: [["a","b"],["c","d"]]