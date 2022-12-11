function toParagraph (para = "aOut1", value = 'Not Yet') {
    document.getElementById(para).innerHTML = value;
}

function assignment1() {
    const student1 = new student("student1", "a name", 34);
    const student2 = new student('student2', 'a name', 68);
    const student3 = new student('student3', 'a name', 20);
    const student4 = new student('student4', 'a name', 40);

    console.log(student1.greetings);
    console.log(student2.greetings);
    console.log(student3.greetings);
    console.log(student4.birthYear);

    let tPValue = student3.birthYear;
    toParagraph('aOut1', "fuck me! i\'ts bugged");
}

class student {
    constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    }

    greetings() {
        return 'Hello my name is ' + this.name + ' ' + this.surname + ',';
    }

    birthYear() {
        let date = new Date();
        return ('I\'am ' + (date.getFullYear() - this.date));
    }
}

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    set year(newYear) {
        let date = new Date();
        if (newYear > date.getFullYear()) {
            this.year = date.getFullYear();
        }
        else {
            this.year = newYear;
        }
    }

    get year() {
        return this.#_year;
    }

    age() {
        let date = new Date();
        return date.getFullYear() - this.#_year;
    }
}


class House {
    constructor(name){
        this.name = name;
    }

    info(){
        return 'This house is the: ' + this.name + '. ';
    }

    static greetings() {
        return 'The Landlord has Arrived!'
    }
}

class Villa extends House {
    constructor(name, prestige) {
        super(name);
        this.prestige = prestige;
    }

    info() {
        return super.info() + 'It has the prestige ' + this.prestige + ' out of 10. '
    }
}

class DetachedHouse extends House {
    constructor(name, hasGarden) {
        super(name);
        this.hasGarden = hasGarden;
    }
}


class Pizza {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    info() {
        return 'I am basic pizza: ' + this.name + 'I cost: ' + this.price;
    }
}

class AmericanPizza extends Pizza {
    constructor(name, price, sauce) {
        super(name, price);
        this.sauce = sauce;
    }

    info(){
        return 'I am American pizza: ' + this.name + 'I cost: ' + this.price + 'I have ' + this.sauce;
    }
}

class ItalianPizza {
    constructor(name,price,region) {
        super(name,price);
        this.region = region;
    }

    info(){
        return 'I am Italian pizza: ' + this.name + 'I cost: ' + this.price + 'I\'m from the ' + this.region + ' region.'; 
    }
}