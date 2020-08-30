// Encode the buffer in base 64. UCS2 will work, but UTF8 will not.
const encoding = "base64";
const fs = require('fs');
const zlib = require('zlib')

function compress (json, i) {

    console.time('brotli-compress'+ i);
    zlib.brotliCompress(json, {
      params: {
        [zlib.constants.BROTLI_PARAM_MODE]: zlib.constants.BROTLI_MODE_TEXT
      }
    }, (err, data) => {
      console.timeEnd('brotli-compress'+ i);
      // console.log('compressedInstrumentTick.byteLength :', Buffer.byteLength(data));
      decompress(data.toString(encoding), encoding,i);
    })
}

function decompress (encodedData, encoding, i) {
  const compressedData = Buffer.from(encodedData, encoding);
  console.time('brotli-decompress'+ i);
  zlib.brotliDecompress(compressedData, (err, data) => {
    console.timeEnd('brotli-decompress'+ i);
  });
}

fs.readFile('ACC.csv', 'BASE64', (err, data) => {
  for(let i=0;i<10;i++) {
    compress(data, i);
  }
});
