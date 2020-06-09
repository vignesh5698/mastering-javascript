//  let has block scope
for(let i=0;i<3;i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

//  var has function scope

for(var i=0;i<3;i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

//  FIX: Wrap it in IIFE

for(var i=0;i<3;i++) {
  ((i) => {
    setTimeout(() => {
    console.log(i);
  }, 1000);
  })(i);
} 