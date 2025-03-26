// 1
let containerDiv = document.getElementById("container");
console.log(containerDiv);

// 2
let lists = document.querySelectorAll(".list"); 
lists[0].children[1].textContent = "Richard";

// 3
lists[1].children[1].remove();

// 4
lists.forEach(list => {
    list.children[0].textContent = "Mohamed";
});

// 5
lists.forEach(list => {
    list.classList.add("student_list");
});

// 6
lists[0].classList.add("university", "attendance");

// 7
containerDiv.style.backgroundColor = "lightblue";
containerDiv.style.padding = "10px";

// 8
let danLi = lists[1].children[1]; 
danLi.style.display = "none";

// 9
let richardLi = lists[0].children[1];
richardLi.style.border = "2px solid black";

// 10
document.body.style.fontSize = "18px";

//  Bonus:
if (containerDiv.style.backgroundColor === "lightblue") {
    let users = Array.from(lists[0].children).map(li => li.textContent);
    alert(`Hello ${users[0]} and ${users[1]}`);
}
