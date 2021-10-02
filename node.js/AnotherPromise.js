const promise = new Promise((resolve, reject) => {
  reject(Error('Some error occurred - 1'));
})
promise.catch(error => console.log(error.message));
promise.catch(error => console.log(error.message));


const promise2 = new Promise((resolve, reject) => {
  reject(Error('Some error occurred - 2'));
}).catch(error => console.log(error.message))
.catch(error => console.log(error.message));
