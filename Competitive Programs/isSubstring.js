const isSubstring  = (actualString, subString) => {
  const index = actualString.includes(subString) ? 
    actualString.indexOf(subString) : -1;
    console.log(index)
}
isSubstring('nooneinworldisgeninus', 'in');