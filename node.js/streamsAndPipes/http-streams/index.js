const { createServer } = require('http');
const { stat, createReadStream } = require('fs');
const { promisify } = require('util');
const fileName = './input.mp4';
const fileInfo = promisify(stat);

createServer(async (req, res) => {
  const { size } = await fileInfo(fileName);
  const range = req.headers.range;
  if(range) {
    let [ start, end ] = range.replace(/bytes=/, '').split('-');
    start = parseInt(start, 10);
    end = end ? parseInt(end, 10) : size - 1;
    res.writeHead(206, {
      'Content-Range': `bytes ${start}-${end}/${size}`,
      'Accept-Range': 'bytes',
      'Content-Length': (end-start) + 1,
      'Content-Type': 'video/mp4'
    });
    createReadStream(fileName, {start, end}).pipe(res);
  } else {
    res.writeHead(200, { 'Content-Type': 'video/mp4' });
    createReadStream(fileName).pipe(res);
  }
  
}).listen(3000, () => console.log('Server running on PORT 3000'));