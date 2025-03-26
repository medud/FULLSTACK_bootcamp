const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserInput(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

function hotelCost(nights) {
    return nights * 140; 
}

function planeRideCost(destination) {
    destination = destination.toLowerCase();
    switch (destination) {
        case "london":
            return 183;
        case "paris":
            return 220;
        default:
            return 300;
    }
}

function rentalCarCost(days) {
    let cost = days * 40; 
    if (days > 10) {
        cost *= 0.95; 
    }
    return cost;
}

async function totalVacationCost() {
    let nights, destination, days;

    while (true) {
        nights = await getUserInput("How many nights will you stay in the hotel? ");
        nights = parseInt(nights);
        if (!isNaN(nights) && nights > 0) break;
        console.log("Please enter a valid number of nights.");
    }

    while (true) {
        destination = await getUserInput("What is your destination? ");
        if (destination && isNaN(destination)) break;
        console.log("Please enter a valid destination.");
    }

    while (true) {
        days = await getUserInput("How many days will you rent the car? ");
        days = parseInt(days);
        if (!isNaN(days) && days > 0) break;
        console.log("Please enter a valid number of days.");
    }

    let hotel = hotelCost(nights);
    let flight = planeRideCost(destination);
    let carRental = rentalCarCost(days);
    
    let totalCost = hotel + flight + carRental;

    console.log(`\nThe car cost: $${carRental}, the hotel cost: $${hotel}, the plane ticket cost: $${flight}.`);
    console.log(`Total vacation cost: $${totalCost}`);

    rl.close(); 
}

totalVacationCost();

