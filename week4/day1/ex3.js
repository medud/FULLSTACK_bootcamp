const isString = (value) => typeof value === 'string';

console.log(isString('hello')); // true
console.log(isString([1, 2, 4, 0])); // false
console.log(isString(123)); // false
console.log(isString({ key: 'value' })); // false
console.log(isString(true)); // false
