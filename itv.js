function createClosureArray() {
  var badArr = [];

  for(let i=0; i<5; i++) {
    badArr[i] = function() {
      console.log(i)
      return 'n = '+ i
    };
  };
// console.log(i)
  return badArr;
}

var badAr = createClosureArray()

for(var index in badAr){
  console.log(badAr[index]())
}

// async function f() {
//   let result = 'first!';
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('done!'), 1000);
//   });

//   result = await promise;

//   console.log(result);
// }

// f();

// console.log(
//   typeof Object, 
//   typeof Array, 
//   typeof Number
// );

// var dog = {
//   breed: "Border Collie",
//   sound: "Wooh",
//   getBreed: () => { 
//       return this.breed;
//   },
//   getSound: function() {
//       return this.sound;
//   }
// };
// console.log(dog.getBreed(), dog.getSound());

// immaBeOnTop();

// var immaBeOnTop;

// function immaBeOnTop() {
//   console.log('first');
// }

// immaBeOnTop = function() {
//   console.log('second');
// };

// foo();

// function foo() {
//   console.log(1);
// }

// var foo = function() {
//   console.log(2);
// };

// function foo() {
//   console.log(3);
// }

// foo();

/*
Implement strStr()

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Example 3:

Input: haystack = "", needle = ""
Output: 0
*/

// const strStr = (str1, str2) => {
//   if(!str1 && !str2) {
//     return 0;
//   }

//   if(!str1.includes(str2)) {
//     return -1;
//   }

//   const str1Split = str1.split('')
//   const str2Split = str2.split('')
//   let str2Idx = 0;

//   for(let i=0; i<str1Split.length; i++) {
//     if(str1Split[i] === str2Split[str2Idx]) {
//       str2Idx++;
//     }

//     if(str2Idx !== 0 && str2Split.length === str2Idx) {
//       return i - str2Split.length - 1;
//     }

//     if(str2Idx > 0 && str1Split[i] !== str2Split[str2Idx]) {
//       str2Idx = 0;
//     }
//   }
// }


// const haystack = "hello", needle = "ll";
// const index = strStr(haystack, needle)

// console.log(index);

// let i = 1
// setInterval(() => {
//   console.log(i);
//   i++;
// }, 1000);