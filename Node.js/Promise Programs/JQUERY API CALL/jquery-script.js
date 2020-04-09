const callAPI = (noOfCalls) => {
  const url = "https://jsonplaceholder.typicode.com/todos/" + noOfCalls;
  $.ajax({url: url, success: (result) => {
    console.log(result);
  }}).done(() => {
    if(noOfCalls < 10){
      noOfCalls += 1;
      callAPI(noOfCalls);
    }
  })
}
  
callAPI(1);