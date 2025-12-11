export class Platform {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 70;
    this.h = 15;
  }

  draw() {
    push();
    strokeWeight(2);
    stroke(220, 20, 95);
    fill(0, 0, 100);
    rect(this.x, this.y, this.w, this.h);

    ellipse(this.x + 0.8 * this.w, this.y + 0.45 * this.h, this.w - 20, this.h);
    ellipse(this.x + 0.5 * this.w, this.y + 0.3 * this.h, this.w / 1.2, this.h);
    ellipse(this.x + 0.1 * this.w, this.y + 0.5 * this.h, this.w / 1.5, this.h);
    ellipse(this.x + 0.6 * this.w, this.y + 0.75 * this.h, this.w, this.h);
    pop();
  }
}
export { Platform }