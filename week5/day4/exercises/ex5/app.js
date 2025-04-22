// app.js

const _ = require('lodash');           // import lodash
const math = require('./math.js');     // import your custom module

// Using math module
const sum = math.add(10, 5);
const product = math.multiply(4, 6);

// Using lodash to sum an array
const arraySum = _.sum([1, 2, 3, 4, 5]);

console.log(`Sum (10 + 5): ${sum}`);
console.log(`Product (4 * 6): ${product}`);
console.log(`Lodash sum of [1,2,3,4,5]: ${arraySum}`);
