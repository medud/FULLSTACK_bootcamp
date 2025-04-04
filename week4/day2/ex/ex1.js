const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Display colors in the required format
colors.forEach( (colors,index)=>{
console.log(`${index+1}# choice is ${colors}.`);
});

if (colors.some(color => color === "Violet")) {
    console.log("Yeah");
} else {
    console.log("No...");
}


