### Event Bubbling
In addEventListener(), third argument is `useCapture` which is `false` by default.
```
document.querySelector('#grandparent')
  .addEventListener('click', () => {
    console.log('Grandparent Clicked');
  });

  document.querySelector('#parent')
  .addEventListener('click', () => {
    console.log('Parent Clicked');
  });

  document.querySelector('#child')
  .addEventListener('click', () => {
    console.log('Child Clicked');
  });
```
In above snippet, 
- Event bubble is followed
- When we click on child div, DOM element comes from `child > parent > grandParent`
- When we click on parent div, DOM element comes from `parent > grandParent`
- When we click on grandParent div, DOM element print only `grandParent`

### Event Capturing
When it comes to event capturing, We have to specify the third argument as `true`
```
document.querySelector('#grandparent')
  .addEventListener('click', () => {
    console.log('Grandparent Clicked');
  }, true);

  document.querySelector('#parent')
  .addEventListener('click', () => {
    console.log('Parent Clicked');
  }, true);

  document.querySelector('#child')
  .addEventListener('click', () => {
    console.log('Child Clicked');
  }, true);
```
In the above snippet,

-  Event capturing is followed
-  When we click on child div,  DOM elements comes from `grandParent > parent > child`
-  When we click on parent div,  DOM elements comes from `grandParent > parent`
-  When we click on grandParent div, DOM element print only `grandParent`

### Combination of Event Bubbling and Capturing
Basically  Event Bubbling and Capturing is very expensive process.
When event capturing and bubbling combines, We have to specify the third argument as `true` and `false` wherever we want.
```
document.querySelector('#grandparent')
  .addEventListener('click', () => {
    console.log('Grandparent Clicked');
  }, true);

  document.querySelector('#parent')
  .addEventListener('click', () => {
    console.log('Parent Clicked');
  }, false);

  document.querySelector('#child')
  .addEventListener('click', () => {
    console.log('Child Clicked');
  }, true);
```

-  In this case, `Event capturing is happened initially`, then it will go for Event bubbling.
-  When we click on child div,  DOM elements comes from `grandParent > child > parent`
-  When we click on parent div,  DOM elements comes from `grandParent > parent`
-  When we click on grandParent div, DOM element print only `grandParent`

### To get rid of event propogation
We have to call `event.stopPropogation()` to avoid event propogation.
```
document.querySelector('#grandparent')
  .addEventListener('click', (event) => {
    console.log('Grandparent Clicked');
    event.stopPropogation();
  }, true);

  document.querySelector('#parent')
  .addEventListener('click', (event) => {
    console.log('Parent Clicked');
    event.stopPropogation();
  }, false);

  document.querySelector('#child')
  .addEventListener('click', (event) => {
    console.log('Child Clicked');
    event.stopPropogation();
  }, true);
```
-  When we click on child div,  , DOM element print only `child`
-  When we click on parent div,  , DOM element print only `parent`
-  When we click on grandParent div, DOM element print only `grandParent`