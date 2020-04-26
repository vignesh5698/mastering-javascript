const counter = (number) => {
  for(let i=0; i<=number;i++) {
    const c1 = i + i + i;
  const c2 = i - i - i;
  const c3 = i * i * i;
  const c4 = i / i / i;
  const c5 = i + i - i;
  const c6 = i + i * i;
  const c7 = i + i / i;
  const c8 = i - i * i;
  const c9 = i - i / i;
  const c10 = i * i / i;  
  if(c1 == 6) {
    console.log(i ,' + ', i , ' + ', i)
  }
  if(c2 == 6) {
    console.log('c2')
  }if(c3 == 6) {
    console.log('c3')
  }if(c4 == 6) {
    console.log('c4')
  }if(c5 == 6) {
    console.log('c5', i)
  }if(c6 == 6) {
    console.log('c6', i)
  }if(c7 == 6) {
    console.log('c7', i)
  }if(c8 == 6) {
    console.log('c8',i)
  }if(c9 == 6) {
    console.log('c9', i)
  }if(c10 == 6) {
    console.log('c10',i)
  }
  }
}

counter(9);