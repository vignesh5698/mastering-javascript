let average = function(...n) {
  let total = 0;
  for(let i=0; i < n.length; i++) {
    total += n[i];
  }
  return total / n.length;
}

let sliceUp = function(cb, ...n) {
  return function(...m) {
    return cb.apply(this, [...m,...n]); // this -> Global Object
  }
}

let doAvg = sliceUp(average, 1,2,3);
console.log(doAvg(4,5,6));