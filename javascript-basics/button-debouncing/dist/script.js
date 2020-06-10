const debounce = function(fn, time) {
  let timer;
  return function(args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(args)
    }, time);
  }
  
}

document.getElementById('btn').addEventListener('click', debounce((e) => {
  console.log('clicked');
}, 1000));