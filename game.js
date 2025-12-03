import platform from "platform.js";
import { Character } from "./character.js";

let canvasWidth = 400;
let canvasHeight = 600;
let character;
let gap;
let platforms = [];

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    colorMode(HSB);
    character = new Character(canvasWidth/2,canvasHeight/2,50,80);

    let platformCount = 6;
    gap = canvasHeight/platformCount;
    for (let i = 1; i < platformCount; i++) {
        platforms.push(new Platform(random(canvasWidth), canvasHeight - i*gap));
    }
}

function draw() {
    background(256,32,100);

    translate(0, canvasWidth / 2 - character.y);

    character.draw();
    character.update();
    
    for (let platform of platforms) {
        platform.draw();
    }

    if (character.y < platforms[platforms.length-1].y + 200) {
        platforms.push(new Platform(random(canvasWidth), platforms[platforms.length-1].y - gap));
    }

}

function keyPressed() {
    if (keyCode === 38) {
        {character.jump();}
    }
    }