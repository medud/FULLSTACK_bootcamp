function makeJuice(size) {
    let ingredients = []; 

    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3); 
    }

    function displayJuice() {
        const orderMessage = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;

        document.getElementById("order").textContent = orderMessage;
        console.log(orderMessage); 
    }

    addIngredients("apple", "banana", "orange");
    addIngredients("strawberry", "mango", "pineapple");

    displayJuice();
}

makeJuice("large");
