//  Many document objects available: domain, URL, title, body, all, form, link, images

//  Modify title of page
document.title = 'Modified-Title';

//  Accessing DOM
var header = document.getElementById('header');
header.innerText = 'ITEMS';

var itemList1 = document.getElementById('items');
itemList1.style.borderBottom = 'solid 3px #000'

console.log(itemList1);

var itemList = document.getElementsByClassName('item-class');
console.log(itemList);

itemList[1].textContent = 'Modified by script';
itemList[1].style.backgroundColor = 'yellow';

var item = document.querySelector('.item-class');
item.style.color = 'red';

var lastItem = document.querySelector('.item-class:last-child');
lastItem.style.color = 'blue';

var nthItem = document.querySelector('.item-class:nth-child(3)');
nthItem.style.color = 'coral';

document.getElementById('content').style.margin = '40px';