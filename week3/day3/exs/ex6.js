// 1
let navBar = document.getElementById("navBar");
navBar.setAttribute("id", "socialNetworkNavigation");

// 2
let newLi = document.createElement("li");

// 3
let textNode = document.createTextNode("Logout");

// 4
newLi.appendChild(textNode);

// 5
let ul = document.querySelector("#socialNetworkNavigation ul");
ul.appendChild(newLi);

// 6
let lastLi = ul.lastElementChild;

console.log("First link text:", firstLi.textContent);
console.log("Last link text:", lastLi.textContent);
