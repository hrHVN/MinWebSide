// You have to get the number from the user (via prompt) and 
// check if the number is the same as the one you hardcoded in the JavaScript file.
const theTarget = 10;

/*
while(true){
    var usrGuess = parseInt(prompt('Please make a Numeric Guess!'));

    if(isNaN(usrGuess)){
        alert('A number, please!');
    }
    else if (usrGuess != theTarget){
        usrGuess = parseInt(prompt(usrGuess, 'Is not correct. Try again!'));
    }
    else {
        alert('Congrats! you guessed '+ usrGuess);
        break;
    }
}
*/

game();

function game() {
const guess = parseInt(prompt('Make a guess!'));

//If the values are the same, you should end the game and congratulate the user with an alert
    if(guess === theTarget) {
        alert('Hooray! that was the number ' + theTarget);
    }
// If the values differ, you should ask the user again after 10 seconds. 
    else {
        setTimeout(game,5000);
//document.getElementById("game").innerHTML = "You guessed: " + guess;
    }
}


