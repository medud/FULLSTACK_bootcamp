// 1️⃣ Retrieve the form and log it
const form = document.getElementById("userForm");
console.log(form);

// 2️⃣ Retrieve the inputs by ID and log them
const firstNameInput = document.getElementById("fname");
const lastNameInput = document.getElementById("lname");
console.log(firstNameInput, lastNameInput);

// 3️⃣ Retrieve inputs by name attribute and log them
const firstNameByName = document.getElementsByName("firstname")[0];
const lastNameByName = document.getElementsByName("lastname")[0];
console.log(firstNameByName, lastNameByName);

// 4️⃣ Select the <ul> where answers will be displayed
const usersAnswerList = document.querySelector(".usersAnswer");

// 5️⃣ Add submit event listener to the form
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents page refresh when submitting

    // Get input values
    const firstNameValue = firstNameInput.value.trim();
    const lastNameValue = lastNameInput.value.trim();

    // Check if fields are not empty
    if (firstNameValue === "" || lastNameValue === "") {
        alert("Both fields are required!");
        return;
    }

    // Create list items for each input value
    const firstNameLi = document.createElement("li");
    firstNameLi.textContent = firstNameValue;

    const lastNameLi = document.createElement("li");
    lastNameLi.textContent = lastNameValue;

    // Append <li> elements to the <ul>
    usersAnswerList.appendChild(firstNameLi);
    usersAnswerList.appendChild(lastNameLi);

    // Clear input fields after submission
    firstNameInput.value = "";
    lastNameInput.value = "";
});
