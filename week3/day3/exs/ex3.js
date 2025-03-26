function changeEnough(itemPrice, amountOfChange) {
    const coinValues = [0.25, 0.10, 0.05, 0.01];

    let totalMoney = 0;
    for (let i = 0; i < amountOfChange.length; i++) {
        totalMoney += amountOfChange[i] * coinValues[i];
    }

    console.log(`You have $${totalMoney.toFixed(2)}`); 
    return totalMoney >= itemPrice;
}

console.log("Can afford?", changeEnough(4.25, [25, 20, 5, 0])); // true (You have $8.50)
console.log("Can afford?", changeEnough(10, [10, 10, 10, 10])); // false (You only have $4.60)
