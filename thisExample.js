//global 'this'

this.global = {
  num: 1
}
console.log(this.global.num)

const numberOne = (number) => {
  return number + this.global.num;
}
const n = numberOne.bind(this);
console.log(n(4))
