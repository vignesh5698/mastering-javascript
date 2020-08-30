//  Another way for sequential promise handling done by for loop :))

const sequential = async() => {
  const result = await [1,2,3,1,2,3,1,2,3].reduce(async(total, element) => {
    return await total + await printer(element);
  }, 0);
  console.log(result);
}

const printer = (seconds) => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Waited : ', seconds, ' seconds')
      resolve(`${seconds} seconds`);
    }, seconds*1000);
  })
}

sequential();
