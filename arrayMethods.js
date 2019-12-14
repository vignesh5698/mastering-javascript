let array = [1,2,3,4,5]
console.log('Initial Array : ', array)
//ToString
console.log('toString Metod: ', array.toString())
//join()
console.log('After Join(\' * \') : ' ,array.join(' * '))

//ADDING ELEMENT AT THE LAST
//push
array.push(10);
console.log('After pushing 10: ', array)

array.push(20,30,40);
console.log('After Pushing 20,30,40 : ', array)
//pop
array.pop();
console.log('After pop last element :', array)

//ADDING ELEMENT AT THE FRONT
//unshfit
array.unshift(50);
console.log('After unshift 50 :', array)

array.unshift(100,200,300);
console.log('After Unshift 100, 200, 300 : ', array)

//shift -> remove first element

array.shift()
console.log('After shift : ', array)
//https://codepumpkin.com/find-unique-array-element/