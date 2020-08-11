const fs = require('fs');
const { promisify } = require('util');

//  READ DIRECTORY
fs.readdir('./', (err, data) => {
  console.log(err, data);
});

//  READ
fs.readFile('first.txt','utf8' , (err, data) => {
  console.log('READ FILE ::: ', err, data, `${data}`);
});

//  UPDATE
fs.appendFile('first.txt', '\nHello from append\n\n', (err, data) => {
  console.log('APPEND FILE ::: ', err, data)
})

const promisifiedWrite = promisify(fs.writeFile);
//  CREATE
promisifiedWrite('writer.txt', 'Wrote from code')
.then(() => {
  // READ
  fs.readFile('writer.txt','utf8' , (err, data) => {
    console.log(err, data);
    // DELETE
    fs.unlink('writer.txt', (err) => {
      console.log('Deleted.')
    });
  });
})

