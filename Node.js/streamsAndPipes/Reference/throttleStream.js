const { Duplex, PassThrough } = require('stream');
const { createReadStream, createWriteStream } = require('fs');

const readStream = createReadStream('input.mp4');
const writeStream = createWriteStream('outputSample.mp4');

class Throttle extends Duplex {
  constructor(ms) {
    super();
    this.delay = ms;
  }

  _write(chunk, encoding, done) {
    this.push(chunk);
    setTimeout(done, this.delay);
  }

  _final() {
    this.push(null);
  }

  _read() {
    
  }
}

const report = new PassThrough();
report.on('data', (chunk) => {
  console.log(chunk.length);
});

const throttle = new Throttle(100);
readStream
  .pipe(report)
  .pipe(throttle)
  .pipe(writeStream)