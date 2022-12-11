
// function to put text inside a HTML element by id
function print (ElementID, text) {
    // document.getElementById(ElementID).innerHTML = text; // I dont work
    console.log(text);
}

//Dividing input value by 2
function half(value) {
    return value / 2;
}

// Callculator that divides the sum of to ints => (a+b)/2
function calculator (a, b, callback, calback2) {
    let result =  a + b;
    result = calback2(result);
    callback('ac23', result);
}

//setTimeout(() => calculator(1, 2, print, half), 5000);

function timer (callback){
    counter++;
    callback('ac23',counter);
}

// var counter = 0;
// const id = setInterval(() => timer(print), 2000);
// setTimeout(() => clearInterval(id), 30000);

let promise = new Promise(function(resolve, reject) {
    let x = 0;
    if (x == 0) {
        resolve("OK");
    } 
    else {
        reject("Error");
    }
});

promise.then(
    function(value) {print("ac23", value);},
    function(error) {print("ac23", error);}
);