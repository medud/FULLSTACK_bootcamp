// #1
function funcOne() {
    let a = 5;
    if (a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`); 
    // Output: "inside the funcOne function 3"
}

funcOne(); 

//  If `a` is declared with `const`, reassigning it to 3 will cause an error
// because constants cannot be reassigned after initialization.


// #2
let a = 0; 
function funcTwo() {
    a = 5; // This modifies the globally declared `a`
}

function funcThree() {
    alert(`inside the funcThree function ${a}`); 
    // Prediction: This will alert the current value of `a`
}

// #2.1 - run in the console:
funcThree(); // Output: "inside the funcThree function 0" (since `a` is initially 0)
funcTwo();   // Updates `a` to 5
funcThree(); // Output: "inside the funcThree function 5"

//  If `a` is declared as `const`, calling `funcTwo()` will cause an error because constants cannot be reassigned.



// #3
function funcFour() {
    window.a = "hello"; 
}

function funcFive() {
    alert(`inside the funcFive function ${a}`); 
   
}

// #3.1 - run in the console:
funcFour(); // Sets `window.a = "hello"`
funcFive(); // Output: "inside the funcFive function hello"


// #4
let a = 1; 
function funcSix() {
    let a = "test"; // Local `a`, does not affect global `a`
    alert(`inside the funcSix function ${a}`); 
}

// #4.1 - run in the console:
funcSix(); 

//  No issue; `a` inside `funcSix` is block-scoped and doesn't change after declaration.


// #5
let a = 2; 
if (true) {
    let a = 5; // This `a` exists only inside the `if` block
    alert(`in the if block ${a}`); 
    // This will output "in the if block 5"
}
alert(`outside of the if block ${a}`); 
//  The global `a` remains 2, so the output will be "outside of the if block 2"


// #5.2 What will happen if the variable is declared with const instead of let?
// No change in behavior; `const` also respects block scope.
$