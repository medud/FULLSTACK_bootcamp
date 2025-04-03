// Using Function Declaration
function kgToGrams(weight) {
    return weight * 1000;
}
console.log(kgToGrams(5)); // Output: 5000

// Using Function Expression
const kgToGramsEx = function(weight) {
    return weight * 1000;
};

console.log(kgToGramsEx(3)); // Output: 3000


// Arrow Function
const weightfun =(a)=>a*1000
console.log(weightfun(4));



