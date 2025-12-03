import platform from "platform.js";
import { Character } from "./character.js";



function setup() {
    createCanvas(canvasWidth, canvasHeight);
    colorMode(HSB);
}


let canvasWidth = 400;
let canvasHeight = 500;
let floor = 400;
let character = new Character(0,0,50,80);

function draw() {
    background(256,32,100);

    character.draw();
    platform.draw();

    platform.x -= 10;
    if (platform.x + platform.w <= 0) {
        platform.x = 500;
    }

    // Character gravity
    if (
        character.y + character.h < floor && !character.isColliding(character,platform)
    ) {
        character.y += 10;
    }
    if (keyIsDown(39)===true && character.x+character.w <= canvasWidth){
        {character.x += 15;}
        }
    if (keyIsDown (37)===true && character.x >= 0){
        {character.x -= 15;}
        }

    // Floor
    line(0, floor, canvasWidth, floor);
}

function keyPressed() {
    if (keyCode === 38 && (character.y + character.h === floor || character.isColliding(character, platform))) {
        {character.y -= 120;}
    }
    }