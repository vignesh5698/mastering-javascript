var items = document.querySelector('#items');

// parent node

console.log(items.parentNode);
items.parentNode.style.backgroundColor = '#f4f4f4f4'

// parent element

console.log(items.parentElement);
items.parentElement.style.backgroundColor = '#f4f4f4f4'

//  Note: parent node and parent element are same

//  child nodes

console.log(items.childNodes); // child node includes line break in html;

//  To get rid of above break

console.log('Items list: ', items.children);
console.log('Item 2: ', items.children[1]);
items.children[1].style.backgroundColor = 'pink';


//  first element child

console.log(items.firstElementChild); //  firstChild includes br/ new line
items.firstElementChild.style.backgroundColor = 'cyan';

// last element child

items.lastElementChild.style.backgroundColor = 'green';

// next sibling

console.log(items.nextSibling);
console.log(items.nextElementSibling);

// previous sibling

var spanId = document.querySelector('#span-id');
spanId.previousElementSibling.style.backgroundColor = '#C6FFB4'