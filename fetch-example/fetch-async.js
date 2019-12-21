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

async function fetchAsync() {
  _.each(range, async (noOfCalls) => {
    // console.log('Beforev ------------------------noOfCalls', noOfCalls);
    await fetchUsingAsync(noOfCalls);
    console.log('noOfCalls', noOfCalls);
  });

  // for(var i=0;i<range.length;i++){
  //   await fetchUsingAsync(range[i]);
  //   console.log('range[i]', range[i]);
  // }

}
fetchAsync();
