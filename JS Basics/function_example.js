const a = 10;
function A(a) {
  console.log('Inside function - A :', a);
}
console.log('Outside function - A :', a);
A(a);

const obj = {
  val: 10
}
B(obj);

function B(obj) {
  obj.val = 20;
  console.log('Object inside function - B :', obj)
}
console.log('Object outside function - B :', obj)