const zlib = require("zlib"); 
const fs = require('fs');


for(let i=0;i<10;i++) {
  fs.readFile('ACC.csv', 'UTF-8', (err, data) => {
    console.time(`deflate${i}`);
    const deflated = zlib.deflate(data, (err, buffer) => {
      console.timeEnd(`deflate${i}`);
      console.log('compressedInstrumentTick.byteLength :', Buffer.byteLength(buffer));
    });
    

    const deflated2 = zlib.deflate(data, (err, buffer) => {
      console.time(`inflate${i}`);
      zlib.inflate(buffer, (err, buf) => {
        console.timeEnd(`inflate${i}`);
      });
    });
  });
} 