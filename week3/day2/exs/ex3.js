const prompt = require("prompt-sync")(); 
let userInput;

do {
    userInput = prompt("Enter a number: "); 
    console.log("You entered:", userInput);
    console.log("Data type:", typeof userInput); 
} while (Number(userInput) < 10); 

console.log("Thank you! The number is 10 or greater.");
