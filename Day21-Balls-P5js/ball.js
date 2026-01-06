class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 20;
    this.xvel = random(-5, 5);
    this.yvel = random(-5, 5);
  }

  show() {
    noStroke();
    ellipse(this.x, this.y, this.size);
  }

  update() {
    if (this.x < 0 || this.x > width - this.size / 2) {
      this.xvel *= -1;
    }

    if (this.y < 0 || this.y > height - this.size / 2) {
      this.yvel *= -1;
    }

    this.x += this.xvel;
    this.y += this.yvel;
  }

  checkDist(other) {
    let x1 = this.x;
    let y1 = this.y;
    let x2 = other.x;
    let y2 = other.y;

    let d = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    if (d <= 120) {
      stroke(255);
      strokeWeight(2);
      line(x1, y1, x2, y2);
    }
  }
}
