class First{
  constructor() {
    this.obj = {
      name: 'Vignesh',
      score: 10
    }
  }
  printDetails() {
    console.log(this.obj.name);
  }
}

const objectOne = new First();
objectOne.printDetails();