function start() {
    while (true) {
        userInput= parseFloat(prompt("Pleas enter a Number: "));

        if (userInput > 1 && userInput < 20) {
            task1_2 = userInput;
            console.log(userInput);
            break;
        }
        console.log("Try again: " + userInput);   
    }
  
    for (let i = 1; i < 1000; i++) {
        if (i % 23 !== 0) {
            console.log(i);
        }
    }
}

let userInput2;

function start2() {
    while (true) {
        userInput2= parseFloat(prompt("Pleas enter a Number: "));

        if (userInput2 >= 1 && userInput2 < 100) {
            console.log(userInput2);
            document.getElementById("btnT2").innerHTML = userInput2;
            break;
        }
        console.log("Try again: " + userInput2);   
    }
}

function increment() {
    if (userInput2 <= 1 || userInput2 >= 99) {
        document.getElementById("btnT2").innerHTML = "Game Over!";    
    }
    else if (userInput2 !== NaN) {
        userInput2 ++;
        document.getElementById("btnT2").innerHTML = userInput2;
        console.log(userInput2);
    } else { 
        document.getElementById("btnT2").innerHTML = "Click start 2";
    }
}

function decrement() {   
    if (userInput2 <= 1 || userInput2 >= 99) {
        document.getElementById("btnT2").innerHTML = "Game Over!";    
    }
    else if (userInput2 !== NaN) {
        userInput2 --;
        document.getElementById("btnT2").innerHTML = userInput2;
        console.log(userInput2);
    } else  {
        document.getElementById("btnT2").innerHTML = "Click start 2";
    }
}