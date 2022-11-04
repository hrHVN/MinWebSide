import { getInputDirection } from "./snakeInput.js";

export var snakeSpeed = 2;

const snakeBody = [{x: 11, y: 11}];
var newSegments = 0;

export function update(){
    addSegments();

    const inputtDirection =  getInputDirection();
    for (let i = snakeBody.length - 2; i >= 0; i--){
        snakeBody[i + 1] = {...snakeBody[i] };
    }

    snakeBody[0].x += inputtDirection.x;
    snakeBody[0].y += inputtDirection.y;

    gamePoints = snakeBody.length;
}

export function draw(gameBoard){
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');

        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');

        gameBoard.appendChild(snakeElement);    
    });
}

export function expandSnake(ammount) {
    newSegments += ammount;
}

export function onSnake(position, {ingoreHead = false} = {}) {
    return snakeBody.some((segment, index) => {
        if (ingoreHead && index == 0) return false;
        return equalPositions(segment, position);
    });
}

export function getSnakeHead(){
    return snakeBody[0];
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], {ingoreHead: true})
}

function equalPositions(pos1, pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments(){
    for (let i = 0; i < newSegments; i++){
        snakeBody.push({...snakeBody[snakeBody.length - 1]});
        
        if (snakeBody.length % 2 == 0){
            snakeSpeed++;
        }
    }

    newSegments = 0;
}



export var gamePoints = snakeBody.length;