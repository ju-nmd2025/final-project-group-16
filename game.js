import platform from "platform.js";
import { Character } from "./character.js";

let canvasWidth = 400;
let canvasHeight = 500;
let floor = 400;
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

    character.draw();
    character.update();
    
    for (let platform of platforms) {
        platform.draw();
    }
}

function keyPressed() {
    if (keyCode === 38) {
        {character.jump();}
    }
    }