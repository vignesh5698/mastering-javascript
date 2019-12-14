const sortWord = (str) => {
  return str.split('').sort().join('');
}

const sortedWord = sortWord('algorithm');
console.log(sortedWord);