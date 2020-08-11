const fs = require('fs');
const { promisify } = require('util');
// const util = require('util');

const asyncWriter = promisify(fs.writeFile);
const asyncReader = promisify(fs.readFile);

const fileOperations = async () => {  
  const write = await asyncWriter('asyncFile.txt', 'Here is some random write async file');
  const readText = await asyncReader('asyncFile.txt', 'utf8');
  console.log('TEXT : ', readText);
}

fileOperations()