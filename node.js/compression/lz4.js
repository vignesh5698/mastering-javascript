const fs = require('fs');
var lz4 = require("lz4js");

var compressed;
var decompressed;

for(let i=0;i<10;i++) {
  fs.readFile('ACC.csv', 'UTF-8', (err, data) => {
    console.time('compress');
    compressed2 = lz4.compress(data);
    compressed = Buffer.from(lz4.compress(data));
    console.log('compressedInstrumentTick.byteLength :', Buffer.byteLength(compressed2));
    console.timeEnd('compress');
    fs.writeFileSync('compressed.lz4', compressed);

    console.time('decompress');
    decompressed = lz4.decompress(compressed)
    console.timeEnd('decompress');
  });
}
