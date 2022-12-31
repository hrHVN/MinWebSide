class MenuItems {
    constructor(name,price) {
        this.name = name;
        this.price = price;
    }
    
    info() {
        return 'I am menu Item: ' + this.name + 'I cost: ' + this.price;
    }
}

class Pizza extends MenuItems { 
    constructor(name, price, inGredients) {
        super(name, price);
        this.inGredients = inGredients;
    }
    info() {
        let allergies = 'Pizza: ' + this.name + ' Price: ' + this.price + ' Ingredients: ';

        for(var i = 0; i < this.inGredients.length; i++){
            allergies += this.inGredients[i];
            if(i == this.inGredients.length - 1){
                allergies += ".";
            }
            else {
                allergies += ", ";
            }
        }
        return allergies;
    }
}

class Pasta extends MenuItems{ 
constructor(name, price, isVegan = false) {
    super(name,price);
        this.isVegan = isVegan;
    }
    info() {
        if (!this.isVegan){
        return 'Pasta: ' + this.name + 'Price: ' + this.price;
        }
        else {
            return 'Pasta: ' + this.name + 'Price: ' + this.price + 'Vegan';
        }
    }
}

class Pancakes extends MenuItems {
    constructor(name,price, isSweet = true) {
        super(name,price);
        this.isSweet = isSweet;
    }

    info() {
        if (!this.isSweet){
        return 'Non sweetened Pancakes: ' + this.name + 'Price: ' + this.price;
        }
        else {
            return 'Sweet Pancakes: ' + this.name + 'Price: ' + this.price; 
        }
    }
}

let HawaianPizza = new Pizza('Hawaian', 250, ['ost', 'tomat', 'annanas', 'skinke', 'oliven']);
console.log(HawaianPizza.info());