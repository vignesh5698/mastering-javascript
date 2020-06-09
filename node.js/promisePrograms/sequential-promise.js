//  Another way for sequential promise handling done by for loop :))

const sequential = async() => {
  await [1,2,3,1,2,3,1,2,3].reduce(async(total, element) => {
    return await total + await printer(element);
  }, 0);
}

const printer = (seconds) => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Waited : ', seconds, ' seconds')
      resolve();
    }, seconds*1000);
  })
}

sequential();
