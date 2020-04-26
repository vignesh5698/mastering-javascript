const waitForMe = () => {
  console.log('Wait.....')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Yes. I\'m Ready');
    }, 2000);
  });
}

const areYouReady = async() => {
  console.log('Are you ready..?');
  const state = await waitForMe();
  console.log(state);
  console.log('Let\'s Go')
}

areYouReady();