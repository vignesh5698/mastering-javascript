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
}

const employee = new EmployeeA('bob', 123, 15000);
console.log('From Employee Object: ', employee.getDetails());

//  Prototype

// 9840228776