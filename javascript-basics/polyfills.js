Array.prototype.myMap = function(callbackFn) {
  const result = []
  for(let i=0; i< this.length; i++) {
    result.push(callbackFn(this[i], i))
  }
  return result;
}

Array.prototype.myFilter = function(callbackFn) {
  const result = []
  for(let i=0; i<this.length; i++) {
    if(callbackFn(this[i], i)) {
      result.push(this[i])
    }
  }
  return result;
}

Array.prototype.myReduce = function(callbackFn, initialValue) {
  let values = this
  values.forEach((item) => {
    initialValue = initialValue !== undefined ? callbackFn(initialValue, item) : item
  })

  return initialValue;
}

const arr = [1, 2, 3, 4];

const changed = arr.reduce((accumulator, currentValue) => accumulator + currentValue)
const changed2 = arr.myReduce((accumulator, currentValue) => accumulator + currentValue)

const changed = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 100)
const changed2 = arr.myReduce((accumulator, currentValue) => accumulator + currentValue, 100)

const changed = arr.filter((item) => item%2 == 0)
const changed2 = arr.myFilter((item) => item%2 == 0)

const changed = arr.map((item) => item+1)
const changed2 = arr.myMap((item) => item*2)

