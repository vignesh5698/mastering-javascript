const fs = require('fs');
const { pipeline, Transform } = require('stream');

const writeFile = fs.createWriteStream('myFile.txt');

const modifyStream = new Transform({
  transform : (chunk, encoding, done) => {
    const modifiedString = `${chunk} number\n`;
    done(null, modifiedString);
  }
});

pipeline(
  fs.createReadStream('a.txt'),
  modifyStream,
  writeFile,
  (err) => {
    if(err){
      console.log('Pipeline broken');
    } else {
      console.log('Pipeline works successfully');
    }
  }
)