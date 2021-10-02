let racer1 = function() {
  setTimeout(() => console.log("timeout - racer1"), 0);
  setImmediate(() => console.log("immediate - racer1"));
  process.nextTick(() => console.log("nextTick - racer1"));
}

let racer2 = function() {
  process.nextTick(() => console.log("nextTick - racer2"));
  setTimeout(() => console.log("timeout - racer2"), 0);
  setImmediate(() => console.log("immediate - racer2"));
}

let racer3 = function() {
  setImmediate(() => console.log("immediate - racer3"));
  process.nextTick(() => console.log("nextTick - racer3"));
  setTimeout(() => console.log("timeout - racer3"), 0);
}

racer1()
racer2()
racer3()
