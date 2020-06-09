const doMath = () => {
  let privateCounter = 0;
  const addValue = (value) => {
        privateCounter += value;
  }

  return {
    increment: () => {
      addValue(1);
    },
    decrement: () => {
      addValue(-1);
    },
    value: () => {
      return privateCounter;
    }
  }
}

const doMath1 = doMath();
const doMath2 = doMath();

doMath1.increment();
console.log(doMath1.value());
doMath1.increment();
console.log(doMath1.value());
doMath2.increment();
doMath2.increment();
console.log(doMath2.value());
doMath2.decrement();
console.log(doMath2.value());
