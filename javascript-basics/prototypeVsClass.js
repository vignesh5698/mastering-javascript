//  Class Example
let Person = class {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    console.log('Person Constructor: ', name, id);
  }
  getDetails() {
    return `Name : ${this.name} :: Id: ${this.id}`;
  }
}

const bob = new Person('bob', 123);
console.log('From Person Object: ', bob.getDetails());

let EmployeeA = class extends Person {
  constructor(name, id, salary) {
    super(name, id);
    
    this.name = name;
    this.id = id;
    this.salary = salary;
  }

  employeeInfo() {
    return `Name : ${this.name} :: Id: ${this.id} :: Salary: ${this.salary}`;
  }
}

const employee = new EmployeeA('bob', 123, 15000);
console.log('From Employee Object: ', employee.getDetails());
console.log('---------------------------------------------------')
//  Prototype

let PPerson = function(name, id) {
  this.name = name;
  this.id = id;
}

PPerson.prototype.getDetails = function() {
  return `Name : ${this.name} :: Id: ${this.id}`;
}

const person1 = new PPerson('Foo', 123);
console.log(person1.getDetails());

let PEmployee = function(name, id, salary) {
  PPerson.call(this, name, id);
  this.salary = salary;
}

Object.setPrototypeOf(PEmployee, PPerson.prototype);

PEmployee.prototype.employeeInfo = function() {
  return `Name : ${this.name} :: Id: ${this.id} :: Salary: ${this.salary}`;
}

const personObj = new PEmployee('Bar', 123, 123345)
console.log(personObj.employeeInfo());