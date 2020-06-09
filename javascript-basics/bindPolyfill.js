let name = {
  firstName: 'Vignesh',
  lastName: 'R' 
}

let printName = function(dept, state, country) {
  console.log(this.firstName + ' ' + this.lastName + ' ' + dept + ' ' + state + ' ' + country);
}

// var bound = printName.bind(name);
// bound();

Function.prototype.mybind = function(...args) {
  // this -> printName
  let obj = this,
      params = args.slice(1);

  return function(...args2) {
    obj.apply(args[0], [...params, ...args2]);
  }
}

var bound2 = printName.mybind(name, 'IT', 'TN');
bound2('India');
