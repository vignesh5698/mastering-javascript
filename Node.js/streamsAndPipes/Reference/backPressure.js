const { createReadStream, createWriteStream } = require('fs');

const readStream = createReadStream('input.mp4');
const writeStream = createWriteStream('output.mp4', {
  highWaterMark: 120000 //  memory
});
//If memory is high, we don't see any backpressure because our internal buffers for the write stream has enough space to handle all of the video
readStream.on('data', (chunk) => {
  const result = writeStream.write(chunk);
  if(!result) {
    console.log('Backpressure');
    readStream.pause()
  }
});

readStream.on('end', () => {
  writeStream.end();
});

writeStream.on('drain', () => {
  console.log('drained');
  readStream.resume();
});
