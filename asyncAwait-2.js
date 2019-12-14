const waitForMe = () => {
  console.log('hmmm.....')
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('I want chappathi');
    }, 2000);
  });
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('I want chenna masal');
    }, 4000);
  });
  return Promise.all([promise1, promise2]);
}

const areYouReady = async() => {
  console.log('What do you want to have..?');
  const state = await waitForMe();
  console.log(state);
  console.log('Ok')
}

areYouReady();