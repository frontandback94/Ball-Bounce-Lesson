let ball = document.getElementById('float-circle');
let base = document.getElementById('platform');
// Write your code below
const up = function() {
  ball.style.bottom = '250px';
  ball.style.left = '100px';
  base.style.left = '100px';
}

const down = function() {
  ball.style.bottom = '50px';
  ball.style.left = '150px';
  base.style.left = '30%';
}
//document.addEventListener('keydown', up);
//document.addEvertListener('keyup', down);
document.onkeydown = up;
document.onkeyup = down;