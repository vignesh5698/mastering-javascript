const _ = require('lodash');

const vowelsCount = (sentence) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = 0;
  _.each(sentence.split(' '), (word) => {
    _.each(word.split(''), (letter) => {
      vowels.includes(letter) ? vowelCount++ : 0;
    });
  });
  return vowelCount;
}

module.exports = vowelsCount;

// const count = vowelsCount('The quick brown fox');
// console.log(count);