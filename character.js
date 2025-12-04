export default class Character {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.velocity = 0;
    this.gravity = 0.8;
    this.jumpPower = 16;
  }

  draw() {
    push();
    fill(25, 60, 60);
    circle(this.x + 25, this.y + 45, 25);
    pop();

    push();
    beginShape(); //left wing
    fill(0, 0, 100);
    vertex(this.x + 9, this.y + 37);
    vertex(this.x - 5, this.y + 27);
    bezierVertex(
      this.x - 6,
      this.y + 27,
      this.x - 5,
      this.y + 31,
      this.x - 3,
      this.y + 33
    );
    bezierVertex(
      this.x - 6,
      this.y + 32,
      this.x - 5,
      this.y + 35,
      this.x - 1,
      this.y + 38
    );
    bezierVertex(
      this.x - 3,
      this.y + 39,
      this.x - 1,
      this.y + 43,
      this.x + 4,
      this.y + 42
    );
    bezierVertex(
      this.x + 5,
      this.y + 42,
      this.x + 7,
      this.y + 39,
      this.x + 8,
      this.y + 38
    );
    endShape();
    pop();

    push();
    fill(25, 60, 60);
    beginShape(); //front paws
    vertex(this.x + 5, this.y + 38);
    bezierVertex(
      this.x + 6,
      this.y + 48,
      this.x + 2,
      this.y + 60,
      this.x + 7,
      this.y + 60
    );
    bezierVertex(
      this.x + 6,
      this.y + 60,
      this.x + 12,
      this.y + 60,
      this.x + 12,
      this.y + 56
    );
    bezierVertex(
      this.x + 14,
      this.y + 57,
      this.x + 17,
      this.y + 57,
      this.x + 18,
      this.y + 56
    );
    bezierVertex(
      this.x + 18,
      this.y + 60,
      this.x + 22,
      this.y + 60,
      this.x + 24,
      this.y + 60
    );
    bezierVertex(
      this.x + 27,
      this.y + 57,
      this.x + 25,
      this.y + 56,
      this.x + 25,
      this.y + 48
    );
    endShape();
    pop();

    push();
    fill(25, 35, 25);
    beginShape(); //tail
    vertex(this.x + 40, this.y + 55);
    bezierVertex(
      this.x + 50,
      this.y + 54,
      this.x + 48,
      this.y + 48,
      this.x + 46,
      this.y + 46
    );
    bezierVertex(
      this.x + 48,
      this.y + 49,
      this.x + 41,
      this.y + 53,
      this.x + 40,
      this.y + 53
    );
    endShape();

    beginShape(); //back end
    vertex(this.x + 32, this.y + 36);
    bezierVertex(
      this.x + 38,
      this.y + 36,
      this.x + 42,
      this.y + 48,
      this.x + 42,
      this.y + 52
    );
    bezierVertex(
      this.x + 42,
      this.y + 60,
      this.x + 28,
      this.y + 60,
      this.x + 28,
      this.y + 56
    );
    bezierVertex(
      this.x + 30,
      this.y + 53,
      this.x + 32,
      this.y + 56,
      this.x + 30,
      this.y + 52
    );
    bezierVertex(
      this.x + 30,
      this.y + 50,
      this.x + 30,
      this.y + 48,
      this.x + 34,
      this.y + 47
    );
    endShape();
    pop();

    push();
    beginShape(); //right wing
    fill(0, 0, 100);
    vertex(this.x + 31, this.y + 36);
    vertex(this.x + 44, this.y + 26);
    bezierVertex(
      this.x + 45,
      this.y + 26,
      this.x + 44,
      this.y + 30,
      this.x + 42,
      this.y + 32
    );
    bezierVertex(
      this.x + 45,
      this.y + 31,
      this.x + 44,
      this.y + 34,
      this.x + 40,
      this.y + 37
    );
    bezierVertex(
      this.x + 42,
      this.y + 38,
      this.x + 40,
      this.y + 42,
      this.x + 35,
      this.y + 41
    );
    bezierVertex(
      this.x + 34,
      this.y + 41,
      this.x + 32,
      this.y + 38,
      this.x + 32,
      this.y + 37
    );
    endShape();
    pop();

    push();
    fill(25, 60, 60);
    beginShape(); //left ear
    vertex(this.x + 1, this.y + 20);
    bezierVertex(
      this.x - 1,
      this.y + 10,
      this.x,
      this.y + 5,
      this.x + 3,
      this.y - 1
    );
    bezierVertex(
      this.x + 5,
      this.y,
      this.x + 12,
      this.y + 5,
      this.x + 13,
      this.y + 9
    );
    endShape();

    beginShape(); //head
    vertex(this.x + 12, this.y + 42);
    bezierVertex(
      this.x,
      this.y + 42,
      this.x - 2,
      this.y + 32,
      this.x,
      this.y + 26
    );
    bezierVertex(
      this.x + 2,
      this.y + 14,
      this.x + 6,
      this.y + 7,
      this.x + 15,
      this.y + 7
    );
    bezierVertex(
      this.x + 26,
      this.y + 7,
      this.x + 36,
      this.y + 12,
      this.x + 36,
      this.y + 26
    );
    bezierVertex(
      this.x + 36,
      this.y + 42,
      this.x + 22,
      this.y + 42,
      this.x + 12,
      this.y + 42
    );
    endShape();

    beginShape(); //right ear
    vertex(this.x + 24, this.y + 9);
    bezierVertex(
      this.x + 24,
      this.y + 7,
      this.x + 30,
      this.y,
      this.x + 33,
      this.y - 1
    );
    bezierVertex(
      this.x + 36,
      this.y + 2,
      this.x + 37,
      this.y + 18,
      this.x + 35,
      this.y + 22
    );
    endShape();
    pop();

    push(); //tummy
    fill(35, 50, 85);
    strokeWeight(0.5);
    ellipse(this.x + 15, this.y + 51, 8, 12);
    pop();

    beginShape(); //mouth
    vertex(this.x + 9, this.y + 32);
    bezierVertex(
      this.x + 9,
      this.y + 33,
      this.x + 12,
      this.y + 33,
      this.x + 12,
      this.y + 30
    );
    bezierVertex(
      this.x + 12,
      this.y + 33,
      this.x + 15,
      this.y + 33,
      this.x + 15,
      this.y + 32
    );
    endShape();

    fill(0, 0, 0); //face
    ellipse(this.x + 12, this.y + 29, 5, 2);
    ellipse(this.x + 6, this.y + 25, 2, 3.5);
    ellipse(this.x + 19, this.y + 25, 2, 3.5);

    push(); //halo
    fill(0, 0);
    stroke(35, 95, 100);
    ellipse(this.x + 19, this.y - 5, 20, 6);
    pop();
  }

  update() {
    //screen wrapping
    if (this.x + this.w < 0) this.x = canvasWidth;
    if (this.x > canvasWidth) this.x = -this.w;

    //gravity affects character
    this.velocity += this.gravity;
    this.y += this.velocity;

    //move right
    if (keyIsDown(39) === true) {
      {
        this.x += 8;
      }
    }

    //move left
    if (keyIsDown(37) === true) {
      {
        this.x -= 8;
      }
    }

    //collision detection
    for (let platform of platforms) {
      if (
        this.y + this.h >= platform.y &&
        this.y + this.h <= platform.y + platform.h
      ) {
        let minX = platform.x - this.w;
        let maxX = platform.x + platform.w;

        if (this.x >= minX && this.x <= maxX) {
          if (this.velocity > 0) {
            this.jump();
          }
        }
      }
    }

    //max jump speed to keep things from getting out of hand
    if (this.velocity < -40) this.velocity = -40;

    //clear platforms as they reach the bottom
    if (platforms[0].y > character.y + 400) {
      platforms.splice(0, 1);
      score++;
    }
  }

  jump() {
    this.velocity = 0;
    this.velocity -= this.jumpPower;
  }
}
