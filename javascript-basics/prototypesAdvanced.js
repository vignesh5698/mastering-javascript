const Person = function(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getUserDetails = function() {
  return `${this.name} - ${this.age}`;
}

const person1 = new Person('Vignesh', 22);
const person2 = new Person('Praga', 18);

// console.log(person1.getUserDetails())
// console.log(person2.getUserDetails())

const Student = function(name, age, dept) {
  this.name = name;
  this.age = age;
  this.dept = dept;
}

const student1 = new Student('ARUN', 23, 'IT');
const student2 = new Student('RAJESH', 18, 'CSE');

console.log(Person.prototype.getUserDetails.call(student1))