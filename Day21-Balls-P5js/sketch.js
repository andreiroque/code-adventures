let balls = [];
let ballsCount = 50;

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < ballsCount; i++) {
    balls[i] = new Ball(random(0, width - 10), random(0, height - 10));
  }
}

function draw() {
  background(3);
  for (let i = 0; i < balls.length; i++) {
    balls[i].show();
    for (let j = 0; j < balls.length; j++) {
      balls[i].checkDist(balls[j]);
    }
  }
}
