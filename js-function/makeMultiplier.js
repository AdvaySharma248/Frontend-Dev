function makeMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
console.log(triple(5));

const double = makeMultiplier(2);
console.log(double(10));

const square = makeMultiplier;
console.log(square(4)(4));

function createCalculator(base) {
    return {
        multiply: makeMultiplier(base),
        add: (num) => num + base,
        subtract: (num) => num - base
    };
}

const calc = createCalculator(5);
console.log(calc.multiply(3));
console.log(calc.add(10));
console.log(calc.subtract(20));