var character = document.getElementById("character");
var game = document.getElementById("game");
var interval;
var both = 0;
var counter = 0;
var currentBlocks = [];

function moveLeft(){
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    
    if (left > 0){
        character.style.left = left + 2 + "px";
    }
}

function moveRight(){
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    
    if (left < 380){
        character.style.left = left - 2 + "px";
    }
}

// Read inputt from keyboard
document.addEventListener("keydown", event => {
    if (both === 0){
        both++;
        if(event === 'ArrowLeft'){
            interval = setInterval(moveLeft, 1);
        }
        if(event === 'ArrowRight'){
            interval = setInterval(moveRight, 1);
        }
    }
});

// Registers key-release
document.addEventListener("keydown", event => {
    clearInterval(interval);
    both = 0;
});

setInterval(() => {
    let blockLast = document.getElementById("block"+counter-1);
    let holeLast = document.getElementById("block"+counter-1);
    let random = Math.floor(Math.random() * 360);

    // Space the obstacles evenly accros the screen
    if(counter > 0){
        var blockLastTop = parseInt(document.getComputedStyle(blockLast).getPropertyValue("top"));
        var holeLastTop = parseInt(document.getComputedStyle(holeLast).getPropertyValue("top"));
    }

    if (blockLastTop < 400 || counter == 0) {
        // Render an obstacle
        let block = document.createElement("div");
        block.setAttribute("class", "block");
        block.setAttribute("id", "block" + counter);
        block.style.top = blockLastTop + 100 + "px";
        game.appendChild(block);
        
        // Render a Hole in the obstacle
        let hole = document.createElement("div");
        hole.setAttribute("class", "hole");
        hole.setAttribute("id", "hole" + counter);
        hole.style.top = holeLastTop + 100 + "px";
        hole.style.left = random + "px";
        game.appendChild(hole);

        //Adding Current blocks to array
        currentBlocks.push(counter);
        counter++;
    }
    
    for(let i = 0; i < currentBlocks.length; i++){
        let iblock = document.getElementById("block" + currentBlocks[i]);
        let ihole = document.getElementById("hole" + currentBlocks[i]);
        let iblockTop = parseFloat(window.getComputedStyle(iblock).getPropertyValue("top"));

        iblock.style.top = iblockTop - 0.5 + 'px';
        ihole.style.top = iblockTop - 0.5 + 'px';
    }

},1);