console.time('buffer-ascii-format')
for(let i=0;i<100000;i++) {
  const buf = new Buffer('Hello world!', 'ascii');
}
console.timeEnd('buffer-ascii-format')

console.time('buffer-utf8-format')
for(let i=0;i<100000;i++) {
  const buf = new Buffer('Hello world!', 'utf8');
}
console.timeEnd('buffer-utf8-format')

console.time('buffer-binary-format')
for(let i=0;i<100000;i++) {
  const buf = new Buffer('Hello world!', 'binary');
}
console.timeEnd('buffer-binary-format')

//  Getting and setting bytes in buffer

const buf = new Buffer(100);
console.log('buf.length : ', buf.length);
for(let a = 0; a < buf.length; a++) {
  buf[a] = a;
}
console.log(buf[0], buf[1]);