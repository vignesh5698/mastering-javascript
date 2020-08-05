var button = document.getElementById('my-button').addEventListener('click', clickHandler);

function clickHandler(e) {
  // Exploring properties
  console.log(e.target);
  console.log(e.target.id);

  console.log(e.altKey);
  console.log(e.ctrlKey);
  console.log(e.shiftKey);

  // mouseOver for inner elements in div whereas mouseOut for only div

  document.getElementById('span-id').textContent = 'Hello, Button changed my text';
  document.getElementById('content').style.background = 'coral';
}

var selector = document.getElementById('selector');

selector.addEventListener('mousemove', (e) => {
  document.getElementById('selector-positions').textContent = e.offsetX + " " + e.offsetY;
  document.getElementById('content').style.background = "rgb("+e.offsetX+","+e.offsetY+",50)";
});