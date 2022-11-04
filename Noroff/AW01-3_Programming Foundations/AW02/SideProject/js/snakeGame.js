import { update as updateSnake, draw as drawSnake, snakeSpeed, 
    gamePoints, getSnakeHead, snakeIntersection } from "./snake.js";
import { update as updateFood, draw as drawFood } from "./snakeFood.js";
import { outsideGrid } from "./snakeGrid.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

// Main rendering Loop
function main(currentTime) {
if (gameOver) {
    if (confirm('GameOver! your Score was: ' + gamePoints + '\n Press ok to restart')) {
        window.location = '/www_hvn/Noroff/AW01-3_Programming%20Foundations/AW02/SideProject/snakeGame.html'
    }
    return;
}

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    
    if (secondsSinceLastRender < 1 / snakeSpeed) return;
    
    // console.log("render");
    lastRenderTime = currentTime;

    update();
    draw();
}

window.requestAnimationFrame(main);

function update(){
    updateSnake();
    updateFood();
    checkDeath();
}

function draw(){
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}