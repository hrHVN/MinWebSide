import { onSnake, expandSnake } from "./snake.js";
import {randomGridPosistion} from "./snakeGrid.js"

var food = getRandomFoodPosition();
const foodExpansionRate = 1;

export function update(){
    if (onSnake(food)) {
        expandSnake(foodExpansionRate);
        food = getRandomFoodPosition();
    }
}

export function draw(gameBoard){
        const foodElement = document.createElement('div');

        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');

        gameBoard.appendChild(foodElement);    
}

function getRandomFoodPosition() {
    let newFoodPosition;

    while (newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosistion();
    }

    return newFoodPosition;
}

