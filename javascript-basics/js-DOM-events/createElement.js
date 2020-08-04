var newDiv = document.createElement('div');
newDiv.className = 'new-div';
newDiv.id = 'new-div';

// To set custom attribute
newDiv.setAttribute('hello', 'new-hello');

//  create text node

var newDivText = document.createTextNode('Hello from New-Div');
newDiv.appendChild(newDivText);

var container = document.querySelector('#list-container');
var header = document.querySelector('#header1');

newDiv.style.fontSize = '24px';

container.insertBefore(newDiv, header);

console.log(newDiv);