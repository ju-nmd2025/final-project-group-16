export class Platform {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 70;
        this.h = 15;
    }


    draw() {
        push();
        fill("blue");
        rect(this.x, this.y, this.w, this.h);
        pop();
    }
}
