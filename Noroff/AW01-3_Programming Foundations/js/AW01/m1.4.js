let x = 0;
function increment() {
    x ++;
    document.getElementById("scriptUt").innerHTML = x;
}

const exArr = ["an", "array", "of", "10", "words", "to", "be", "printed", "in", "here"];
let value = "";
function assignment1(){
    for (let i = 0; i < exArr.length; i++){    
        value += exArr[i] + " ";
        console.log(exArr[i]); 
    }
    document.getElementById("aOut1").innerHTML = value;
}

const ex2Arr = [];
function assignment2() {
    for (let i = 0; i < 100; i++){
        ex2Arr.unshift(i);
    }
    for (let i = 0; i < ex2Arr.length; i++) {
        if (ex2Arr[i] % 7 == 0) {
            document.getElementById("aOut2").innerHTML = "Found first multiplicity of 7. " + ex2Arr[i];
            console.log("Found first multiplicity of 7. " + ex2Arr[i]);
            console.log(ex2Arr[i]);
            break;
        }
        else {
            console.log(ex2Arr[i]);
        }
    }
}

function assignment3() {
    while(true){
        let user = prompt("enter a number, if i like it ill stopp asking: ");
        if (user % 2 == 0){
            alert(user + " ,Why you so boring!");
            break;
        }
    }
}

function assignment4() {
    function ex4f (a, b, c){
        return a + b + c;
    }
    let ex4v = ex4f( Math.random(), (Math.random()/2) , 1);
    document.getElementById("aOut4").innerHTML = ex4v;
}

function assignment5() { 
    function gangeMan(){
        let res = 1;
        for (let i = 0; i < arguments.length; i++){
            res *= arguments[i];
        }
        return res;
    }
    document.getElementById("aOut5").innerHTML = gangeMan(1,5,8,9,6,49,52);
}

function assignment6() { 
    const stupido = function () {
        let res = 1;
        for (let i = 0; i < arguments.length; i++){
            res *= arguments[i];
        }
        return res;
    };
    const xy = stupido(2,3,4);
    document.getElementById("aOut6").innerHTML = xy;
}