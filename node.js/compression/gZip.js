const { ungzip, gzip } = require('node-gzip');
const _ = require('lodash');
const fs = require('fs');

const instrumentTick = {
  name: 'gZip',
  task: 'Will zip everything'
}

// const tick = _.map(_.range(1,1000000), () => instrumentTick);
for(let i=0;i<10;i++) {
  fs.readFile('ACC.csv', 'UTF-8', (err, tick) => {
    const compress = async () => {
      console.time(`gZip${i}`);
      const compressedInstrumentTick = await gzip(`${tick}`, {
        level: 1,
        chunkSize: 16 * 1024
      });
      console.timeEnd(`gZip${i}`);
      return new Promise((resolve, reject) => {
        console.log('compressedInstrumentTick.byteLength :', Buffer.byteLength(compressedInstrumentTick));
        resolve(compressedInstrumentTick);
      });
    }
    
    compress().then(async(res) => {
      console.time(`Decompress${i}`)
      await ungzip(res, {
        level: 1,
        chunkSize: 16 * 1024
      });
      console.timeEnd(`Decompress${i}`)
    });
  })
}

