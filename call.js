//CALL and APPLY example
const obj = { num: 2 }
const addFunction = function(numToAdd){
  console.log(this);
  return this.num + numToAdd;
}
// Access 'this' inside arrow function
this.obj2 = { num: 4 }
const addTwo = (numToAdd) => {
  console.log(this)
  return this.obj2.num + numToAdd
}
console.log(addTwo.call(this.obj2, 4))

//APPLY function
const obj3 = { num: 3 }
const addArray = function(arr) {
  console.log(arr)
  //hereWeCanAccessArray...
  return this.num + arr[2];
}
const arr = [1, 2, 3];
console.log(addArray.apply(obj3, [arr]))
