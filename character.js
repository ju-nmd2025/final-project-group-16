export default class Character {

    	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;

        this.velocity = 0;
        this.gravity = .98;
        this.jumpPower = 20;
	}

    draw() {
        rect(this.x, this.y, this.w, this.h);

    }

    update(){
        if (this.x + this.w < 0) this.x = canvasWidth;
        if (this.x > canvasWidth) this.x = -this.w;

        this.velocity += this.gravity;
        this.y += this.velocity;

        if (keyIsDown(39)===true){
        {this.x += 15;}
        }
        if (keyIsDown(37)===true){
        {this.x -= 15;}
        }
    }
    
    jump(){
        this.velocity -= this.jumpPower;
    }

    isColliding(character, platform) {
    if (platform.y === character.y + character.h && 
        platform.x <= character.x + character.w &&
        platform.x + platform.w >= character.x){
        return true;
    } else {
        return false;
    }
}
}