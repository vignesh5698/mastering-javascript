const util = require('util');

const printer = (args, callback) => {
  return new Promise(() => {
    setTimeout(() => {
      callback(null, `Hello ${args}`)
    }, 1000)
  });
}

const printName = util.promisify(printer);

(async() => {
  const text = await printName('Vikki');
  console.log(text);
})();
