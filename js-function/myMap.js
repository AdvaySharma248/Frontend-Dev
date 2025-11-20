Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.myMap(num => num * 2);
console.log(doubled);

const names = ["Alice", "Bob", "Charlie"];
const nameLengths = names.myMap(name => name.length);
console.log(nameLengths);

const squares = numbers.myMap(num => num * num);
console.log(squares);

Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

const evens = numbers.myFilter(num => num % 2 === 0);
console.log(evens);

const longNames = names.myFilter(name => name.length > 4);
console.log(longNames);