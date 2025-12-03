export default class Character {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.velocity = 0;
    this.gravity = 0.98;
    this.jumpPower = 10;
  }

  draw() {
    rect(this.x, this.y, this.w, this.h);
  }

  update() {
    if (this.x + this.w < 0) this.x = canvasWidth;
    if (this.x > canvasWidth) this.x = -this.w;

    this.velocity += this.gravity;
    this.y += this.velocity;

    if (keyIsDown(39) === true) {
      {
        this.x += 4;
      }
    }
    if (keyIsDown(37) === true) {
      {
        this.x -= 4;
      }
    }

    for (let platform of platforms) {
      if (
        this.y + this.h >= platform.y &&
        this.y + this.h <= platform.y + platform.h
      ) {
        let minX = platform.x - this.w;
        let maxX = platform.x + platform.w;

        if (this.x >= minX && this.x <= maxX) this.jump();
      }
    }

    if (this.velocity < -9) this.velocity = -9;

    if (platforms[0].y > character.y + 400) {
      platforms.splice(0, 1);
      score++;
    }
  }

  jump() {
    this.velocity -= this.jumpPower;
  }
}
