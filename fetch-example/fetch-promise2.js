const fetch = require("node-fetch");
const _ = require('lodash');

const fetchUsingAsync = (noOfCalls) => {
  const url = "https://jsonplaceholder.typicode.com/todos/" + noOfCalls;
  return fetch(url).then(res => {
    return res.json();
  }).then(res => {
    console.log(res)
    return res
  })
  .catch((err) => console.log(err));
}
let range = _.range(1,11);

const getRandomNumber = () => {
  return new Promise((resolve, reject) => {
    resolve(3);
  })
}

async function fetchAsync() {
  const fetchPromises = _.map(range, async (noOfCalls) => {
    const todo = await fetchUsingAsync(noOfCalls);
    // console.log('==========================================', noOfCalls);
    const randomNumber = await getRandomNumber();
    // console.log(randomNumber)
    return [todo, randomNumber]
  });
  Promise.all(fetchPromises)
  .then((res) => {
    console.log(res)
  })
}
fetchAsync();
