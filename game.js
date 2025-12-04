import platform from "platform.js";
import { Character } from "./character.js";

let canvasWidth = 400;
let canvasHeight = 600;
let character;
let gap;
let platforms = [];
let score = 0;
let difficulty = 5;
let speed = random(10);

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  colorMode(HSB);

  platforms = [];
  score = 0;

  character = new Character(canvasWidth / 2, canvasHeight - gap, 50, 60);

  //initial platform generation
  platforms.push(new Platform(canvasWidth / 2 - 35 / 2, canvasHeight));
  let platformCount = 5;
  gap = canvasHeight / platformCount;
  for (let i = 1; i < platformCount; i++) {
    platforms.push(
      new Platform(random(canvasWidth - 15), canvasHeight - i * gap)
    );
  }
}

function draw() {
  background(228, 40, 100);

  if (character.velocity > 35) {
    noLoop();
    gameOver();
  }

  translate(0, canvasHeight / 2 - character.y);

  push();
  fill(0, 0, 0);
  textSize(30);
  textAlign(CENTER);
  text(score, canvasWidth / 2, character.y - 200);
  pop();

  character.draw();
  character.update(platforms);

  for (let platform of platforms) {
    platform.draw();
  }

  //add more platforms as character moves up
  if (character.y < platforms[platforms.length - 1].y + 200) {
    platforms.push(
      new Platform(
        random(canvasWidth - 20),
        platforms[platforms.length - 1].y - gap
      )
    );
  }

  if (score > difficulty) {
    platforms[2].x = platforms[2].x + speed;
    if (platforms[2].x > canvasWidth) {
      platforms[2].x = 0 - platforms[2].w + speed;
    }
  }

  if (score > difficulty + difficulty) {
    platforms[1].x = platforms[1].x + speed;
    if (platforms[1].x > canvasWidth) {
      platforms[1].x = 0 - platforms[1].w + speed;
    }
  }
}

console.log(platforms[2]);

function gameOver() {
  textSize(30);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("You scored:", canvasWidth / 2, canvasHeight / 8 - 20);
  textSize(30);
  text(score, canvasWidth / 2, canvasHeight / 8 + 25);
  textSize(25);
  text("Press SPACE to play again", canvasWidth / 2, canvasHeight / 8 + 70);
}

function keyPressed() {
  if (keyCode === 32) {
    setup();
    loop();
  }
}
