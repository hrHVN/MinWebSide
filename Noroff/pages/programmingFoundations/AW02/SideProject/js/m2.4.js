//Random Number generator
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const tableCount = 15;
const customers = [];

let tableSizes = Array.from(Array(tableCount).keys()).map( () => getRandomInt(2, 10)); //declares how many people can seat at table of certain index
let sneakyAttackId = 0;
let memory  = 0;

console.log(tableSizes);
// I will periodicly print the current Custumers to the Console
console.log(setInterval(() => {
    if(memory != customers.length){
        for (let i = 0; i < customers.length; i++) {
            console.log('At table number ' + customers[i][1] + ', sits Mr: ' + customers[i][0] + ', they are a group of ' + customers[i][2]);
        }
        console.log('---------------------------');
        memory = customers.length;
    }
}, 8000));

function newCustomer() {
    // Prompt usr for a Name
    const name = prompt("Hello, what is your name?");

    let size = 0;
    let askAboutTableSize = "";

// Prompt usr for number of people
    while(true) {
        if (size == 0) {
            askAboutTableSize = "Hello " + name + "! Table for how many people?";
        }
        else {
            askAboutTableSize = "Unfortunately we don't have a table for that many people. Please ask the smaller table size.";
        }

        size = parseInt(prompt(askAboutTableSize));

        if(size != 0 && Math.max(...tableSizes) >= size) {
            break;
        }
    }
    
    let tableNumber = 0;

    if (tableSizes.indexOf(size) >= 0) {
        tableNumber = tableSizes.indexOf(size);
    }
    else {
        tableNumber = tableSizes.indexOf(Math.max(...tableSizes));
    }

    // there are some customers
    if (customers.length > 0){
        let tableTaken = false;

        // Check currently seated tables
        for (let i = customers.length -1; i >= 0; i--){
            if (customers[i][1] == tableNumber) {
                tableTaken = true;
                break;
            }
        }

        // table is taken
        if (tableTaken) {
            alert("All tables are taken, Wait to be seated!");
        } 
        // table is not taken
        else {
        alert("You got table number: " + tableNumber + ", which by default can fit " + tableSizes[tableNumber] + " people.");
        
        customers.unshift([name, tableNumber, size]);
        }
    }
    // Ther is no Customers
    else {
    console.log("Empty Restaurant");
    alert("You got table number: " + tableNumber + ", which by default can fit " + tableSizes[tableNumber] + " people.");

    customers.unshift([name, tableNumber, size]);
    }

}

// Generates an uniteligble Name
function randomName() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0,5);
}

// Stops random assignment of customers
function stopSneakyAttack() {
    if(sneakyAttackId != 0){
        clearInterval(sneakyAttackId);
        console.log('Sneaky attack Stopped!');
    }
}
// Starts random assignment of customers
function sneakyAttack() {
    sneakyAttackId = setInterval(() => {
        
        let tableNumber = getRandomInt(0, tableSizes.length);
        
        if (customers.length > 0){
                let tableTaken = false;
        
                // Check currently seated tables
                for (let i = customers.length -1; i >= 0; i--){
                    if (customers[i][1] == tableNumber) {
                        tableTaken = true;
                        break;
                    }
                }
                // Try a new table
                if (tableTaken) {
                    tableNumber = getRandomInt(0, tableSizes.length);
                    console.log('Grrrrr!! ' + tableNumber);
                }
                else {
                    customers.push([randomName(),tableNumber, 1 ]);
                    console.log('Shhhhhh');
                    return;
                }

            }
        else {
        customers.push([randomName(),tableNumber, 1 ]);
        console.log('Shhhhhh');
        return;
        }
        }, 3000);
}

// Clears the spesified table (array index)
function freeTable() {
    let index = parseInt(prompt("Which table have you cleaned? (table numbers 0-" + tableCount + ")"));

    while (index < 0 || index >= tableCount) {
        index = parseInt(prompt("We don\'t have that table number! Try agaon smart ass."));
    }

    for(let i = customers.length - 1; i >= 0; i--) {
        if(customers[i][1] == index){
            customers.splice(i,1);
        }
    }
}

function getTableNumber() {

}