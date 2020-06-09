let student1 = {
  firstName: 'Vignesh',
  lastName: 'R'
}

let student2 = {
  firstName: 'Elon',
  lastName: 'Musk'
}

var printFullName = function(degree) {
  console.log(`${this.firstName} ${this.lastName} - ${degree}`);
}

// Function borrowing
printFullName.call(student1, 'B.Tech');
printFullName.call(student2, 'B.S');

printFullName.apply(student1, ['B.Tech']);
printFullName.apply(student2, ['B.S']);

//  bind method - bind and keep the copy of that method and used later

var student1Details = printFullName.bind(student1, 'B.Tech');
var student2Details = printFullName.bind(student2, 'B.S');

student1Details();
student2Details();
