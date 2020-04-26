const fetch = require("node-fetch");
const _ = require('lodash');

const fetchUsingPromise = () => {    
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  fetch(url)
  .then((response) => response.json())
  .then((res) => {
    console.log(res);
    const url = "https://jsonplaceholder.typicode.com/todos/2";
    fetch(url)
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      const url = "https://jsonplaceholder.typicode.com/todos/3";
      fetch(url)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        const url = "https://jsonplaceholder.typicode.com/todos/4";
        fetch(url)
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          const url = "https://jsonplaceholder.typicode.com/todos/5";
          fetch(url)
          .then((response) => response.json())
          .then((res) => {
            console.log(res);
            const url = "https://jsonplaceholder.typicode.com/todos/6";
            fetch(url)
            .then((response) => response.json())
            .then((res) => {
              console.log(res);
              const url = "https://jsonplaceholder.typicode.com/todos/7";
              fetch(url)
              .then((response) => response.json())
              .then((res) => {
                console.log(res);
                const url = "https://jsonplaceholder.typicode.com/todos/8";
                fetch(url)
                .then((response) => response.json())
                .then((res) => {
                  console.log(res);
                  const url = "https://jsonplaceholder.typicode.com/todos/9";
                  fetch(url)
                  .then((response) => response.json())
                  .then((res) => {
                    console.log(res);
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}

fetchUsingPromise();


