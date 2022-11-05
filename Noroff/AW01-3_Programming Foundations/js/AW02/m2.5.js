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
var test = "  hallo eg er ein lang streng med jevne mellom romm  ";

function MyStringFunction(string) {
    const tempArr = string.trim().split(' '); // Remove lead-/trailing whitespace and Make a list of all the words
    console.log(tempArr);
    let newstring = '';

    // Make a new string with all the words, no spaces or seperators.
    for (let i = 0; i < tempArr.length - 1; i++) {
        newstring += tempArr[i];
    }
    console.log(newstring);
    return newstring;
}

// 6# Write a function ‘Upper’ that takes a string and returns the uppercase of the string.


// 7# Write a function ‘Add’ that takes two numbers and returns their sum.
function sumTwo (a, b) {
    return a +b ;
}

// 8# Write a function ‘Modulo’ that takes a natural number and a dividend and returns the remainder of the modulo (%) of the two numbers.
function modulo(number, divisor) {
    return number % divisor;
}

// 9# Write a function ‘MinMax’ that finds the min and max numbers of an array of numbers.
const minMax = (array) => {
    let _array = array;
    let max = 0;
    let min = 0;

    if (_array.length <= 1) {return _array;}

    for (let i = 0; i < _array.length; i++){
        for (let j = 0; j < _array.length; j++)
        {
            if (_array[j - 1] < _array[j]){
            let temp = _array[j - 1];
            _array[j - 1] = _array[j];
            _array[j] = temp;
            }
        }
        if (_array[i] > max) { max = _array[i];}
        if (_array[i] < min) { min = _array[i];}
    }
    console.log(_array + ' min ' + min + ' max ' + max);
    return min, max;
}

// 10# Write a function ‘Parse’ that takes a string (‘20’) and a number (5) and returns the multiplication of the string and the number (use the parseInt function to read the string as a number).
// 11# Write a function that accepts two numbers and checks if the numbers are equal. After the condition is checked, log an appropriate message to the console.
// 12# Write a function ‘toArray’ that accepts four values and returns an array of these values.
// 13# Write a function ‘ArrayLength’ that takes an array of values and returns the array’s length.
// 14# Write a function ‘ArraySort’ that takes an array of values and returns a sorted array. (Make use of the sort() function).
// 15# Create a js file containing a line comment and a multiline comment/block comment.
// 16# Write a function ‘MyForLoop’ that loops until a variable equals 10. The variable should be incremented by ‘1’ in each iteration. (Make use of the for-loop).
// 17# Write a function ‘MyWhileLoop’ that declares a variable set to ‘10’ and loops until that variable is equal to ‘0’. The variable should be decremented by ‘1’ in each iteration. (Make use of the while-loop).
// 18# Write a function that checks if a given value is a number. (Make use of the isNan() funtion). Return a Boolean of the result.
// 19# Write a function ‘SplitFunction’ that accepts the string ‘7+12+100’ and splits it into individual values, then summing these values. (Make use of the split() and parseInt() functions). Return the summed result.
// 20# Write a function ‘Factorial’ that accepts a positive integer and calculates the factorial of that integer. Return the result.