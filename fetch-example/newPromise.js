const getData = () => {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      return resolve("Data Sample 1");
    }, 1000);
  });
}

const processData = (data) => {
  let dataArray = data.split(" ");
  return new Promise((resolve, reject) => {
    setInterval(() => {
      return resolve(dataArray.join('~'));
    }, 1000);
  });
}

const printData = async () => {
  const data = await getData();
  const processedData = await processData(data);
  return processedData;
}

let processedData = printData();
processedData.then((response) => {
  console.log('Response is ',response, 'and function is', processedData);
}).catch((err) => console.log(err));