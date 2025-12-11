import { Platform } from "./platform.js";
import { Character } from "./character.js";

let canvasWidth = 400;
let canvasHeight = 600;
let character;
let gap;
let platforms = [];
let difficulty = 10; //sets score at which new platform variants start to appear
let speed = 6;
let gameMode = "start";
let highScore = 0;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  colorMode(HSB);

  platforms = [];

  character = new Character(canvasWidth / 2 - 25, canvasHeight - gap, 50, 60);

  //initial platform generation
  platforms.push(new Platform(canvasWidth / 2 - character.w / 2, canvasHeight));
  let platformCount = 5;
  gap = canvasHeight / platformCount;
  for (let i = 1; i < platformCount; i++) {
    platforms.push(
      new Platform(random(canvasWidth - 15), canvasHeight - i * gap)
    );
  }
}

function draw() {
  if (gameMode == "start") {
    startScreen();
  } else if (gameMode == "play") {
    gameScreen();
  }
}

function startScreen() {
  background(228, 40, 100);
  textSize(30);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("Click to Start", canvasWidth / 2, canvasHeight / 8);
  textSize(20);
  let s =
    "Use the arrow keys to guide Drago the Angel Doggo   from cloud to cloud";
  text(s, canvasWidth / 6, canvasHeight / 5, canvasWidth / 1.5);
}

function gameScreen() {
  background(228, 40, 100);

  /* set character death condition
  when character reaches a certain fall speed
  because character y is locked by the translate command */
  if (character.velocity > 35) {
    noLoop();
    gameOver();
  }

  //keep canvas centered on character y
  translate(0, canvasHeight / 2 - character.y);

  //high score tracker
  if (character.score >= highScore) {
    highScore = character.score;
  }

  push();
  fill(0, 0, 0);
  textSize(30);
  textAlign(CENTER);
  text(character.score, canvasWidth / 2, character.y - 200);
  textSize(20);
  textAlign(CENTER);
  text(`High Score:  ${highScore}`, canvasWidth / 2, character.y + 250);
  pop();

  character.draw();
  character.update(platforms, canvasWidth);

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
  //make the platforms move after a certain point, but freeze once jumped on
  if (character.score > difficulty) {
      platforms[4].x = platforms[4].x + speed;
      if (platforms[4].x > canvasWidth) {
          platforms[4].x = 0 - platforms[4].w;
      }
  }

  if (character.score > difficulty + 1) {
      platforms[3].x = platforms[3].x + speed;
      if (platforms[3].x > canvasWidth) {
          platforms[3].x = 0 - platforms[3].w;
      }
  }

  if (character.score > difficulty + 2) {
      platforms[2].x = platforms[2].x + speed;
      if (platforms[2].x > canvasWidth) {
          platforms[2].x = 0 - platforms[2].w;
      }
  }

  if (character.score > difficulty * 2) {
      //at an even further point the platforms no longer freeze after being jumped on
      platforms[1].x = platforms[1].x + speed;
      if (platforms[1].x > canvasWidth) {
          platforms[1].x = 0 - platforms[1].w + speed;
      }
  }

  if (character.score > difficulty * 2 + 1) {
      platforms[0].x = platforms[0].x + speed;
      if (platforms[0].x > canvasWidth) {
          platforms[0].x = 0 - platforms[0].w + speed;
      }
  }

  //at an even further point the platforms disappear after being jumped on
  if (character.score > difficulty * 3) {
      platforms[0].x = 1000 + speed * 0;
  }

  if (character.score > difficulty * 3 + 1) {
      platforms[1].x = 1000 + speed * 0;
  }
}

function gameOver() {
  textSize(30);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("You scored:", canvasWidth / 2, canvasHeight / 8 - 20);
  textSize(30);
  text(character.score, canvasWidth / 2, canvasHeight / 8 + 25);
  textSize(25);
  text("Press SPACE to play again", canvasWidth / 2, canvasHeight / 8 + 70);
  gameMode = "end";
}

function keyPressed() {
  if (keyCode === 32) {
    if (gameMode == "end") {
      setup();
      loop();
      gameMode = "start";
    }
  }
}

function mouseClicked() {
  if (gameMode == "start") {
    gameMode = "play";
    setup();
    loop();
  }
}

window.setup = setup;

window.draw = draw;

window.addEventListener("click", function (event) {
    mouseClicked();
});

window.addEventListener("keydown", function (event) {
    keyPressed();
});