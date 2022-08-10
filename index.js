const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let raf;
//let xc = Math.floor(Math.random * 400 + 1);
//let yc = Math.floor(Math.random * 1000 + 1);
const ball = {
  x: 10,
  y: 20,
  vx: 5,
  vy: 2,
  radius: 10,
  color: "blue",
  drawn() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.drawn();
  ball.x += ball.vx;
  ball.y += ball.vy;
  ball.vy *= 0.99;
  ball.vy += 0.25;

  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }
  raf = window.requestAnimationFrame(draw);
}
draw();

//const btn1 = document.getElementById("b1");
//btn1.addEventListener(onclick, function () {
//myGamePiece.speedY -= 1;
//});
