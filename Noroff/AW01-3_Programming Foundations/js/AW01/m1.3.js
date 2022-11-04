let x2 = Math.random();
if (x2 > 0.5) {
    console.log("Hello, it's nice to see you here.");
}
else {
    console.log(x2);
}

/*
let y = prompt("Please pass the number between 0 and 1", "0.5");
if (y > 0.5) {
    alert("Hello, it's nice to see you here.");
}
else {
    alert(y);
}
*/

//const anArray = [item1, item2, item3];
const anOtherArray = [];
anOtherArray[0] = "The First item";
anOtherArray[1] = "The Second item";
anOtherArray[2] = "The Third item";
anOtherArray[3] = "The Fourth item";

console.log(anOtherArray[0] + " In an Other Array");

anOtherArray.push();        // adds to the end
anOtherArray.unshift();     // adds to the front
anOtherArray.pop();         // deletes the last element
anOtherArray.shift();       // delets the first element

const userInfo = [];

/*
userInfo.unshift(prompt("What's your name? First Name: "));
userInfo.unshift(prompt("Surname: "));
userInfo.unshift(parseInt(prompt("Are you old enough? Enter Age: ")));

console.log("Userinfo: " + userInfo.join(" | "));
*/

console.log(anOtherArray.toString());                   // converts the array to a comma seperated string
const text = "Hello, it's nice to see you here.";
const words = text.split(" ");                          // Converts the "text" to an array of words
console.log(anOtherArray.concat(userInfo));             // adds the two arrays to one
const alternative2 = [...anOtherArray, ...userInfo];    // also adds two arrays to one

// array.reduce(); Itterates through an array of ints, sum all the values and return the sum. [1,2,3,4,5,6] -> 21
// array.filter(); The filter method checks every element if it fits our condition.


const aA13 = [];
aA13.push(prompt("Name a Colour: "));
aA13.push(prompt("Name a Colour: "));
aA13.push(prompt("Name a Colour: "));

function capitolL(input) {
    return input.toUpperCase;
}
const newlist = aA13.forEach(capitolL);

console.log(newlist);