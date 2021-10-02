const printer = function(greet) {
  console.log(this.fname, ' - ', this.lname, ' : ', greet)
}

const user = {
  fname: 'Vikki',
  lname: 'R',
}

Function.prototype.mybind = function(...args) {
  const currentObj = args[0]
  const obj = this
  console.log(currentObj, '...', obj);
  const args1 = args.slice(1)

  return function() {
    obj.apply(args[0], args1)
  }
}

const bound1 = printer.bind(user, 'Hello')
bound1()
const bound2 = printer.mybind(user, 'Hello')
bound2()

//  Call polyfill
Function.prototype.myCall = function(someObj, ...args) {
  someObj.fn = this
  someObj.fn(...args)
}

printer.call(user, 'hello')
printer.myCall(user, 'hello')
