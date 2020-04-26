const fs = require('fs');
const { Transform } = require('stream');
const ReadlineTransform = require('readline-transform');
const toLines = new ReadlineTransform({});

const fileData = fs.createReadStream('inputFile.txt');
const writeFile = fs.createWriteStream('outputFile.txt');

const modifyStream = new Transform({
  transform : (chunk, encoding, done) => {
    const modifiedString = `${chunk} number\n`;
    done(null, modifiedString);
  }
});

fileData
  .pipe(toLines)
  .pipe(modifyStream)
  .pipe(writeFile);
