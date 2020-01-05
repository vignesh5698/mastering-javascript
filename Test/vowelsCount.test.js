const assert = require('chai').assert;
const vowelsCount = require('../vowelsCount');

describe('Test for vowels count', () => {
  const sentence = 'The quick brown fox';

  it('Check that the count is number', () => {
    assert.isNumber(5, vowelsCount(sentence));
  });
  it('Output check', () => {
    assert.deepEqual(5, vowelsCount(sentence));
  });
})