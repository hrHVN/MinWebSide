//First, you need to get two numbers from the user. Both need to be positive integers.

var usrNum1 = parseInt(prompt('Please enter a positive number: '));
var usrNum2 = parseInt(prompt('And one more: '));

//The bigger one defines the size of your array.
var arraySize = 0;
var dividend = 0;
if (usrNum1 > usrNum2){ 
    arraySize = usrNum1;
    dividend = usrNum2;
 }
else { 
    arraySize = usrNum2; 
    dividend = usrNum1;
}

console.log('Array int:', arraySize);
console.log('divisor:', dividend);

const numbersArray = Array.from(Array(parseFloat(arraySize)).keys());
const copyOfna = Array.from(numbersArray);

console.log('The array:', numbersArray);
/*
We want to sort all elements by the remainder when dividing by the second, smaller parameter. 
If the remainder is the same for two numbers, the smaller one should be before the greater one. 
We can get the remainder through the modulo operator:
*/


/*
while(true){
    var arraySize = prompt('A number please:');

    if (isNaN(arraySize) || arraySize < 1) {
        alert('Only Positive numbers!');
    }
    else {
        break;
    }
}

while(true){
    var dividend = prompt('A number please:');

    if (isNaN(dividend) || dividend < 1 || dividend >= arraySize) {
        alert('Only Positive numbers less than array size!');
    }
    else {
        break;
    }
}
*/

function bubleSort (arr, div){
    for(var i = 0; i <= arraySize; i++){
        for (var x = 0; x < arraySize; x++) { 
            if(arr[x - 1] % div > arr[x] % div) {
                let temp = arr[x - 1];
                arr[x - 1] = arr[x];
                arr[x] = temp;
            }
        }
    }
    console.log('the home made Sorting:', arr);
}

function meth(arr, div){
    arr.sort((a,b) => compare(a,b, div));
    console.log('The "sort((a,b) => compare(a,b, div))" method:', arr);
}

const compare = (a, b, mod) => {
    if (a % mod > b % mod){
        return 1;
    }
    else {
        if (a % mod === b % mod){
            return 0;
        }
    }
    return -1;
}



bubleSort(copyOfna, dividend);
meth(numbersArray, dividend)