function displayNumbersDivisible(divisor) {
    let sum = 0;
    console.log(`Numbers divisible by ${divisor}:`);
    
    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            console.log(i);
            sum += i;
        }
    }
    
    console.log(`Sum of all numbers divisible by ${divisor}:`, sum);
}

displayNumbersDivisible(23);
