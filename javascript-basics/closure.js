// const add = (num1) => {
//   return (num2) => {
//     return num1 + num2
//   }
// }

// console.log(add(3)(2));


var word = 'JS'
 
function foo (word){
  return this.word
}

// console.log(`${} is ${}`)
 
//  JS is awesome

console.log(`${word} is ${foo.call({word: 'awesome'})}`)


// map, filter, forEach

// const arr = [1, 2, 3]
// console.log(arr.map((item) => item * 2));
