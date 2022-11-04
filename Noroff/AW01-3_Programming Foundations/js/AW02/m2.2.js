function toParagraph (para = "aOut2.1", value = 'Not Yet') {
    document.getElementById(para).innerHTML = value;
}
/*
const menuItems = new Map([
    ['Margarita', 9],
    ['Pepperoni', 10],
    ['Salami', 10]
]);


menuItems.forEach (function(value, key) {
    console.log('Dish:', key, 'Price:', value)
});

let text = "";
for (const x of menuItems.entries()){
    text += x + ' | ';
}

console.log(text);
*/

const w3Factorial = (value) => {
    if(value === 0) {
        return 1;
    }
    return value * w3Factorial(value-1);
}

const w3Gcd = (vA, vB) => {
    if (!vB) {
        return vA;
    }
    return w3Gcd(vB, vA % vB);
}

const w3Range =  (start, end) => {
    if (end - start === 2) {
        return [ start + 1 ];
    }
    else {
        var list = w3Range(start, end -1);
        list.push(end - 1);
        return list;
    }
}

const w3ArraySum = (w3Array) => {
    if (w3Array.length === 1) {
        return w3Array[0];
    }
    else {
    return w3Array.pop() + w3ArraySum(w3Array);
    }
}

const w3Fibonacci = (value) => {
    if (value === 1){
        return [0, 1];
    }
    else {
        var s = w3Fibonacci(value - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
}

const w3EvenRecursion = (value) => {
    if (value < 0) { value = Math.abs(value); }
    if (value === 0) { return true; }
    if (value === 1) { return false;}
    else {
        value = value - 2;
        return w3EvenRecursion(value);
    }
}

Array.prototype.w3BinaryRecursion = function(target) {
    var half = parseInt(this.length / 2);
    if (target === this[half]) { return half; }
    if (target > this[half]) { return half + this.slice(half, this.length).w3BinaryRecursion(target); }
    else { return this.slice(0, half).w3BinaryRecursion(target);}
}

Array.prototype.w3MergeSort = function() {
    if (this.length <= 1) { return this; }

    var half = parseInt(this.length / 2);
    var left = this.slice(0, half).w3MergeSort();
    var right = this.slice(half, this.length).w3MergeSort();

    var merge = function (left, right) {
        var arry = [];
        while (left.length > 0 && right.length > 0) {
            arry.push((left[0] <= right[0]) ? left.shift() : right.shift());
        }
        return arry.concat(left).concat(right);
    }

    return merge(left, right);
}

