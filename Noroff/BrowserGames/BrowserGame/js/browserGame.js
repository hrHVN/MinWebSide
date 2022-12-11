var character = document.getElementById("character");
var block = document.getElementById("block");

function jump() {
    if(character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(() => {
        character.classList.remove("animate");
    }, 500)
}

var gameOver = setInterval(() => {
    var charactherTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var boxEdge = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

        if(boxEdge < 20 && boxEdge > 0 && charactherTop >= 130){
            block.style.animation = "none";
            block.style.style = "none";
            alert('Game Over!');
        }
    }
    ,10);