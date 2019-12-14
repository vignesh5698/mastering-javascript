const _ = require('lodash');

const longestWordInSentence = (sentence) => {
  const words = sentence.split(' ');
  let longestWord = ''
  _.each(words, (word) => {
    longestWord = word.length > longestWord.length ? word : longestWord;
  })
  return longestWord;
}
const longestWord = longestWordInSentence('Hello, this is vignesh from IT department');
console.log(longestWord);
