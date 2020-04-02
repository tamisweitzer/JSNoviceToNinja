
let button = document.getElementById('button');
let rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo'];

function change() {
  document.body.style.background = rainbow[Math.floor(7 * Math.random())];
}

button.addEventListener('click', change);
