
// initial promt for a value
let y = parseFloat(prompt("Please pass the number between 0 and 1", "0.5"));

//check the value
if (typeof(y) != 'number' || y < 0 || y > 1 ) {
    //if value is not correct, try agin
    y = parseFloat(prompt("Try again, a number between 0 and 1", "0.5"));
}
//check the second prompt
if (isNaN(y) || y < 0 || y > 1 ) {
    alert("your data is wrong, still!")
}

else if (y > 0.5) {
    alert("Hello, it's nice to see you here.");
  }
else {
    alert(y);
}


//create an array containing 10 names of vegetables
const veggisAr = ["vegg1","vegg2","vegg3","vegg4","vegg5",
"vegg6","vegg7","vegg8","vegg9","vegg10",];

console.log(veggisAr.length);

veggisAr.forEach(isEven);

//At least one vegetable name should have an even length
//Using the iterator method, 
//show the user an alert containing this name if the length of the vegetable name is even.

function isEven(value, array) {
    if (value.length % 2 == 0) {
    return alert(value);
    }
}

