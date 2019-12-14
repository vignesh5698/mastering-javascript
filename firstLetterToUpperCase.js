const firstLetterToUpperCase = (str) => {
  let upperCasedString = str.split(' ');
  let newString = '';
  for(let i=0;i<upperCasedString.length;i++){
    newString += upperCasedString[i].charAt(0).toUpperCase() + upperCasedString[i].slice(1) + ' ' ;
  }
  return newString;
}
const firstLetterToUpperCased = firstLetterToUpperCase('barking dog never bites');
console.log(firstLetterToUpperCased)