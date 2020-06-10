let counter = 0;
const getData = function () {
  //  calls an api for get data
  console.log("Getting data", counter++);
};

const doSomeMagic = function (fn, time) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, time);
  };
};

const betterFunction = doSomeMagic(getData, 300);