const theMainWindow = document.getElementById('main');

// 1# Create a ‘Hello’ function, that returns ‘Hello world’.
function helloWorld(theMesage = 'HelloWorld', ElemetType = 'div', ElemntId = 'helloWorld') {
    const theDiv = document.createElement(ElemetType);
    theDiv.id = ElemntId;
    theMainWindow.appendChild(theDiv);
    
    document.getElementById('helloWorld').innerHTML = theMesage;
}

// 2# Define two functions. The first function a should return ‘Hello a!’ and the second function should return ‘Hello b!’
function helloA() {
    const theDiv = document.createElement('div');
    theDiv.id = 'helloA';
    theMainWindow.appendChild(theDiv);
    
    document.getElementById('helloA').innerHTML = 'Hello A!';
}

function helloB() {
    const theDiv = document.createElement('div');
    theDiv.id = 'helloB';
    theMainWindow.appendChild(theDiv);
    
    document.getElementById('helloB').innerHTML = 'Hello B!';
}

// 3# Write a function ‘Greet’ that takes one parameter and returns the 'Hello <parameter>!'
function greetingParam(parameter = 'Mr no body') {
    const theDiv = document.createElement('div');
    theDiv.id = 'greetParam';
    theMainWindow.appendChild(theDiv);
    
    document.getElementById('greetParam').innerHTML = 'Hello ' + parameter + '!';
}

// 4# Write a function ‘Log’ that takes a parameter and logs it.
function logParam(parameter = 'logged to console') {
    console.log(parameter);
}

// 5# Write a function ‘MyStringFunction’ that takes a string and returns the number of characters in that string. (Make use of string.length).
//var test = "  hallo eg er ein lang streng med jevne mellom romm  ";

function MyStringFunction(string) {
    // Remove lead-/trailing whitespace and Make a list of all the words
    const tempArr = string.trim().split(' '); 
    let newstring = '';

    // Make a new string with all the words, no spaces or seperators.
    for (let i = 0; i < tempArr.length - 1; i++) {
        newstring += tempArr[i];
    }
    return newstring;
}

// 6# Write a function ‘Upper’ that takes a string and returns the uppercase of the string.

function upper(stringCase){
    //defines the range of letters to scan
    const regex = /[A-Z]/;
    // .match() returns an array of "matches"
    let myUpper = stringCase.match(regex);
    // returns the first instance of 'upper'
    return myUpper[0];
}

// 7# Write a function ‘Add’ that takes two numbers and returns their sum.
function sumTwo (a, b) {
    return a +b ;
}

// 8# Write a function ‘Modulo’ that takes a natural number and a dividend and returns the remainder of the modulo (%) of the two numbers.
function modulo(number, divisor) {
    return parseFloat(number % divisor);
}

// 9# Write a function ‘MinMax’ that finds the min and max numbers of an array of numbers.
const minMax = (array) => {
    let max = array[0];
    let min = array[0];

    // I detemin if it is worth our time, and return default.
    if (array.length <= 1) {return min, max;}

    // I sort the arrray in ascending order
    for (let i = 0; i < array.length; i++){  
        for (let j = 0; j < array.length; j++) 
        {
            if (array[j + 1] < array[j]){  
            let temp = array[j + 1];            
            array[j + 1] = array[j];         
            array[j] = temp;                    
            }
        }
        // If the current i-value is diffrent from array[0], update.
        max = (array[i] > max) ? array[i]: max = max; 
        min = (array[i] < min) ? array[i]: min = min; 
    }
    // console.log(array + ' min ' + min + ' max ' + max);
    return min, max;
}

// 10# Write a function ‘Parse’ that takes a string (‘20’) and a number (5) and returns the multiplication of the string and the number 
// (use the parseInt function to read the string as a number).

function parse( string, number){
    return number * parseInt(string);
}

// 11# Write a function that accepts two numbers and checks if the numbers are equal. After the condition is checked, log an appropriate message to the console.
function isEqual( num1, num2) {
    let wtf = (num1 == num2) ? console.log('They are equal in som regards..') : console.log('Not really a match is it!');
}

// 12# Write a function ‘toArray’ that accepts four values and returns an array of these values.
function toArray(val1, val2, val3, val4){
    const _array = [];
    _array.push(val1);
    _array.push(val2);
    _array.push(val3);
    _array.push(val4);
    return _array;
}

// 13# Write a function ‘ArrayLength’ that takes an array of values and returns the array’s length.
function arrayLength(array) {
    return array.length;
}
// 14# Write a function ‘ArraySort’ that takes an array of values and returns a sorted array. (Make use of the sort() function).
function arrayJsSorting(valueInn) {
    let isObject = [];
    let isArray = [];
    let isInt = [];
    let isStr = [];

    // check each element for type and sort
    for(let i = 0; i < valueInn.length; i++) {
        if (typeof valueInn[i] === 'object'){ isObject.push(valueInn[i])}
        if (Array.isArray(valueInn[i])){ isArray.push(valueInn[i])}
        if (typeof valueInn[i] == 'number'){ isInt.push(valueInn[i])}
        if (typeof valueInn[i] === 'string'){ isStr.push(valueInn[i])}
    };
    
    //Sort every element by acending order (1-9)
    isInt.sort(function(a,b){return a - b; });
    isStr.sort((a, b) => a - b );
    isObject.sort(function(a,b){return a.name - b.name});
    isArray.sort((a, b) => a - b )

    //Make one bigg array!
    const sortedValueInn = isInt.concat(isStr).concat(isArray).concat(isObject);
    //console.log(sortedValueInn);
    return sortedValueInn;
}
// 15# Create a js file containing a line comment and a multiline comment/block comment.
            /*
            MultiLine Comment
            */
// 16# Write a function ‘MyForLoop’ that loops until a variable equals 10. The variable should be incremented by ‘1’ in each iteration. (Make use of the for-loop).
const myForLoop =() => {
    let end = 10;
    for (let i = 0; i< end; i++){
        console.log('i am looping ', i);
    }
}

// 17# Write a function ‘MyWhileLoop’ that declares a variable set to ‘10’ and loops until that variable is equal to ‘0’. 
//The variable should be decremented by ‘1’ in each iteration. (Make use of the while-loop).

const myWhileLoop = () => {
    let cya = 10;
    while(true) {
        if (cya == 0) { console.log('exit loop'); return;} //Brakes the loop if true
        //console.log(cya);
        cya--;
    }
}

// 18# Write a function that checks if a given value is a number. (Make use of the isNan() funtion). Return a Boolean of the result.
function iAmFalse(number) {
    return isNaN(number);
}
// 19# Write a function ‘SplitFunction’ that accepts the string ‘7+12+100’ and splits it into individual values, then summing these values. 
//(Make use of the split() and parseInt() functions). Return the summed result.
function splitFunction(wierdString){
    const tempArr = wierdString.split('+');
    let sum = 0;
    for (let i = 0; i < tempArr.length; i++){
        sum += parseInt(tempArr[i]);
    }
    return sum;
}

// 20# Write a function ‘Factorial’ that accepts a positive integer and calculates the factorial of that integer. Return the result.

function factorial(input){
    let sum = 1;
    // eks input = 5 => sum = 5*4*3*2*1 = 120
    for (let i = input; i != 1; i--){
        sum *= i;
    }
    return sum;
}