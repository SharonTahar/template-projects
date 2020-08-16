console.log('Hello World');

var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d'); 
var tx = window.innerHeight;
var ty = window.innerWidth;
canvas.width = tx;
canvas.height = ty; 

var mousex = 0;
var mousey = 0;

addEventListener('mouseover', function() {
    mousex = event.clientx;
    mousey = event.clienty;
});

var grav = 0.99;
c.strokeWidth=5;
function randomColor() {
  return (
    "rgba(" +
    Math.round(Math.random() * 250) +
    "," +
    Math.round(Math.random() * 250) +
    "," +
    Math.round(Math.random() * 250) +
    "," +
    Math.ceil(Math.random() * 10) / 10 +
    ")"
  );
}

function Ball() {
    this.color = randomColor();
}

var bal = [];
for (var i=0; i<50; i++){
    bal.push(new Ball());
}

function animate() {    
    if (tx != window.innerWidth || ty != window.innerHeight) {
      tx = window.innerWidth;
      ty = window.innerHeight;
      canvas.width = tx;
      canvas.height = ty;
    }

  }